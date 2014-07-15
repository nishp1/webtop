# webtop

Ozone Webtop prototype using ReactJS, Webpack and SCSS.

## Prerequisites
Install Node.js and npm. Head over to [the Node.js website](http://nodejs.org/) if you need to do that.
Next, install [gulp](http://gulpjs.com//) and [Bower](http://bower.io/) with the command below.

    (sudo) npm install -g bower gulp

## Getting Started
First clone the repo. Then install development dependencies with npm. Install frontend app dependencies with Bower:

    cd webtop
    npm install && bower install

Development tasks are run with gulp. Run `gulp dev` to bring up a live preview of the webtop.

## Development Notes

### Directory Structure
The app is structured in the following way:

```
app/
    js/             # Contains JavaScript/JSX for application
    styles/         # Application styles using SCSS based on SMACSS (https://smacss.com/)
    index.html
```
