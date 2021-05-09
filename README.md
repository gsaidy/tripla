<br/>
<p align="center">
  <a href="https://tripla.vercel.app/" target="_blank">
    <img width="20%" src="https://tripla.vercel.app/logo.png" alt="Tripla logo">
  </a>
</p>

<br/>
<p align="center">
  <a href="https://github.com/vercel/next.js/" target="_blank">
    <img src="https://img.shields.io/badge/next.js-10.0.4-blueviolet" alt="next.js">
  </a>
  <a href="https://github.com/facebook/react" target="_blank">
    <img src="https://img.shields.io/badge/react-16.13.1-blue" alt="react">
  </a>
  <a href="https://github.com/microsoft/TypeScript" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-4.1.3-yellow" alt="TypeScript">
  </a>
  <a href="https://github.com/ant-design/ant-design" target="_blank">
    <img src="https://img.shields.io/badge/ant--design-4.13.1-orange" alt="ant-design">
  </a>
  <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank">
    <img src="https://img.shields.io/badge/tailwindcss-2.0.2-ff69c4" alt="tailwindcss">
  </a>
  <a href="https://github.com/apollographql/apollo-client" target="_blank">
    <img src="https://img.shields.io/badge/apollo--client-3.3.9-9cf" alt="apollo-client">
  </a>
  <a href="https://github.com/graphql/graphql-js" target="_blank">
    <img src="https://img.shields.io/badge/graphql-15.5.0-brightgreen" alt="graphql">
  </a>
</p>
<br/>

## Basic Overview
<a href="https://tripla.vercel.app/" target="_blank">Tripla</a> is a platform to manage your trip in a simple and customizable way.

Make a list of places to visit during your trip based on different categories that you determine such as attractions, restaurants and nightlife.

It is recommended to sign in using of the 3 available providers (Google, Facebook and Github) before creating a trip or a template to be able to edit it or delete it later since only the creator could do those actions.

## Basic Example
Let's say you are visting Prague next month. You want to make a list beforehand of the attractions to visit and the restaurants you want to try.

Let's say for attractions, you care about the name of the attraction, the suggested duration to spend and how important it is to visit that attraction (priority).

Let's say for restaurants, you care about the name of the restaurant, the opening hours, the type of cuisine and you would like to add a link to the restaurant menu.

In that case, you need to create a template with the two sections and their attributes then use that template to create the trip with the actual data.
You could also check if an existing template created by you or any user is similar and could be used instead of creating one.

The video below illustrates the steps on the platform.

<img src="https://github.com/gsaidy/tripla-gif/blob/main/tripla.gif">

## What does Tripla use?

* [Next.js](https://github.com/vercel/next.js/) - A React front-end development web framework.
* [TypeScript](https://github.com/microsoft/TypeScript) - A strict syntactical superset of JavaScript.
* [Ant Design](https://github.com/ant-design/ant-design) - An enterprise-class UI design language and React UI library.
* [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapidly building custom user interfaces.
* [Apollo Client](https://github.com/apollographql/apollo-client) - A fully-featured caching GraphQL client.
* [GraphQL](https://github.com/graphql/graphql-js) - A query language for APIs.
* [Hasura](https://github.com/hasura/graphql-engine) - A blazing-fast GraphQL server that gives an instant, realtime GraphQL APIs over Postgres.
* [NextAuth.js](https://github.com/nextauthjs/next-auth) - A complete open source authentication solution for Next.js applications.
* [Moment.js](https://github.com/moment/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.
* [use-places-autocomplete](https://github.com/wellyshen/use-places-autocomplete) - A React hook for Google Maps Places Autocomplete.
* [ESLint](https://github.com/eslint/eslint) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [Prettier](https://github.com/prettier/prettier) - An opinionated code formatter.
* [husky](https://github.com/typicode/husky) - Modern native Git hooks made easy.
* [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files.

## Database Diagram

<img src="https://github.com/gsaidy/tripla/blob/main/public/db_diagram.png" alt="DB Diagram">

## Running locally

1) First, clone the repo in a desired folder:

```bash
git clone git@github.com:gsaidy/tripla.git
```

2) Cd into the project directory:
```bash
cd tripla
```

3) Install the application dependencies:
```bash
yarn install
# or
npm install
```

4) Create a copy of `.env.template` file named `.env` under the root folder then please send an email to georges.saidy49@gmail.com to get the values of the environment variables.

5) Run the development server:
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Found a bug? Missing a specific feature?
Feel free to file a new issue with a respective title and description.

## License
Tripla is released under the terms of the [MIT License](https://github.com/gsaidy/tripla/blob/main/LICENSE).
