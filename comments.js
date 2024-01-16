//Create web server
//Create a web server that's going to send a response of big image (bigger than 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    const filePath = path.join(__dirname, 'bigImage.jpg');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
});

server.listen(3000, () => console.log('Server is listening on port 3000...'));