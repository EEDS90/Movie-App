import React from 'react';

// const Search = () => {
//   return popEndpoint.map((review) => (
//     <div key={review.id}>
//       <img
//         src={imageURL + movie.poster_path}
//         alt={"poster for" + movie.title}
//       />{" "}
//       <br />
      
//       <button onClick={() => handleSubmit(movie)}>Add to My List!</button>
//     </div>
//   ));
// };

export default Search;

let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

return (
  //movie is passed as an argument, kinda like event in (event)preventDefault. Doesn't actually refer to anything outside of this code block//
          popEndpoint.map((movie) => (
  //make your key here with {argument.id}
              <div key={movie.id}>
                  <img src={imageURL +
  //notice how my argument is being used and then appended with the api object path? it's like this for yours: {argument.country}
          movie.poster_path} alt={"poster for" + movie.title} /> <br />
                  <p className="title">{movie.title} <br /></p>
                  <p className="plotSummary">{movie.overview} <br /></p>
                  <p className="userScore" >User ratings: {movie.vote_average}/10</p>
  {/* this is my handleSubmit onClick function. yours is likely different because you're doing something different */}
                  <button onClick={() => handleSubmit(movie)}>Add to My List!</button>
              </div>
          ))
      );