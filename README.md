## Adapted from tutorial:
https://codeburst.io/how-i-created-seo-friendly-portfolio-cv-website-and-hosted-it-on-github-d5c4da43cf2f

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
  - `npm install --save bootstrap font-awesome devicons devicon-2.2`

- Adapt App.vue and main.js, as well as index.html according to tutorial steps
  - `npm install --save jquery jquery.easing popper.js`

- set up resume.css (taken from https://github.com/derwentx/portfolio-files)

- follow the steps in the tutorial
 - `npm install --save prerender-spa-plugin`

- build: `npm run build`


# ToDo
===
- [ ] Add Projects
- [ ] Add languages
- [ ] Add publications
