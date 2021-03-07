# Angular-11 Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Go to project folder and install dependencies
```
npm install
```

## Launch development server, and open localhost:4800 in your browser
```
npm start
```

## Project structure

```
dist/                        compiled version
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app.routing.ts         app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- index.html                html entry point
|- styles.css                global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
```

## Project NPM script

```
Tasks	                        Description
npm start	                    Run development server on http://localhost:4800/
npm run build:dev	            Lint code and build app for development env in dist/ folder
npm run build:prod	            Lint code and build app for production env in dist/ folder
npm run build:local	            Lint code and build app for local env in dist/ folder
```



