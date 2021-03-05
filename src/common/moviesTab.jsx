import React from 'react';
import Like from '../common/like';
const  MoviesTable = props => {

  
    const {movies, onDelete,handleClick,handleSort}=props
    console.log("hiiiii")
    return ( 
        <table className="table">
          
  <thead>
    <tr >
      
      <th onClick={()=> handleSort('title')}>Title</th>
      <th onClick={()=> handleSort('genre.name')}>Genre</th>
      <th onClick={()=> handleSort('numberInStock')}>Stock</th>
      <th onClick={()=> handleSort('dailyRentalRate')}>Rate</th>
     
    </tr>
  </thead>
  <tbody>
      {movies.map(movie=>(
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dsilyDentalRate}</td>
      <td><button onClick={()=>onDelete(movie)}  className="btn btn-danger btn-sm"> Delete</button></td>
      <td > 
        <Like liked={movie.liked}  onClick={()=>handleClick(movie)}  style={{cursor:"pointer"}}/>
        </td>
    </tr>))}
  </tbody>
</table>
     );
}
 
export default MoviesTable;