FROM node:12

WORKDIR /the/workdir/path

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm run build
 
EXPOSE 3000
CMD [ "node", "dist/main" ]