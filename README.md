# Node-movie-RESTful_API-tutorial
Node.js_Tutorial  - Movie API

| Route        | HTTP       | POST body     |    POST body       |
| :---         |     :---:  |     ---:      |        ---:       |
| /movies      | `GET`      | Empty         |List all movies.  |
| /movies      | `POST`      | {'title':'Breaking Bad', 'category':'bar', 'country':'USA' year:1990, director:"id", imdb_score: 9.7 } |Create a new movie.        |
|/movies/:movie_id     | `GET`      | Empty         |Get a movie.  |