const socket = io('/stream');
const videoGrid = document.getElementById('video-grid')
const sharelink = document.getElementById('sharelink')

sharelink.innerHTML += window.location.href

const myPeer = new Peer()
const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    addVideoStream(myVideo,stream)
    
    myPeer.on('call',call =>{
        call.answer(stream)
        const video = document.createElement('video')
        video.muted = true
        call.on('stream',userVideoStream=>{
            addVideoStream(video,userVideoStream)
        })
    })

    socket.on('user-connected',userId=>{
        console.log(userId)
        connectToNewUser(userId, stream)
    })
})

socket.on('user-disconnected',userId=>{
    console.log(userId)
    if (peers[userId]){
        peers[userId].close()
    }
})

myPeer.on('open', id=>{
    console.log('hello')
    socket.emit('join-room', ROOM_ID, id)
})

function addVideoStream(video,stream){
    video.srcObject = stream
    video.addEventListener('loadedmetadata',()=>{
        video.play()
    })
    videoGrid.append(video)
}

function connectToNewUser(userId,stream){
    const call = myPeer.call(userId,stream)
    const video = document.createElement('video')
    video.muted = true

    call.on('stream',userVideoStream=>{
        addVideoStream(video,userVideoStream)
    })

    call.on('close',()=>{
        video.remove()
    })

    peers[userId] = call

}