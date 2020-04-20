//Importação de Recursos
const express = require('express')
const multer = require('multer')
const uploadConfig = require('./configs/upload')

//Controladores
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

//Criação de Ferramentas
const routes = express.Router()
const upload = multer(uploadConfig)

//Rotas
routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.get('/dashboard', DashboardController.show)
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes

/*
get = buscar informação do backend
post = criar uma nova informação
put = editar informação
delete = deletar informação 
*/