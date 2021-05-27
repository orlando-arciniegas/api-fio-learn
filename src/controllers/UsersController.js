import User from '../models/User';
import {getPaginate} from '../libs/getPaginate'

const UsersController = {
    paginate: async (req, res) => {
        try {
            const {size, page, name} = req.query;

            const condition = name 
            ? {
                name: { $regex: new RegExp(name), $options:"i" }
            } : {};

            const {limit, offset} = getPaginate(page, size);
            
            const listUsers = await User.paginate(condition, {offset, limit});
            res.json({
                total: listUsers.totalDocs,
                users: listUsers.docs
            })

        } catch (error){
            res.status(500).json({
               message: error.message || 'Ups algo salió mal'
            })
        }   
    },
    index: async (req, res) => {
        try {
            const listUsers = await User.find();
            res.send(listUsers)
        } catch (error){
            res.status(500).json({
               message: error.message || 'Ups algo salió mal'
            })
        }   
    },
    store: async (req, res) => {
        const newUser = new User({
            role: req.body.role ? req.body.role : false,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        })
        const userSave = await newUser.save();
    },
    findUser: async (req, res) => {
        const {id} = req.params;
        const userFound = await User.findById(id);
        if(!userFound)
        return res.status(404).json({
                message: `El usuario ${id} no existe`
            })
        
        res.json(userFound);
    },
    deleteUser: async (req, res) => {
        const userDelete = await User.findByIdAndDelete(req.params.id);
        res.json({
            message: `El usuario fue eliminado.`
        })
    },
    filterUser: async (req, res) => {
        const userFilter = await User.find({role: true});
        res.json(userFilter)
    },
    updateUser: async (req, res) => {
        const userUpdate = await User.findOneAndUpdate(req.params.id, req.body);
        res.json({
            message: "Usuario actualizado."
        })
    }
}

export default UsersController;