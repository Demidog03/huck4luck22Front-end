let yandexKitResult

document.querySelector('#audioUpload').addEventListener('input', (e) => {
    console.log(e.target.files);
    if (e.target.files.length) {
        let audio = new Audio(
            URL.createObjectURL(e.target.files[0])
        );
        console.log(e.target.files[0])

        /**Posting audio file to yandex cloud*/
        async function postData() {
            const formData = new FormData();
            formData.append("audio", e.target.files[0]);
            const result = await fetch('http://localhost:8080/api/audio?channel_count=1&encoding=LINEAR16_PCM&rate_hertz=48000', {
                method: 'POST',
                body: formData
            })
            console.log(result)
        }

        postData()



    }
});
/**Getting result of yandex speech to text*/
    async function getData(url) {
        await fetch(url, {
            method: 'GET',
        }).then(r => r.json()).then(data => {
            yandexKitResult = data.text


            /**Uploading text to postChatgpt API*/
            async function postChatgpt(url) {
                const response = fetch(url, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    //make sure to serialize your JSON body
                    body: JSON.stringify({
                        status: 'DONE',
                        text: `Конвертируй текст в таблицу в формате CSV где указаны деталь и номер, только результат без лишних слов. Ввод: ${yandexKitResult}`
                        //
                    })
                }).then(res => res.json()).then(data => {
                    console.log(data)
                })
                console.log(response)
            }

            postChatgpt('http://localhost:5000/')
        })
    }


    getData('http://localhost:8080/api/recognition.result?request_id=12')










