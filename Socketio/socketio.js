const express = require('express');
const http = require('http');
const path = require('path');
const {Server: SocketIo} = require('socket.io');
const {spawn}  = require('child_process');

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server);


const options = [
    '-i',
    '-',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-r', `${25}`,
    '-g', `${25 * 2}`,
    '-keyint_min', 25,
    '-crf', '25',
    '-pix_fmt', 'yuv420p',
    '-sc_threshold', '0',
    '-profile:v', 'main',
    '-level', '3.1',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', 128000 / 4,
    '-f', 'flv',
    `rtmp://a.rtmp.youtube.com/live2/gvmt-m39v-s93w-r14t-0prv`,
];

// const ffmpegProcess = spawn('ffmpeg', options);

// ffmpegProcess.stdout.on('data',(data)=>{
//     console.log(`ffmpeg stdout: ${data}`);
// });

// ffmpegProcess.stderr.on('data',(data)=>{
//     console.log(`ffmpeg stderr: ${data}`);
// });

// ffmpegProcess.on('close',(code)=>{
//     console.log(`ffmpeg process exited with code  ${data}`);
// });

app.use(express.static(path.resolve('./public')));

io.on('connection', (socket) =>{
    console.log('Socket Connected', socket.id);
    socket.on('binarystream', (stream) =>{
        console.log("Binary Sreame Incomming");
        // ffmpegProcess.stdin.write(stream, (err) => {
        //     if (err) {
        //         console.error('Error writing binary stream to ffmpeg stdin:', err);
        //     }
        // });

    })
})

server.listen(3001, ()=>{
    console.log(`HTTP Server Running on PORT 3001`);
})