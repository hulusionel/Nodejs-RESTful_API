# Node-movie-RESTful_API-tutorial
Node.js_Tutorial  - Movie API

# Movies

| Route        | HTTP       | POST body     |    Description      |
| :---         |     ---  |     :---      |        :---       |
|/api/movies      | `GET`      | Empty         |List all movies.  |
|/api/movies      | `POST`      | {'title':'Breaking Bad', 'category':'bar', 'country':'USA' year:1990, director:"id", imdb_score: 9.7 } |Create a new movie.        |
|/api/movies/:movieId     | `GET`      | Empty         |Get a movie.  |
|/api/movies/:movieId     | `PUT`      | {'name':'foo', 'surname':'bar'}         |Update a movie with new info.  |
|/api/movies/:movieId     | `DELETE`      | Empty         |Delete a movie.  |
|/api/movies/:top10     | `GET`      | Empty         |Get the top 10 movies.  |
|/api/movies/between/:start/:end     | `GET`      | Empty         |Movies between two dates.  |


# Directors

| Route        | HTTP       | POST body     |    Description     |
| :---         |     ---    |     :---      |        :---        |
|/api/directors    | `GET`      | Empty         |List all directors. |
|/api/directors    | `POST`      | { name: 'foo', surname:'bar', bio:'lorem ipsum' }         |	Create a new director. |
|/api/directors/:director_id   | `GET`      | Empty         |Get a director. |
|/api/directors/:director_id   | `PUT`      | {'name':'foo', 'surname':'bar', 'bio': 'lorem'}         |Update a director with new info. |
|/api/directors/:director_id   | `DELETE`      | Empty         |Delete a director. |
|/api/directors/:director_id/best10movie  | `GET`      | Empty         |The director's top 10 films. |


# Index

| Route        | HTTP       | POST body     |    Description     |
| :---         |     ---    |     :---      |        :---        |
|/register    | `POST`      | { username: 'foo', password:'1234' }|Create a new user.|
|/auth    | `POST`      | { username: 'foo', password:'1234' }|Generate a token.
|