const lapkaBtn = document.querySelector(".lapkaSearch")
const audio = document.getElementById('audio')
const device = navigator.mediaDevices.getUserMedia({audio: true})

const audioData = new FormData()
let items = []
device.then(stream => {
    let recorder = new MediaRecorder(stream)
    recorder.ondataavailable = e=>{
        items.push(e.data)
        if(recorder.state == 'inactive'){
            let blob = new Blob(items, {type: 'audio/mp3'})
            // audioData.append('audio', blob)
            let mainAudio = document.createElement('audio')
            mainAudio.setAttribute('controls', 'controls')
            audio.appendChild(mainAudio)
            mainAudio.innerHTML = '<source src="'+URL.createObjectURL(blob)+'"type="video/webm"/>'
        }
    }


lapkaBtn.addEventListener('click', ()=>{

    if(lapkaBtn.classList.contains('recording')){
        recorder.stop()
        lapkaBtn.classList.remove('recording')
        audio.style.opacity = 1
    }
    else{
        recorder.start(100)
        lapkaBtn.classList.add('recording')
    }
    })
})



