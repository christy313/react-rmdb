## TMDB movie app 

Search, sign up and login for your movie!

1. API is from [The Movie Database (TMDB)](https://www.themoviedb.org/)

2. Sign up and login function

3. Search bar for movie searching

4. Movie thumb with introduction

[Live demo](https://ilovemovie.netlify.app/)

![](./public/react-rmdb.gif)

[Back end codes](https://github.com/christy313/react-rmdb-backend)

## Installation

### 1. Clone the project

`$ git clone git@github.com:christy313/react-rmdb.git`

`$ cd react-rmdb`

### 2. Install packages `$ npm install`

### 3. Set up environment variable

#### a. Go to [TMDB](https://www.themoviedb.org/signup) and apply for a API KEY

#### b. Add your API KEY in `.env` file

### 4. Start the server

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Stacks

Front-end: React / Hooks / styled-component 
Back-end: Node / Express / PostgreSQL / [knex](https://knexjs.org/)

## File structure

```
.
├── README.md
└── src
    ├── API.js
    ├── App.js
    ├── GlobalStyle.js
    ├── components
    │   ├── Actor
    │   │   ├── Actor.styles.js
    │   │   └── index.js
    │   ├── AddToFavorite
    │   │   ├── AddToFavorite.styles.js
    │   │   └── index.js
    │   ├── BreadCrumb
    │   │   ├── BreadCrumb.styles.js
    │   │   └── index.js
    │   ├── Button
    │   │   ├── Button.styles.js
    │   │   └── index.js
    │   ├── FavList
    │   │   ├── FavList.styles.js
    │   │   └── index.js
    │   ├── Grid
    │   │   ├── Grid.styles.js
    │   │   └── index.js
    │   ├── Header
    │   │   ├── Header.styles.js
    │   │   └── index.js
    │   ├── HeroImage
    │   │   ├── HeroImage.styles.js
    │   │   └── index.js
    │   ├── Home.js
    │   ├── Login
    │   │   ├── Login.styles.js
    │   │   └── index.js
    │   ├── Movie.js
    │   ├── MovieInfo
    │   │   ├── MovieInfo.styles.js
    │   │   └── index.js
    │   ├── MovieInfoBar
    │   │   ├── MovieInfoBar.styles.js
    │   │   └── index.js
    │   ├── NotFound.js
    │   ├── SearchBar
    │   │   ├── SearchBar.styles.js
    │   │   └── index.js
    │   ├── Signup
    │   │   ├── Signup.styles.js
    │   │   └── index.js
    │   ├── Spinner
    │   │   ├── Spinner.styles.js
    │   │   └── index.js
    │   └── Thumb
    │       ├── Thumb.styles.js
    │       └── index.js
    ├── config.js
    ├── context.js
    ├── helpers.js
    ├── hooks
    │   ├── useHomeFetch.js
    │   └── useMovieFetch.js
    ├── images
    │   ├── no_image.jpg
    │   ├── react-movie-logo.svg
    │   ├── search-icon.svg
    │   └── tmdb_logo.svg
    └── index.js
```
