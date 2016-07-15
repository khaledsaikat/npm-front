# npm-front
An example of using [npm](https://www.npmjs.com/) for front-end packages.

This is an example to use various front-end javascript package using npm. In this example, I have used [jquery](https://jquery.com/) and [bootstrap](http://getbootstrap.com/).

## Installation
First make sure you have [Node.js](https://nodejs.org) and npm insalled on your system. Then install npm dependencies by following commands.

```
cd npm-front
npm install
```

Then build your js files by following command

```
npm run build
```

and start your http server
```
node app.js
```

Then visit [http://localhost:3000/](http://localhost:3000/) to see the output.

## Explanation

`js/main.js` contains necessary `javascript` code. But browser doesn't understand `require`. So we run `npm run build` to bind all `javascript` code to a single file in `build/app.js`. Have a look on `package.json` file.

## Development
Everytime when we make change on `javascript` files we need to bind it with necessary library. We can use nodemon to automate the process.

Use following commnad to automate generating our converted `javascript`.

```
npm run watch
```

