import './Home.css'
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NavLink } from 'react-router-dom'

function Home() {  
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
    <div className="logo"><img src='./src/assets/logo.png' alt='no image found'/></div>
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
          <NavLink to="/" id='logout' className="inactive" activeclassname="active">log out</NavLink>
          <AccountCircleIcon id="accIcon"/>

          <i className="fa-solid fa-bars hide-on-pc" id='menu' onClick={()=>{setMenu(!menu)}}></i>
          <div className="menuOptions" style={menu ? { display:'flex'} : {display : 'none'}}>
            <div className="menuOption">learn on bytee</div>
            <div className="menuOption">teach on bytee</div>            
            <NavLink to="/" id='mobile-logout' className="inactive" activeclassname="active">log out</NavLink>
          </div>
      </div>
    </div>

    <div className="horizontal">
    <div className="scroller" data-animated="true">
      <div className="scroller_inner">        
        <img src="https://fastly.picsum.photos/id/276/650/750.jpg?hmac=5WVyWPaU2sGi_QA2BdlsDzmGURslf7-Wxr8kH0QB9jQ" alt="" />
        <img src="https://fastly.picsum.photos/id/685/650/750.jpg?hmac=ihNoSIYJbXQOXhpdAQ5mjCJkVdc-YzYn-JDgiCjOa38" alt="" />
        <img src="https://fastly.picsum.photos/id/287/650/750.jpg?hmac=VJY0F39W-lxo8BTUV3PcBDEJEt6jWXcKCsObgsDeV24" alt="" />
        <img src="https://fastly.picsum.photos/id/465/650/750.jpg?hmac=Bcn_vww7ElP8_vSHe2H9ZvlNtfITjGSf1Cxfxh1K6cw" alt="" />
        <img src="https://fastly.picsum.photos/id/195/650/750.jpg?hmac=M_nRuXbqpVycpn_Onz0DyjKPiuKxsN4aO2Urldr1fS0" alt="" />
        <img src="https://fastly.picsum.photos/id/276/650/750.jpg?hmac=5WVyWPaU2sGi_QA2BdlsDzmGURslf7-Wxr8kH0QB9jQ" alt="" />
        <img src="https://fastly.picsum.photos/id/685/650/750.jpg?hmac=ihNoSIYJbXQOXhpdAQ5mjCJkVdc-YzYn-JDgiCjOa38" alt="" />
        <img src="https://fastly.picsum.photos/id/287/650/750.jpg?hmac=VJY0F39W-lxo8BTUV3PcBDEJEt6jWXcKCsObgsDeV24" alt="" />
        <img src="https://fastly.picsum.photos/id/465/650/750.jpg?hmac=Bcn_vww7ElP8_vSHe2H9ZvlNtfITjGSf1Cxfxh1K6cw" alt="" />
        <img src="https://fastly.picsum.photos/id/195/650/750.jpg?hmac=M_nRuXbqpVycpn_Onz0DyjKPiuKxsN4aO2Urldr1fS0" alt="" />
      </div>
    </div>
    </div>

    <div className="desc">
      <div className="descHead"><b>new goals require new knowledge</b></div>
      <div className="divider"></div>
      <div className="descDesc">we have created an e-learning platform that allows teams to find, share and use the knowledge they need <br/>to achieve their goals.</div>
    </div>    

    <div className="blur">      
      <div className="island">
        <div className="isleHead"><b>connect with experience</b><br/> discover those who&apos;ve been there, done that.</div>
        <button className='isleBTN'><NavLink to="/lexplore" id='exploreBTN' className="inactive" activeclassname="active">explore now!</NavLink></button>
      </div>
    </div>
    </>
  )
}

export default Home