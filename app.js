

const express = require("express");

const app = express();
app.use(express.static('public'))

app.get('/home', (request, response)=> {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response)=> {
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/work', (request, response)=> {
    response.sendFile(__dirname + '/views/work.html')
});

app.get('/photo-gallery', (request, response)=> {
    response.sendFile(__dirname + '/views/photo-gallery.html')
});




app.listen(3001, ()=> console.log('App is listening on PORT 3001'));
















// Start the server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));