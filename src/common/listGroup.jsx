import React from 'react';

const ListGroup=(props)=>{
  const {items,onItemSelect,currentGenre}=props;
      
      
        return  (
          
        <ul className="list-group">
        {items && items.map(item=>(
        <li 
        onClick={()=>onItemSelect(item)}
        
        key={item.id} 
        className={ 
          item===currentGenre?"list-group-item active":"list-group-item"}>{item.name} 
        </li>
        
        ))}
      </ul> 
      
        );
    }

 
export default ListGroup;  