# 24/Consulting front-end interview

Simple project for evaluate frontend skills. 
Complete all tasks and submit a pull-request to proceed.

## Getting started
Clone this repo and install project dependencies.

```bash
pnpm i
# npm install
```
Start web and mock API server running concurrently start and dev scripts.

```bash
pnpm dev
# npm run dev
```
And in a new terminal window:

```bash
pnpm start
# npm run start
```

Or simply:

```bash
pnpm start-dev
# npm run start-dev
```

Now your dev sever respond to [http://localhost:3000/](http://localhost:3000/) and your mock API server to [http://localhost:3001/todo](http://localhost:3001/todo)

```bash
# list
GET http://localhost:3001/todo
# pagination
GET http://localhost:3001/todo?_limit=10&_page=1
# filter
GET http://localhost:3001/todo?state=done
# fulltext
GET http://localhost:3001/todo?_q=test
# detail
GET http://localhost:3001/todo/1 
# create a new todo
POST http://localhost:3001/todo 
# update a todo
PUT http://localhost:3001/todo/1 
# delete a todo
DELETE http://localhost:3001/todo/1
# auth
GET|POST|PUT|DELETE http://localhost:3001/660/todo
# login
POST http://localhost:3001/login
{
  "email": "johndoe@24consulting.it",
  "password": "24consulting"
}
# register
POST http://localhost:3001/register
{
  "email": "everyman@24consulting.it",
  "password": "e5BWqM"
}
```

## Legenda
__must__: Must be done to pass the test.\
__should__: Could be skipped but is reccomended.\
__may__: Not necessary but adds points.\
__no__: Should not be done.

## Skills 
- SCSS (must);
- ES6 (must);
- Test (should);
- Auth with access token (should);
- Typescript (may);
- Boilerplate with Vite, Prettier, Stylelint and ESLint (may);
- JS Framework (may);
- State management (may);
- Routing (may);
- Framework CSS / Component library (no).

## Tasks
### 1. Show the Todo list
- __must__: Create the Todo list fetching data from API;
- __should__: Paginate the Todo list with *_page* and *_limit* query parameters.

### 2. Filter Todo
- __must__: Filter Todo by state;
- __should__: Filter the Todo list by a fulltext search with query parameter *_q*.

### 3. Auth
- __should__: Call the API with an access token auth;
- __may__: User register interface;
- __may__: Login interface;
- __may__: Token persistence on page refresh.

### 4. Add a Todo
- __must__: Add a Todo with POST;
- __should__: Do the POST request with an access token.

### 5. Edit a Todo
- __must__: Edit a Todo with PUT;
- __should__: Do the PUT request with an access token.

### 6. Delete a Todo
- __must__: Delete a Todo with DELETE;
- __should__: Do the DELETE request with an access token.

### 7. Add a Google Font
- __should__: Use a [Google Font](https://fonts.google.com/) inside the project.

### 8. Test
- __may__: Add an e2e test.