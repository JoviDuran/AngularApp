const  express = require('express');

const PORT = 1111;
const app = express();
const path = require('path');

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app/app.component.html'))
});


app.listen(PORT, () =>{
    console.info(`Server is running @localhost: ${PORT}`);
})