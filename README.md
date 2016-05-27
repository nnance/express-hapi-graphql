# express-hapi-graphql

A prototype of building a graphql server with a common core wrapped with express, hapi and koa


## dependencies
This project is written in TypeScript and as a result uses typings to import dependent type definitions.  Typings will be installed automatic as a post install step.  All tool dependencies are installed locally and can be used with npm run commands.

### building
A build must be executed before running the project:

```
npm run build
```

A build will be automatically executed when running the application with

```
npm run dev:express
```

### install typings
To install dependent typings

```
npm run typings:install xxx --save -global
```
