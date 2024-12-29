const express = require('express')
const app = express()

app.listen(8080,() => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

//html 파일을 본고 싶으면 send가 아닌 sendFile(__dirname + '/index.html')

app.get('/',(요청,응답) => {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/news',(요청,응답) => {
    응답.send('오늘 비온다')
})


app.get('/shop',(요청,응답) => {
    응답.send('쇼핑페이지 입니다')
})

