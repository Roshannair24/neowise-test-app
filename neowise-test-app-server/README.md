### Directions to setup the server

**Preferred Specs:**

- MacOS Ventura.
- Node 20.9.0.

### 1: Setup Databases Engines

- If required `nvm use 20.9.0`
- Setup a mongodb replicaSet. If required, install it using `npm install run-rs -g`. If mongodb is already running at 27017, stop it and start the replica set using `run-rs -v 4.0.0 --dbpath '/opt/homebrew/var/mongodb' --keep`.
- Install and Start the redis server using [Redis docs](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/)

### 2: Start Server

- Install all packages using `npm i`
- start server using `nodemon server.js`

### 3: Setup dummy db

- In another tab, Run `node createDB.js` script to push dummy data to database.

### Server is setup.


### Directions to setup the client

### 1: Install packages
- `npm i`

### 1: Acccess login screen
- Chrome may show warning of unautharised access, click on Advanced and Proceed to the login page
- type uuid and development as password.


### Tech stack
- Frontend state management- React, Redux Saga
- Performace - Redis for caching, Indexing in mongodb
- authentication  - JWT Token