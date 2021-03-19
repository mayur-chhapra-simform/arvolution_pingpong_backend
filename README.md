# Arvolution Test

## Basic Overview
- This repo. is built in `ExpressJS` with `Typescript`. 

- It is containing 3 APIs

- MongoDB is used tpo store the data.

- Directory structure

      arvolution_pingpong_backend/
          └── ├── src/
          │   ├── config/
          │   │   └── db.js
          │   ├── controller/
          │   │   └── v1/
          │   │       ├── game.controller.ts
          │   │       ├── score.controller.ts
          │   │       └── user.controller.ts
          │   ├── helpers/
          │   │   └── response.helper.ts
          │   ├── model/
          │   │   ├── game.schema/
          │   │   │   └── index.ts
          │   │   ├── score.schema/
          │   │   │   └── index.ts
          │   │   └── user.schema/
          │   │       └── index.ts
          │   ├── routes/
          │   │   ├── v1/
          │   │   │   ├── game.ts
          │   │   │   ├── score.ts
          │   │   │   └── user.ts
          │   │   └── index.ts
          │   └── test/
          │       ├── game.test.ts
          │       ├── score.test.ts
          │       └── user.test.ts
          ├── index.ts
          ├── .env
          ├── .env_sample
          ├── .gitignore
          ├── package.json
          ├── package-lock.js
          ├── README.md
          ├── tsconfig.json
          └── tslint.json



## Getting Started

There are basic steps to setup the project written below

Node version: `13.x`

Clone the repo.

> git clone https://github.com/mayur-chhapra-simform/arvolution_pingpong_backend.git

create file `.env` from `.env_sample`

Add mongo uri to `MONGODB_URL`

Sample uri: `mongodb+srv://mayur:simform@321@cluster0.iztmh.mongodb.net/arvolution_pingpong_test?retryWrites=true&w=majority`

Install the dependency

> npm install

To Build the project

> npm run build

To start the project

> npm start

To Test the project

> npm run test

