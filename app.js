const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const port = 80//'your port number (write it in numeric format not string)';
const host = '192.168.1.132'//webXR works only on https connection

https.createServer(
    {
        key: fs.readFileSync("private_key.pem"),
        cert: fs.readFileSync("cert.pem"),
    }
    , app)
    .listen(port, host, () => {
        console.log('Server started at https://' + host + ':' + port);
        console.log('Visit the examples:')
        console.log('https://' + host + ':' + port + "/exampleAnimation");
        console.log('https://' + host + ':' + port + "/exampleStandard");
        console.log('https://' + host + ':' + port + "/exampleRobot");
        console.log('https://' + host + ':' + port + "/exampleIndustrialRobot");
        console.log('https://' + host + ':' + port + "/exampleAnimal");
        console.log('https://' + host + ':' + port + "/allInOne");
        console.log('Connect to the example via qrCode:');
        console.log('https://' + host + ':' + port + "/qrCode");
    });

app.use("/", express.static(path.join(__dirname)));

app.get("/exampleAnimation", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/example_animation.html'));
})

app.get("/exampleStandard", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/example_standard.html'));
})

app.get("/exampleRobot", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/example_robot.html'));
})

app.get("/exampleIndustrialRobot", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/example_industrial_robot.html'));
})

app.get("/exampleAnimal", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/example_animal.html'));
})

app.get("/allInOne", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/all_in_one.html'));
})

app.get("/qrCode", function (req, res) {
    res.sendFile(path.join(__dirname, '/src/html/qrCode.html'));
})
