# repoprovas

## About
In this app students can upload graduation tests pdf links to other students to see!\
\
This app was already deployed, use [this link](https://repoprovas-app.herokuapp.com) to access the API.\
If you want a better experience, this app has a frontend part, you can see it [here](https://github.com/lfelipelizeu/repoprovas-frontend)!

## Tools
This API was made using NodeJS, Typescript and Postgres, with some libs like [express](https://www.npmjs.com/package/express), [pg](https://www.npmjs.com/package/pg) and [typeorm](https://www.npmjs.com/package/typeorm).

## Preparing
First, you need to have node, npm and postgres installed!\
\
Then, clone this repository to your computer: 
#### `git clone https://github.com/lfelipelizeu/repoprovas-backend`
\
Now to install the dependencies, access the cloned folder by the terminal and use:
#### `npm i`
\
I've uploaded a dump file to this repository, use it to create the needed database to the app work. I've populated the database at the dump, if you don't want to populate it, don't copy the instert's part.\
\
I've also uploaded a `.env.example` file, an environment example file, replace the `DB_**` to your database credentials, then rename the file for `.env`.

## Running
This app has 3 different scripts, you can run them based on which database you want to use.
- If you want to run at the production database, set the `.env` file with the production database credentials and use:
#### `npm run start`
- If you want to run at the development database, create a `.env.dev` file, based on the `.env.example` and fill with the development database credentials and use:
#### `npm run dev`
- If you want to run at the test database, create a `.env.test` file, based on the `.env.example` and fill with the development database credentials and use:
#### `npm run test`
