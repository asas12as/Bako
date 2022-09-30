const express = require('express');
var cors = require('cors')
let fs = require("fs")
const app = express();
const port = 3000;

let users = require("./users&passwords.json")
let userPoints = require("./points.json")
let userStages = require("./userStages.json")

app.use(cors())
app.use(express.json());


app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if (users[username] == undefined) {
        // this user name is not in the database
        res.send("cond1")
    } else {
        if (users[username] == password) {
            // right password
            res.send("cond2")
        } else {
            // wrong password
            res.send("cond3")
        }
    }
})

app.post('/SignUp', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if (users[username] != undefined) {
        // this user name is in the database
        res.send("cond1")
    } else {
        users[username] = password
        fs.writeFileSync("users&passwords.json", JSON.stringify(users));
        res.send("cond2")
    }
})

app.post('/AddPoints', (req, res) => {
    let username = req.body.username
    let points = JSON.parse(req.body.points)
    if (userPoints[username] == undefined) {
        userPoints[username] = points
        res.send("cond1")
    } else {
        userPoints[username] = points + userPoints[username]
        res.send("cond2")
    }
    fs.writeFileSync("points.json", JSON.stringify(userPoints));
})




app.post('/Stages', (req, res) => {
    let username = req.body.username
    if (userStages[username] == undefined) {
        userStages[username] = {
            "stage1": "NotYet",
            "stage2": "NotYet",
            "stage3": "NotYet",
            "stage4": "NotYet"
        }
        res.send({
            "stage1": "NotYet",
            "stage2": "NotYet",
            "stage3": "NotYet",
            "stage4": "NotYet"
        })
    } else {
        res.send(userStages[username])
    }
    fs.writeFileSync("userStages.json", JSON.stringify(userStages));
})


app.post('/saveNewStage', (req, res) => {
    let username = req.body.username
    let stage = req.body.stage
    userStages[username][stage] = "Done"
    fs.writeFileSync("userStages.json", JSON.stringify(userStages));
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))