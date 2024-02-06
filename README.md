# Counter App
Requires node v14  
A very basic node application with two buttons: one that increase counter and one that resets the count.
It uses postgresql as database to store the counter.

To start node server:
```shell
copy .env.example to .env #change them according to your configurations
npm install    # Install deps
npm run dev    # To start dev server
npm run start  # To start prod server
```

We want to deploy it using docker and do few test by completing following tasks:

# Part 1: docker for development

## Task 1 : 
Create a Dockerfile named develop.Dockerfile for the application and deploy it , note that you're not allowed to use host network so deploy it accordingly
Once you deploy it, and access it using your browser, you will see the counter is increased by one and you should be able to see it's logs in the terminal whenever we click the button. What we want is to increase it by 10.

## Task 2: 
Open the project repo in your favourite editor such as vscode. In the index.js file line no. 20 there is ```const threshold = 1;``` which is responsible for increasing the counter by 1. Change it to achieve our goal and save it. The new changes should be reflected in your application. i.e now the counter should increase by 10. Create your docker-compose accordingly to achieve this.

## Task 3:
As mentioned earlier, the value of counter is stored in database and we want to persist it. That is, if you do docker-compose down and docker-compose up again, you should get the last counter value, from wherever you left it.

# Part 2: docker for production 

Now using the code where we are increasing the counter by 10, create dockerfile for production, named Dockerfile and deploy the application again. This time when you increase counter, it should increase counter by 10 because we used code in the image where it increases counter by 10. 
## Browine points 
Deploy any of the following apps using docker compose: 
Autin: https://github.com/atuinsh/atuin
Directus: https://github.com/directus/directus

Create a branch with your name and push your changes there for the record.