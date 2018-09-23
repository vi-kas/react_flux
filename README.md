# React with Flux
----------------------------------------------------
## env setup
1. Have `npm` installed.
2. Give `npm init` to start a project.
3. This will create a `package.json`. It'll look like this (with the config you give):
```
  {
    "name": "react_one",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test s
      pecified\" && exit 1"
    },
    "author": "vi-kas",
    "license": "ISC"
   }
  ```
4. We'll be needing `gulp` so that we can write tasks which will automate *bundling*, running a local *web server*, *connect* to it, *run* web browser and `open` that `host:port` and finally linting before *js* gets executed.
```
> npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
```
Above command will install `gulp`, `gulp-connect` and `gulp-open` modules. (Specific versions and also because of `--save` it will save these module names in `package.json` file, you maya check that.)

5.  Open any text editor of choice and create a `src/` and `dist/` folders. We'll write our `js` files in `src` folders and `bundled` sources will go into `dist` folder.
6. We'll write `gulpfile.js`, check out, the way we write tasks to automate stuff so that we can only give command `gulp` and get our web server running with specified host and port.
7. We'll configure stuff with below tasks :-
  * `connect` to start a local dev server using `gulp-connect`
  * `open` to open a url in web browser using `gulp-open`
  * `html` to copy html from *src* to *dist* using `gulp`.
  * `js`  which will use `browserify` to bundle `js` files also uses `reactify` to compile `jsx` in `js`.  Finally bundled sources will be copied to `dist` folder.
  * `css` to concat all css file into `bundle.css` and copy in `dist` folder using `gulp-concat`.
  * `lint` to perform linting.
  * Also tasks such as `watch` and `images` where `watch` will be watching changes in source files and reload based on our configuration.
  * Of course before running gulp, we'll be installing all these modules using `npm`.
  ```
  npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
  npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
  npm install --save gulp-eslint@0.15.0
  npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3
  ```
Also we'll be using `React-router` for routing usages.

-------------------------------------------------------------------------------------------
































