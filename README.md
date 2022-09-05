# VCall video chat app
---

## Introduction
VCall is a video chat is a web application that is used to basic video calling. Here you need to create an account. Then login and then start a meeting. There appears a meeting sharing link. Copy it and send to your friends. Ask them to join using the link appeared on screeen . They need to login with their account before joining.

## Tech stack
- HTML, CSS, bootstrap
- Javascript
- Nodejs V10+
- Mongodb
- Express framework
- webRTC using peerjs

## Running the application

This web application requires [Node.js](https://nodejs.org/) v10+ to run.
- **step 1** : Clone the repository to your local system
- **step 2** : Install dependencies using the below commands
    ```sh
    cd VCall-video-chat
    npm install
    ```
- **step 3** : Now start the server
    ```sh
    node app.js
    ```
    If you have nodemon installed or want to run server using nodemon use
    ```sh
    npm install nodemon
    npm run dev
    ```
- **step 4** : Now the server will start running on
    ```sh
    locahost:3000
    ```
- **step 5** : Now copy and paste the above url (localhost:3000) on your local browser then
        hit enter. Now the app login page is opened. Create an account inorder to use the app.
- **step 6** : Click on create meeting and confirm. You will be redirected to video calling page
    There appears a link to be shared with others. As we are running locally, open a new on tab 
    on the same browser copy and paste the link in the new tab. Now you will get muliple videos appear on screen.
    (Note: When sharing the link with others make sure that the other person is already with their credentials (*not intended for localhost*))
## Dependencies
This app user the following open source dependencies.
Make sure that these dependencies are installed on your computer
- express.js
- express-session.js
- mongoose.js
- peer.js
- socket.io
- ejs
- uuid
- debug
- cookie-parser
- http-errors

## Deployment
This application has been deployed on codequotient(https://codequotient.com) (an online learning platform) servers.
You can access the deployed app at 
```
https://videocallapp-3p34g82fr89l7le4uk6.codequotient.in
```
