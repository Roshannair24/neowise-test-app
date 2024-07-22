# Senior Software Engineer Assignment

## Note: Directions to setup the app at the end of this README

## Objective
Implement a robust transaction API for enabling fund transfers between users using Node.js with Express.js. Integrate the provided REST APIs with a frontend interface using React. Ensure the system is designed for scalability, performance, and security.

## Backend Tasks

### SUBTASK 1: Database Design
**Requirements:**
- Use MongoDB as the database.
- Design a scalable and normalized database schema for users and transactions.
- Create a script for database creation, ensuring it can be set up with a single terminal command.
- Load the `users` collection from `spec/users.json` with an automated load script (using Node.js, shell, etc.).
- Ensure the `transactions` collection has valid `senderId` and `receiverId` values that correspond to existing users.
- Implement indexing on appropriate fields to optimize query performance.

**Deliverables:**
- Script for database creation.
- Automated script to load users data.
- Database schema diagram and rationale for design choices.

### SUBTASK 2: Retrieve a Transaction
**Endpoint:** `GET /api/transactions/:transactionId`

**Requirements:**
- Retrieve transaction information based on the provided `transactionId`.
- Use efficient querying techniques to handle large datasets.
- Return the transaction data in the format specified in `spec/transaction.json`.
- Implement caching to reduce database load for frequently accessed transactions.

**Deliverables:**
- Express route for retrieving a transaction.
- Caching mechanism for transaction data.

### SUBTASK 3: Retrieve All Transactions
**Endpoint:** `GET /api/transactions/`

**Requirements:**
- Retrieve all transactions from the database.
- Ensure the endpoint can handle high traffic and large volumes of data efficiently.
- Return a list of transactions in the format specified in `spec/transaction.json`.
- Implement caching to enhance performance.

**Deliverables:**
- Express route for retrieving all transactions.
- Caching mechanism for the list of transactions.

### SUBTASK 4: Create a New Transaction
**Endpoint:** `POST /api/transactions/`

**Requirements:**
- Create a new transaction with the payload `{senderId, receiverId, amount, details}`.
- Validate the transaction to check if the sender has sufficient balance.
- Store the transaction in the database with a UUID as the transaction ID.
- Implement atomic transactions to ensure data integrity.
- Notify users involved in the transaction (using a simple `console.log()` or a more advanced method).

**Deliverables:**
- Express route for creating a new transaction.
- Balance validation logic.
- Notification mechanism.

### SUBTASK 5: Reverse a Transaction
**Endpoint:** `DELETE /api/transactions/:transactionId`

**Requirements:**
- Reverse the specified transaction.
- Update the balances of the sender and receiver accordingly.
- Ensure data consistency and integrity during the reversal process.
- Notify users involved in the transaction reversal.

**Deliverables:**
- Express route for reversing a transaction.
- Balance update logic.
- Notification mechanism.

### SUBTASK 6: Security and Performance
**Requirements:**
- Implement authentication and authorization for the API endpoints.
- Ensure that all data transfers are secure (e.g., using HTTPS).
- Protect against common vulnerabilities (e.g., NoSQL injection, XSS).
- Optimize the API for performance, including query optimization and load balancing.

**Deliverables:**
- Security measures and performance optimizations.
- Documentation of security practices and performance improvements.

## Frontend Tasks

### SUBTASK 1: View Transaction Details
**Requirements:**
- Display detailed information about a specific transaction when provided with its ID.
- Ensure the interface is responsive and user-friendly.

**Deliverables:**
- React component to view transaction details.

### SUBTASK 2: View All Transactions
**Requirements:**
- Present a list of all transactions, allowing users to browse through them conveniently.
- Implement pagination for efficient data display.

**Deliverables:**
- React component to view all transactions with pagination.

### SUBTASK 3: Create New Transaction
**Requirements:**
- Design a form to enable users to initiate a new transaction by specifying the sender, receiver, amount, and details.
- Validate the form inputs before submission.

**Deliverables:**
- React component for creating a new transaction.

### SUBTASK 4: Reverse Transaction
**Requirements:**
- Implement functionality to reverse a transaction.
- Ensure appropriate balances are restored for both the sender and receiver.

**Deliverables:**
- React component for reversing a transaction.

## Additional Requirements

### Caching
- Implement caching for GET endpoints to ensure faster retrieval of data from the server.
- Ensure the cache is updated to avoid stale data.

### Code Quality
- Maintain high code quality with a clear structure, meaningful variable and function names, and separation of responsibilities between files.

### Documentation
- Provide comprehensive documentation for your code, APIs, and deployment process.
- Include a README file with instructions on setting up and running the application.

### Submission
- Create a GitHub repository for this task.
- Submit changes as well-labeled commits.
- Include this README in your repository and add a section describing the steps required to run the code.
- Give read access to [Prithvi Sharma](https://github.com/prithvisharma) & [Andre Fernando](https://github.com/andre-fernando) to review the assignment.

## References
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Commit Message Guidelines](https://karma-runner.github.io/5.2/dev/git-commit-msg.html)

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






