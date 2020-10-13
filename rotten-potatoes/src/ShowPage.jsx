import React from 'react';
import { useParams } from 'react-router-dom';

function ShowPage(props) {
  const params = useParams()
  console.log(params)

  const movie = props.movies.find((r) => r.name === params.name)
  console.log(movie)
return (
    <div>
       <img src={movie.image} className="showmovieimage"/>
       <h2>{movie.name}</h2>
       <h3>({movie.comments})</h3>
       <h4 className="conservation-line">Conservation Status</h4>
       <h5 className="description">{movie.conservationStatus}</h5>
       <a href={movie.homepage} className="button">Read More</a>
     </div>
   )
 }

 export default ShowPage; 