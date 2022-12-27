FROM node:16

#here we're defining the working directory
WORKDIR /frontend

#copying our dependencies to the container
COPY ./package.json ./frontend

#installing all the dependencies that we copied 
RUN npm install

#copying all the files inside the container
COPY . ./frontend

#exposing the port so we can access it further
EXPOSE 3000

#starting the server
CMD ["npm", "start"]