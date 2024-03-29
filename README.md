# Welcome to Flights Service

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

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

````

## DB Design
  - Airplane
  - Flight
  - City
  - Airport

  - A flight belong to an airplane but one airplane can be used in multiple flights
  - A city  has many airport but one airport belong to a city
  - One airport can have many flights, but a flight belongs to a one airport


  ## Tables

  ### City -> id, name, created_at,updated_at
  ### Airport -> id,name,addres,city_id,created_at,updated_at
    Relationship ->City has many airports and Airport belong to a city(one to many)

    ```
    >npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer

    ```

````
