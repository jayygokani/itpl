Observe both dockerfiles and docker-compose as well.  

The point of development server is to test your code. Upon doing npm install (which is already present in our both the dockerfiles), it creates node_modules which are necessary before starting the server. But as you can see there is no node_modules dir. present in our project repo and we are mounting it as volume and as a result overriding whatever was present in the image in /app dir. so we need to generate node_modules first.  

So we run our development application with sleep infinity command (see develop.Dockerfile) in order to keep the container running
1. docker compose up
2. exec inside the app container  
3. install dependencies using npm insall  
4. start development server using npm start dev  
(can you think of any other way?!)  

Now if you checkout project repo in vscode, node_modules will be present there.
Make necessary changes in code, as soon as you save it, it will be reflected in your browser.  That is the beauty of development server, all you need is a bindmount volume  and you can see the changes live with just saving the file. 
Great! Now its time to build the production dockerfile 

Check Dockerfile(production)
It doesn't have sleep infinity command but instead has 'npm run start' why ?  
Because now we have everthing necessary for starting the production server in our project repo and we are ready to make it immutable!
Checkout the docker compose, comment the dev-service and uncomment the production service  
docker compose up and there you have your production ready application !