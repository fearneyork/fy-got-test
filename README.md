# 🌿 Fearne's GOT Random Quote Finder 💬

## Introduction
Hi, I'm Fearne 👋 

Thank you for taking a look through the repository as well as the hosted version on [Netlify](https://fy-got-test.netlify.app/).

If you have any questions for me I'd love to hear them!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). I decided to use Create React App for a few reasons, mainly because it is quick and easy to set up, familiar, and works pretty well out of the box for deployments with Netlify.

## Limitations 


## Recapping the brief and goals
### Brief
1. Create-React-App FE application ✅
2. Build a page containing:
 - a button that fetches a random quote when clicked. ✅
 - a section for each of the Game of Thrones houses, containing: ✅
 - a list of all characters in that particular house. ✅
 - a list of all unique quotes that have been fetched and attributed to that particular character. ✅

### Stretch goals
Error handling: display an error when the API response is unsuccessful ❌\
Automically fetch a new quote on fetch of a duplicate quote ❌\
Apply some styling to the page ✅\
Write one (or more) meaningful unit test ✅

### Bonus points
Typescript ✅
Use semantic HTML elements and apply any applicable accessibility attributes to elements, to ensure a good user experience using for users using screen readers ✅ / ❌

### Reflection
All in all I think I managed to acheive most of the goals set out including the Bonus goals.
I'm mostly familiar with working with accessibilty on React-Native projects, which is a little different to web-apps. This is something I'd love to improve on the app, and why I put yes/no for completed, I think I was able to attempt a start at this, but I'm not fully satisfied with it.

I'd love to implement good error handling in this project, with further design work I think there could be fun ways to handle showing errors to users, themed along the lines of Game of Thrones. As well as this, I'd implement auto fetching new quotes on duplication, I've not had it happen through manual testing yet, but it's not impossible!

The styling is far from what I'd call done, but in an effort to stop myself getting sucked into styling it to the nines, I stopped with where I was at. It does it's job!

As a bigger project I would lean into better compartmentalisation of components and/or using a component library with tests to ensure the UI is as expected. However out of habit I used styled-compoents to write CSS-in-JS, as this is what I'm familiar with day-to-day, this was just to be able to help me hit the ground running and quickly prototype styling.

If I was to spend more time on this project I would most likely mock up wireframes and designs for the app. I think it would help me create a leaner and more efficient way of designing the app. I would also approach the design of this in a mobile first way, which is something I had to trade off in the inbterest of not spending too much more time on the project.

With it being an MVP version of a project like this I opted to go lighly on testing. I tested the Axios calls I wrote as they are what the app relies most heavily on. Given a little more time I'd most likely implement tests using [nock](https://github.com/nock/nock) for the API calls and then would test the data transformer functions next.

As previously mentioned, I used Create React App as a way to bootstrap this project. Unfortunately this method of bootstrapping a project is quite bloated. If this was a longer term project, I would consider other options like Next.js, if the product requirements matched up with any additional features.

I knew I wanted to implement state management in the app. However I wanted to avoid Redux like the plague, I find it a really heavy handed way of managing state. And I also think the React Context API is a bit outdated. I opted to use [Zustand](https://github.com/pmndrs/zustand) instead, I have only used Zustand once before this project on another tech test, and really liked the lightness of it as a state manager, but also how it could grow to support more complex state management than the context api, but with less bloat than redux.

The brief didn't call for it but I figured it made sense to put a hosted version of the app up on Netlify, given how easy it is to deploy it. I thought it was a nice extra goal to set myself. I think it helps it feel like a slightly more finished project, (even though it's not!)


## Local Setup
Please find below the versioning I have used so you can make sure everything runs okay!\
`node: v20.3.0`\
`npm: v9.6.7`\
`nvm: v0.39.1`


## Scripts
I went with npm as my packages manager so run the follwing to install packages, build and start the project locally.\

In the repo directory, you can run:

### `npm i`

Installs required packages.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run test`

Starts the ts-jest test runner so you can see unit test reports.

## Deployed GOT Quote Finder
Visit [Fearne's Deployed App](https://fy-got-test.netlify.app/) to have a play around without needing to run locally.