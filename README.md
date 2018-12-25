## Adapted from tutorial:
https://codeburst.io/how-i-created-seo-friendly-portfolio-cv-website-and-hosted-it-on-github-d5c4da43cf2f

## Other github cv pages with thanks to:
https://github.com/oleg-agapov/my-portfolio
https://github.com/derwentx/portfolio-files

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
  - `npm install --save bootstrap font-awesome devicons devicon-2.2 jquery jquery.easing popper.js prerender-spa-plugin`

- Adapt App.vue and main.js, webpack.prod.conf.js, as well as index.html according to tutorial (or content in this repo!)

- set up src/assets/resume.css (taken from https://github.com/derwentx/portfolio-files)

- dev: `npm run dev`
- build: `npm run build`

## Note on hosting repository github sites:

This will not work, because by default the default path of the github pages is kromerh/css... so when the page is looking for the css, it will start from this path and not go down into the repository. If for another user this page should be created, host it in the github pages. Or look for a workaround to this.

# ToDo

- [ ] Add languages
- [ ] Add publications
- [ ] Add Projects
- [ ] Check social links
- [ ] Add Coursera

