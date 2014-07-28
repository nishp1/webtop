# webtop

Ozone Webtop prototype using ReactJS, Webpack and SCSS.

## Prerequisites
Install Node.js and npm. Head over to [the Node.js website](http://nodejs.org/) if you need to do that.
Next, install [gulp](http://gulpjs.com//) and [Bower](http://bower.io/) with the command below.

    (sudo) npm install -g bower gulp

## Getting Started
First clone the repo. Then install development dependencies with npm. Install frontend app dependencies with Bower:

    cd webtop
    npm install

Development tasks are run with gulp. Run `gulp dev` or `npm start` to bring up a live preview of the webtop or `gulp` to see all available tasks.

## Development Notes

### Directory Structure
The app is structured in the following way:

```
app/
    js/             # Contains JavaScript/JSX for application
    styles/         # Application styles using SCSS based on SMACSS (https://smacss.com/)
    index.html
```

### Current Status:
There are two layouts implemented, Desktop (supports resize, minimize, maximize, restore and close actions) and Gridster (supports resize and close actions). Default layout rendered is Desktop. To see Gridster implementation in action, change line 3 of js/components/app.js `var Layout = require('./layouts/desktop');` to `var Layout = require('./layouts/gridster');`.