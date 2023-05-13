const User = require('../Models/user.js');
const jwt = require('jsonwebtoken');
const FabItem = require('../Models/fab_item.js');
const SubAssemblyItem = require('../Models/subAssembly_item.js');
const FabOrder = require('../Models/fab_orders.js');

const userSecret = 'Aerothon5.0ProblemSolution'

const ROLES = Object.freeze({
    admin: 'ADMIN',
    fab: 'FABRICATION',
    subAssembly: 'SUB-ASSEMBLY',
    assembly: 'ASSEMBLY'
})

const createJWT = (id) =>{
    return jwt.sign({id}, userSecret,
    {
        expiresIn: 24*60*60  //seconds
    });
}

const errHandler = (err) =>{
    let errors = {name:'', email: '', password: ''}
    console.log('error',err.code,  err.message);

    if(err.code === 11000) {
        errors.email = 'this email already registered';
        return errors
    }

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message;
        })
        return errors;
    }

    if(err.message === 'incorrect credentials'){
        errors.password = errors.email = 'incorrect credentials';
        return errors;
    }
}

const signup = async (req, res) =>{
    const { name, email, password, role } = req.body;
    try{
        const user = await User.create({name, email, password, role}).catch(error=>{ throw error });
        const token = createJWT(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 24*60*60*1000, secure: false})
        res.status(201).json({message: "success", userID: user._id})
    }
    catch(error){
        let errObject = errHandler(error);
        res.status(400).json(errObject);
    }

}

const login = async (req, res) =>{
    const { email, password } = req.body;
    console.log("device requesting logining in");
    try{
        const user = await User.login(email, password).catch(error=>{ throw error });
        const token = createJWT(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 24*60*60*1000,  secure: false})
        res.status(201).json({message: "success", userID: user._id})
    }
    catch(error){
        let errObject = errHandler(error);
        res.status(400).json(errObject);
    }
}

const verify = async (req, res, next) =>{
    console.log("verify user is being called");
    const token = req.cookies.jwt;
    console.log(token);
    if( token  ) {
        console.log("user token found");
        jwt.verify(token, userSecret, async (err, decodedToken) =>{
            if(err) {
                console.log(err.message);
            }else{
                User.findById(decodedToken.id).then((user)=>{
                    next();
                })
            }
        })
    }
    else{
        res.status(400).json({message: 'error'});
        // next();
    }
}

const getUserRole = async  (req, res) =>{
    const uid = req.params.uid
    console.log('request by uid ', uid);
    try{
        let result = await User.findOne({_id: uid});
        if(result) res.status(200).json({role: result.role})
    }catch(err){
        res.status(400)
    }
}

const createFabItem = async (req, res) =>{
    const {itemName, materialsRequired} = req.body;
    try{
        await FabItem.create({itemName, materialsRequired})
        res.status(200).json({'message': "item created"})
    }
    catch(err){
        res.status(400).json({message: 'couldnt create item'})
    }
}

const createFabOrder = async (req, res) =>{
    const {itemID, quantity, inDate, outDate} = req.body
    try{
        await FabOrder.create({itemID, quantity, inDate, outDate})
    }
    catch(err){
        res.status(400).json({message: "couldn't create fab item order"})
    }
}

const getFabItems = async (req, res)=>{
    try{
        let list = [];
        await FabItem.find().then(result=>{
            list.push(...result)
        })
        res.status(200).json({list})
    }
    catch(err){
        res.status(400).json({message: "couldn't fetch the results"})
    }
}

const getFabOrders = async (req, res) =>{
    try{
        let list = [];
        await FabOrder.find().then(result=>{
            result.forEach(async entry=>{
                let name = await FabItem.findOne({_id: entry.itemID})
                list.push({...entry, itemName: name.itemName, itemDescription: name.materialsRequired})
            })
        })
        res.status(200).json({list})
    }
    catch(err){
        res.status(400).json({message: ''})
    }
}

const createSubAssemblyProcess = async (req, res) =>{
    const {processName, fabricationsRequired} = req.body
    try{
        await SubAssemblyItem.create({processName, fabricationsRequired})
    }catch(err){
        res.status(400).json({message: "error while creating"})
    }
}

// const getSubAssemblyProcess = async (req, res)=>{
//     try{
//         let list = [];
//         await 
//     }
// }

const logout = (req, res) =>{
    console.log('user loged out');
    res.cookie('jwt', "", { maxAge: 1});
    res.status(200).json({logout: true});
}

module.exports = { createFabOrder, getFabOrders, signup, login, logout, verify, getUserRole, createFabItem, getFabItems, createSubAssemblyProcess }