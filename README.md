# MultiServerMessanger

## Description

MultiServerMessanger application is a full-stack, React (front end) + Node.js socket.io (backend) chat applications, that available to run same server + client code on 2 machines (servers) and to share messages between servers. In this way, client A can connect to server A , and client B can connect to server B and they will see each other messages.

## Features of the Application:

- Application is based on 2 identical servers (same code, run on different machines).
- Multiple users can connect to the same chat.
- User can connect to 2 servers and see his messages on both connections.
- Users can connect to different chat servers and chat with each other.
- Connection between client and server is based on socket.io.
- Server to server connection is also based on socket io, when each server acts also as a client of the second server.
    
## Usage

### Development

#### Run server code 
1. Under the server directory, edit the config.js. Add your server port and the second server ip:port. 
2. Assuming node already installed on your machine, run ``` nmp install ``` from server directory in order to install all required node packages. 
3. Run your server with ``` node index.js ``` command.

#### Run client code
1. Under the client/src directory,edit consts.js file with required parameters: server ip address + server port.
2. Install required node packages with ```nmp install``` command.
3. Run client code with ```npm start``` command.

Assuming you run your client on port 3000 (you can change it by editing "start" script in package.json file with PORT=<port num>), you can see the messanger application on your browser with http://localhost:3000. If the client connected with server - you will see your messages in the "Messanger" window.
    
### Production

### Use nginx + pm2 to deploy application
1. Install nginx on your machine and make sure it runs, you should see the nginx message on your browser when going to http:/localhost
2. Run ```npm run build``` in client directory.
3. Copy the build directory content to /var/www/<you app name>/ directory
4. Edit nginx configuration to point on this directory -> now you will see in your browser client ui. It still not connected to the backend.
5. Install pm2 and run ```pm2 start index.js``` from server directory. Now the server is up.
6. Edit nginx configurtion - add new location parameters
7. Restart nginx. Now the server connected to client, and you can check it by browsing to your ip machine and see the messanger application works.
    
*** The idea behind this application is to run same steps on 2 servers in order to connect between them.


    
    





## Todo's:
1. Add security aspects to the application
2. Add tests (client + server)
3. Add login functionality
4. Maintain messanger hostory with DB
