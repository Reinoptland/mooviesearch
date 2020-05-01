# Features

- Main page with movies -> `/movies`

  - (static route)
  - request movies from api

- Details page for each movie with more information `/movies/:movieId`

  - (dynamic route)
  - request 1 movie (with details) from the api

# Data model

- MovieList

  - state: movies: [{}, {}, {}, {}]

- MoviesDetails
  - state: movie: {}

# Processing

List

- fetch data (axios, async await, useEffect)
- setMovies (useState)
- display movies: map the array
- make `<Link to=/movies/4357>Details<Link>`

Details

- fetch data (axios, async await, useEffect)
- setMovie (useState)
- display movie: interpolating JSX

# Execute plan

1. Define a route
2. Make a link so people can visit your page
3. Make a component (MovieList, MovieDetails)
4. Fetch our data
5. Display data

# Search

# Loading indicator
