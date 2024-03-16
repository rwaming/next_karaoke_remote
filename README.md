# react_karaoke_remote

This file be update mostly in [Issues](#issues).

## Trigger

It is the reason why to start this project that I had wanted to sing with **karaoke remote control**, whenever enjoyed singing home.

## Goal

This app should have functions for users to enjoy singing at home when they want it.

### v1.0<span id='v1_0'></span>

#### Framework<a name='framework'></a>

It will be made with React, but I heard offical React document say "Don't use create-react-app".

- I must choose what type of React to apply this project
  - ✔️ Next.js : It is mostly used in a lot ofcompany.
  - Remix
  - Gatsby
  - ~~Expo~~ is only for React Native

#### Branch

1. A branch must have only one function unit.
2. A function means that

- A target element group
- one function with something like element(input...) or event.

#### Function

At least

1. This App must have fucntions of karaoke remote control
   - Those is like 'backward', 'forward', 'applause'...
2. It is essencial to use some media contents which show karaoke screen and play MR, like Youtube(TJ channel).
   - Youtube API have to be checked.
   - I have to study how to use API, if it is possible to use Youtube API.

Foremore

1. It can be used though the user uses App with a mobile phone and a desktop.
   - Server
     - Node.js - Express
2. It has function to save some setting like pitch in either
   - LocalStorage or
   - Server

## Issues <span id='issues'></span>

> _2024.03.16.sat_

#### #5 Set up rules and rough plan

- In process...

1. HTML(Next.js)

   - Use Semantic tag, looking for that in Docs.
   - Mix elements and Compoenets properly.

2. CSS(SCSS)

   - Tailwind : Use TailwindCSS at first.
   - OOCSS : When classes in a element is too long to read easily, name according to OOCSS.
   - BEM : When it is considered a specific element should have a kind of own class name, name according to BEM.

3. TypeScript

   I am a user to use Typescript at first. so... The document of it and to study it is needed.

- Write the concepts and symantics.

4. React, Next.js
   This is same to TypeScript.
   - Write React hook I didn't know
   - Write Next.js' main function

#### ~~#4 - Set SASS, ESLint and Prettier, Stylelint, PostCSS sorting or CSS declaration sorter~~

- ✔️ PostCSS Sorting in VScode
- I realized that PostCSS sorting and CSS declaration sorter is definetely different.

> _2024.03.15.fri_

#### ~~#3 - Seclect React-Like framework and bundler~~

- Update details at [Framework](#framework)
- Install Next.js

#### ~~#1 - Set up basis of project~~

- Update plan especially at [Goal v.1.0](#v1_0)
