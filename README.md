# RENDU2

this project is for extract data from api "panorama-des-festivals"


```bash
npm install
```

```bash
npm run test 
```

if you want to test the code you can create a folder build with the file index.js, you can add the code below in index.js
```bash
const getDataFromAPI = require('../index');

(async() => {
    console.log(await getDataFromAPI())
})();
```



```bash
node build/index.js
```