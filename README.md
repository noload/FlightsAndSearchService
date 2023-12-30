# welcome to Flights Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of downloaded project
- Create a `.env` file in the root directory and add the following envirment variable
    - PORT=3000
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```

{
  "development": {
    "username": <YOUR DB LOGIN NAME>,
    "password": <YOUR DB password>,
    "database": <DATABASE NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have added your db config as listed above, go to the  src folder from your terminal and execute `npx sequelize db:create`