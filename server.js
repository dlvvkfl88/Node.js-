const express = require('express')
const app = express()

// public 폴더를 만들어야함
// main.css를 쓰기위해 server.js에 등록하기위해서
// 이후 아래 app.use(__dirname + '/index.html') # 현재경로 파일명 사용

app.use(express.static(__dirname + '/public'))


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

app.get('/about',(요청,응답) => {
    응답.sendFile(__dirname + '/myName.html')
})
