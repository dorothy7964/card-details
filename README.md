# yarn 설치

```javascript
//backend
yarn global add supervisor
yarn add express cors body-parser

//frontend
yarn add axios
```

### backend

### **`supervisor`**

-g : 한번 설치하면 어디서든 동작
supervisor 설치 후에는
서버 시작할 때 node app.js로 대신 **supervisor app.js** 쓴다.
자동으로 서버를 죽였다 다시 켜준다.

### **`express`**
서버 통신 프레임 워크

### **`cors`**  
백과 프런트 통신을 허락하기 위해서 사용

### **`body-parser`**
정보들을 사람이 보기 쉽게 나타나게 해준다.

<br/>

### frontend

**`axios`**
요청, 응답 데이터를 변환 해준다.

<br/>

## 서버 실행

```javascript
//backend
supervisor server.js

//frontend (npm, yarn 둘 중 하나로 실행)
yarn start
npm start
```

**backend**
주소창에 http://localhost:4000/company 으로 들어가면 된다.

**frontend**
주소창에 http://localhost:3000/ 으로 들어가면 된다.

각 backend, frontend 폴더에서 cmd 해주기

# frontend 폴더

**`axios`** 요청, 응답 데이터를 변환

### css/company.css

`box-sizing: border-box;` box-sizing 속성을 border-box 로 지정하면 테투리를 포함한 크리를 지정

`text-overflow: ellipsis;` ellipsis 잘린 텍스트를 생략 부호 (...)로 표시

`white-space: nowrap;`   
**white-space** : 박스 안에 내용이 넘칠 때 텍스트를 어떻게 처리할지 지정하는 속성  

**nowrap** : (텍스트가 길어도 줄바꿈 되지 않음) 또는 텍스트가 다음 줄로 이동하지 않는 비슷한 경우

`word-wrap: normal;`   
**word-wrap** : word-wrap 속성은 긴 텍스트를 강제로 끊어 줄바꿈을 해주는 속성  

**normal** : 기본 값으로, 글자가 길어도 끊어지지 않고 한 줄에 계속 표시  

**break-word** : 강제로 끊어서 줄 바꿈

<br/>

# backend 폴더
**`express`** 서버 통신 프레임 워크

<br/>

**`cors`** back과 front의 통신을 허락하기 위해서 사용

서버 응답 허락해주기			
크로스(백앤드와 프런트 통신으로인해 ) 응답이 안되는 경우			
수락해서 통신이 되도록하는 것			
backend 폴더 들어가서 server.js에서 수락하기			
**const cors = require('cors')();**
