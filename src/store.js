import { configureStore, createSlice } from '@reduxjs/toolkit'
//import axios from 'axios';

let animation = createSlice({
    name: 'animation',
    initialState: [
        {
          "id": 1,
          "title": "Inside Out",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
          "imdbId": "tt2096673"
        },
        {
          "id": 2,
          "title": "Coco",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
          "imdbId": "tt2380307"
        },
        {
          "id": 3,
          "title": "Incredibles 2",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
          "imdbId": "tt3606756"
        },
        {
          "id": 4,
          "title": "Snow White and the Seven Dwarfs",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BMTQwMzE2Mzc4M15BMl5BanBnXkFtZTcwMTE4NTc1Nw@@._V1_SX300.jpg",
          "imdbId": "tt0029583"
        }
      ]
});

let comedy = createSlice({
    name: 'comedy',
    initialState: [
        {
          "id": 1,
          "title": "Lady Bird",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          "imdbId": "tt4925292"
        },
        {
          "id": 2,
          "title": "BlacKkKlansman",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg",
          "imdbId": "tt7349662"
        },
        {
          "id": 4,
          "title": "Eighth Grade",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
          "imdbId": "tt7014006"
        },
        {
          "id": 5,
          "title": "Coco",
          "posterURL": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
          "imdbId": "tt2380307"
        }
      ]
})

let classic = createSlice({
  name: 'classic',
  initialState: [
    {
      "id": 1,
      "title": "The Wizard of Oz",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
      "imdbId": "tt0032138"
    },
    {
      "id": 2,
      "title": "Citizen Kane",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "imdbId": "tt0033467"
    },
    {
      "id": 3,
      "title": "The Third Man",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "imdbId": "tt0041959"
    },
    {
      "id": 4,
      "title": "It Happened One Night",
      "posterURL": "https://m.media-amazon.com/images/M/MV5BZmViYmM5OTYtNGQ4Ny00YjQyLThiNjEtYTE4MGZhZTNmZjcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "imdbId": "tt0025316"
    }
  ]
})

export default configureStore({
  reducer: { 
    animation : animation.reducer,
    comedy: comedy.reducer,
    classic: classic.reducer
  }
}) 
