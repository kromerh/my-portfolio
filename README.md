## Adapted from tutorial:
https://codeburst.io/how-i-created-seo-friendly-portfolio-cv-website-and-hosted-it-on-github-d5c4da43cf2f

## Other github cv pages with thanks to:
https://github.com/oleg-agapov/my-portfolio
https://github.com/derwentx/portfolio-files



# Installation of vue

Taken from https://gist.github.com/nerdenough/d288f2e732637f55f9858070c6b8b15b

### Install Homebrew

Open terminal and run the follow command to install the latest version of Homebrew. 
This will also install the XCode utils if you don't have them already installed.

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### Install Git

`brew install git`

### Install Node Version Manager

Use the install script to install nvm. To do this, run the following in terminal.

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`

### Add nvm to bash profile

To make use of the Node Version Manager through its `nvm` command, you need to add the following to your `~/.bash_profile` file.
Create a new file if it does not already exist.

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

### Install Node

Run `nvm install node` in terminal. Once installed, you should be able to run both `node -v` and `npm -v` to see their versions.

## Steps to create the files locally
- Initiate the vue
  - `vue init webpack my-portfolio`
  - project name: heiko-kromer
  - project description: Heiko's portfolio
  - author: Heiko Kromer
  - Vue build: runtime
  - vue-router: no
  - ELint: Yes
  - ELint preset: Standard
  - unit test: no
  - e2e: no
  - npm?: yes, npm


- Install libraries:
  - `npm install --save bootstrap font-awesome devicons devicon-2.2 jquery jquery.easing popper.js prerender-spa-plugin flag-icon-css`

- Adapt App.vue and main.js, webpack.prod.conf.js, as well as index.html according to tutorial (or content in this repo!)

- set up src/assets/resume.css (taken from https://github.com/derwentx/portfolio-files)

- dev mode: `npm run dev`


## Publish

- after running the build command: `npm run build` locate the files in `./dist/*`

- copy the content to `kromerh.github.io`-folder and push both

## Note on hosting repository github sites:

This will not work, because by default the default path of the github pages is kromerh/css... so when the page is looking for the css, it will start from this path and not go down into the repository. If for another user this page should be created, host it in the github pages. Or look for a workaround to this.

# ToDo

- [x] Add languages
- [x] Add publications
- [x] Add Projects
- [x] Check social links
- [x] Add Coursera

