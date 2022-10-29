## Summary 

This is a react movie app:

1. API is from [The Movie Database (TMDB)](https://www.themoviedb.org/)

2. Search bar for movie searching

3. Movie thumb with introduction

[Live demo](https://ilovemovie.netlify.app/)

![](./public/react-rmdb.gif)

## Stack

React / Hooks / styled-component

## File structure

```
.
└── src
    ├── API.js
    ├── App.js
    ├── GlobalStyle.js
    ├── components
    │   ├── Actor
    │   │   ├── Actor.styles.js
    │   │   └── index.js
    │   ├── BreadCrumb
    │   │   ├── BreadCrumb.styles.js
    │   │   └── index.js
    │   ├── Button
    │   │   ├── Button.styles.js
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
    │   ├── Spinner
    │   │   ├── Spinner.styles.js
    │   │   └── index.js
    │   └── Thumb
    │       ├── Thumb.styles.js
    │       └── index.js
    ├── config.js
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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
