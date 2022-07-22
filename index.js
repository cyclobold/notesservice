const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongodb = require("mongodb");

const client = new mongodb.MongoClient(process.env.DB_URL)


//set the port
const PORT = process.env.PORT || process.env.PORT2 || process.env.PORT3


//set the baseurl
const BASE_URL = `${process.env.BASE_URL}:${PORT}`;
const server = express();

//middleware
server.use(express.json())
server.use(cors());


//Routes

// - Authentication
// 1. Register user
server.post("/register-user", function(request, response){

});

// 2. Log in user
server.post("/login-user", function(request, response){


})


// - Managing Notes
// 1. Create note
server.post("/create-note", async function(request, response){
    let post_title = request.body.post_title;
    let post_content = request.body.post_content;
    let date_posted = new Date().getTime();
    const feedback = await client.db("notesapp").collection("notes").insertOne({
        post_title: post_title,
        post_content: post_content,
        post_author_email: "james@email.com",
        post_date: date_posted
    });

    
    if(feedback){
        console.log("Feedback from Mongo: ", feedback);

        response.send({
            message: "New note created",
            data: {
                post_title: post_title,
                post_content: post_content,
                post_author_email: "james@email.com",
                post_date: date_posted
            },
            code: "success",
            type: "created-new-note"

        })
    }








})

//2. Get one Note
server.get("/get-note", function(request, response){



});

//3. Get more than one note
server.get("/get-notes", (request, response) => {


})

//4. Delete note
server.post("/delete-note", function(request, response){

})

//5. Update Note
server.post("/update-note", (request, response) => {


})

//6. Share note
server.post("/share-note", (request, response) => {

})








//server listen
server.listen(PORT, process.env.HOSTNAME, () => console.log(`Server is listening on ${BASE_URL}`));




