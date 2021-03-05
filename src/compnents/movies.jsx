import React, { Component } from 'react';
import{getMovies} from "./fakeMovies"; 
import { getGenre} from "../compnents/genres";
import Pagination from  "../common/pagmintat"
import {paginate} from "../utils/paginate"
import ListGroup from "../common/listGroup"
import  MoviesTable from "../common/moviesTab"
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        currentPage: 1,
        pageSize:4,
        genre:getGenre(),
        currentGenre:"",
        sortColoumn:{path:'title',order:'asc'}
     };
handlePage   = page =>{
  //console.log(page)
  this.setState({currentPage:page})

}

handleSort=path=>{
  this.setState({sortColoumn:{path:path,order:'asc'}})
}
handleClick=(movie)=>{
const movies=[...this.state.movies]
const index=movies.indexOf(movie)
//movies[index]={...movies[index]}
movies[index].liked=!movies[index].liked
this.setState({movies})
}
 
handleGenreSelect=(genre)=>{
  this.setState({currentGenre:genre , currentPage:1})
 
 
}
componentDidMount(){
  const genre=[{name:"All Genres"},...getGenre()]
  this.setState({genre:genre})
}
  
handleDelete=(movie)=>{
    const movies=this.state.movies.filter(m=>m._id!=movie._id);
    this.setState({movies:movies})
}



    render() { 

      //console.log(this.state.currentGenre)
      if (this.state.movies.length===0) return <p>There are no movies in data base</p>
      const filtered=this.state.currentGenre && this.state.currentGenre._id ? this.state.movies.filter(c=>c.genre.name===this.state.currentGenre.name):this.state.movies;

      const sorted=_.orderBy(filtered,[this.state.sortColoumn.path],[this.state.sortColoumn.order])
     // console.log(filtered)
      const movies=paginate(sorted,this.state.pageSize,this.state.currentPage)
        return ( 
          
<div className="container">
<p>There are {filtered.length } Movies in the database </p>
      <div className="row">
        <div className="col-12 col-md-3">
        <ListGroup 
          items={this.state.genre}
          onItemSelect={this.handleGenreSelect}
          currentGenre={this.state.currentGenre}/>
        </div>
       
        <div className="col-12 col-md-7">
           <MoviesTable 
            movies={movies}
            onDelete={this.handleDelete} 
            handleClick={this.handleClick}
            handleSort={this.handleSort}/>

            <Pagination
            itemCount={filtered.length } 
            pageSize={this.state.pageSize} 
            onPageChange={this.handlePage}
            currentPage={this.state.currentPage}/>
            </div>
</div>
</div>
         );
        
    }
}
 
export default Movies;