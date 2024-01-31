import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {  
  let [search,setSearch] = useState('');
  let [cat,setCat] = useState(false);
  let [menu,setMenu] = useState(false);

  function handleChange(e){
    setSearch(e.target.value);
  }

  function searchNow(){
    console.log(search)
  }
  return (
    <>
    <div className="navbar">
      <div className="logo"><img src='https://pbs.twimg.com/media/GFKcxBraoAAz35M?format=png&name=240x240' alt='no image found'/></div>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <div className="categories">   

        <div 
          className="categoriesLink hide-on-500px" 
          onMouseEnter={()=>{setCat(!cat)}} 
          onMouseLeave={()=>{setCat(!cat)}}>
            categories
        </div>

        <div 
          className="categoriesOptions" 
          style={cat ? { display:'flex'} : {display : 'none'} } 
          onMouseEnter={()=>{setCat(true)}} 
          onMouseLeave={()=>{setCat(false)}}>
            <div className="option">Web Design</div>
            <div className="option">Data Science</div>
            <div className="option">Programming Languages</div>
            <div className="option">UI/UX Designing</div>
            <div className="option">Academics</div>
            <div className="option">Musical Instruments</div>
            <div className="option">Art</div>
            <div className="option">Robotics</div>
            <div className="option">AI/ML</div>
        </div>

      </div>

      <div className="searchbar">
        <SearchOutlinedIcon sx={{margin:`0 10px 0 0`,opacity:`0.5`}}/>
        <input type="text" 
          id='search' 
          value={search} 
          onChange={(e)=>{handleChange(e)}} 
          placeholder='search'
          onKeyDown={(e) => {
            if (e.key === "Enter")
              searchNow();
            }}
        />
      </div>

      <div className="ls">
          <div className="ls-item hide-on-1000px">learn on bytee</div>
          <div className="ls-item hide-on-1000px">teach on bytee</div>
          <NavLink to="/login" id="login" className="inactive" activeclassname="active">log in</NavLink>
          <NavLink to="/signup" id='signup' className="inactive" activeclassname="active">sign up</NavLink>
          <LanguageIcon id='langIcon'sx={{height:`20px`,width:`20px`}} />

          <i className="fa-solid fa-bars hide-on-pc" id='menu' onClick={()=>{setMenu(!menu)}}></i>
          <div className="menuOptions" style={menu ? { display:'flex'} : {display : 'none'}}>
            <div className="menuOption">learn on bytee</div>
            <div className="menuOption">teach on bytee</div>
              <NavLink to="/login" id='mobileLogIn' className="inactive" activeclassname="active">log in</NavLink>
              <NavLink to="/signup" id='mobileSignUp' className="inactive" activeclassname="active">sign up</NavLink>
          </div>
      </div>
    </div>
    </>
  )
}

export default Header
