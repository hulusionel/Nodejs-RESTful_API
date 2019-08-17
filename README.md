# Node-movie-RESTful_API-tutorial
Node.js_Tutorial  - Movie API

#Movies

| Route        | HTTP       | POST body     |    Description      |
| :---         |     ---  |     :---      |        :---       |
| /movies      | `GET`      | Empty         |List all movies.  |
| /movies      | `POST`      | {'title':'Breaking Bad', 'category':'bar', 'country':'USA' year:1990, director:"id", imdb_score: 9.7 } |Create a new movie.        |
|/movies/:movieId     | `GET`      | Empty         |Get a movie.  |
|/movies/:movieId     | `PUT`      | {'name':'foo', 'surname':'bar'}         |Update a movie with new info.  |
|/movies/:movieId     | `DELETE`      | Empty         |Delete a movie.  |
|/movies/:top10     | `GET`      | Empty         |Get the top 10 movies.  |
| /movies/between/:start/:end     | `GET`      | Empty         |Movies between two dates.  |


#Directors
| Route        | HTTP       | POST body     |    Description     |
| :---         |     ---    |     :---      |        :---        |
| /director    | `GET`      | Empty         |List all directors. |
| /director    | `POST`      | { name: 'foo', surname:'bar', bio:'lorem ipsum' }         |	Create a new director. |
| /directors/:director_id   | `GET`      | Empty         |Get a director. |
| /directors/:director_id   | `PUT`      | {'name':'foo', 'surname':'bar', 'bio': 'lorem'}         |Update a director with new info. |
| /directors/:director_id   | `DELETE`      | Empty         |Delete a director. |
| /directors/:director_id/best10movie  | `GET`      | Empty         |The director's top 10 films. |