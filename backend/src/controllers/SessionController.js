/*
index - listagem de seções;
show - listar uma única seção;
store - criar uma seção;
update - editar seção;
destroy - deletar seção.
*/
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const email = req.body.email // ou const {email} = req.body
        let user = await User.findOne({email})

        if(!user){
            user = await User.create({email})
        }

        return res.json(user)
    }
}