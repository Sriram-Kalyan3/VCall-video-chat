const express = require('express')
const router = express.Router()
const {v4: uuidV4} = require('uuid')
const server = require('http').Server(router)
const io = require('socket.io')(server)
// var io = req.app.get('socketio')
module.exports = (io)=>{
    router.get('/',(req,res)=>{
        res.redirect(`/stream/${uuidV4()}`)
    })
    io.of('/stream').on('connection',(stream)=>{
        console.log('VidStreamConnected')
    })
    router.get('/:room',(req,res)=>{
        res.render('room',{roomId: req.params.room})
    })
    return router
}
