import './Search.css'
import { useState } from 'react';
import { data } from '../../data';

console.log(typeof(data[0].tags[0]))

function Search() {
  let [search,setSearch] = useState('');

  function handleChange(e){
      setSearch(e.target.value);
  }

  function searchNow(){
      console.log(search)
    }
  return (
    <div className='search'>
          <div className="search-bar">        
            <input 
                type='text'
                id='search' 
                value={search} 
                onChange={(e)=>{handleChange(e)}} 
                placeholder='search for something'
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    searchNow();
                  }}
            />
            <div onClick={searchNow} className='getStarted'>get started!</div>
        </div>
        
        <div className="searchResults">
            {data.filter((item)=>{
              return search.toLowerCase()===''?item:item.tags[0].toLowerCase().includes(search)
            }).map((item)=>{
              return(
                
              <div className="result" key={item.email_id}>
              <div className="img">
              <img src={item.image} alt={item.username}/>
             </div>
 
             <div className="searchInfo">              
               <h1>{item.username}</h1><br/>
               {item.email_id}<br/>
               Rating:{item.rating}<br/>
               <div className="searchTags">
               <div className="searchTag">{item.tags[0]}</div>
               <div className="searchTag">{item.tags[1]}</div>
               <div className="searchTag">{item.tags[2]}</div>
               </div>
               <br/>
               Year of study:{item.year}  <br/>          
               {item.description}
             </div>
             </div>

              )
            })}
          


        </div>
    </div>
  )
}

export default Search