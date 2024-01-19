# tvoe-live-test
TVOЁ Live Test Job

### Introduction
Simple application to show basic skills with:
- Node.js
- Express
- MongoDB
- Swagger

### Getting started
- Clone project, install dependencies. Run following:
```
    node populatedb.js <valid mongodb uri>
```
For example ``node populatedb.js mongodb://localhost:27017/tvoe-test``. It will create a database with several records.

- Create .env file in a project root. .env content:
```
    MONGODB_URI=<valid monbodb uri>
    PORT=<port number>
```

- To start server run:
```
    npm run start
```

### Endpoints
- http://localhost:3000/catalog - Catalog page
- http://localhost:3000/content/{id} - Content page by ID
- http://localhost:3000/docs/ - API docs
