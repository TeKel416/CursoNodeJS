const { spawn } = require('child_process');
// parent = variável para pegar a pasta anterior
const parent = process.argv[2];
// process.argv = node videos -> ./src <-
let videos = [];

if(process.argv[2]){
    // video inicial
    const start = parseInt(process.argv[3]);
    //video final a ser comprimido
    const end = parseInt(process.argv[4]);

    for (let i = start; i <= end; i++){
        videos.push(i);
    };

    videos.reverse();
    processVideo();

} else{
    console.log('É necessário criar um diretório de nível superior');
};

// função para redimensionar o vídeo
function resize(video, quality){
    const p = new Promise((resolve, reject)=>{
        const ffmpeg = spawn('./ffmpeg/bin/ffmpeg', [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ]);

        ffmpeg.stderr.on('data', data=>{
            console.log(data);
        });

        ffmpeg.on('close', ()=>{
            resolve();
        });
    });

    return p;
};


async function processVideo(){
    let video = videos.pop();
    if(video){
        try {
            await resize(video, 1080);
            await resize(video, 280);
            await resize(video, 144);

            console.log(`Vídeos renderizados - ${video}`);
            processVideo();

        } catch (error) {
            console.log(error);
        }
    };
};