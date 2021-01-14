# MultiServerMessanger

## Description

MultiServerMessanger application is a full-stack, React (front end) + Node.js (backend) chat applications, that available to run same server + client code on 2 machines (servers) and to share messages between servers. In this way, client A can connect to server A , and client B can connect to server B and they will see each other messages.

## Features of the Application:

- Application is based on 2 identical servers (same code, run on different machines).
- Multiple users can connect to the same chat.
- User can connect to 2 servers and see his messages on both connections.
- Users can connect to different chat servers and chat with each other.
- Connection between client and server is based on socket.io.
    
## Usage

### Run server code 
1. Under the server directory, edit the config.js. Add your server port and the second server ip:port. 
2. Assuming node already installed on your machine, run ``` nmp install ``` from server directory in order to install all required node packages. 

    
    





## Todo's:
1. Add security aspects to the application
2. Add tests (client + server)
3. Add login functionality
4. Maintain messanger hostory with DB
