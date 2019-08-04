# notes

- make a quick web page, related to the event somehow (maybe a pic of the audience from my phone, then upload to github, then pull in and use?)
  - show via GH Pages to start showing how it's a static site host
- login to glitch, start a new express server, reshape the simple page from earlier into pug view, and server side render it
  - take a side bar into groceries-vue-api to glitch as an api end point
    - note that this is similar to WordPress as a "headless cms"
    - look at mLab and MongoDB Atlas
    - init new glitch repo, and import groceries-vue code into glitch and look at where the front end calls the back end
- then login to netlify
  - set the workshop repo as a repo that Netlify can access
  - init a new netlify project, connect to github, and pull it in
    - show the netlify CI pipeline by making a pull request in the gh repo
    - show the branch deploy preview, point out the immutability of this version, which can be passed around to team mates and other stakeholders as a url to get their feedback on the changes
    - show Netlify Forms - build a pre-written form component, activate it, use it, and show the data in the netlify admin dashboard, and download the csv and show them the data
- then show now running the same code
  - now is where php and wordpress can be run
  - mention the cli tool to use this
- if time, run the same code in CodeSandbox
