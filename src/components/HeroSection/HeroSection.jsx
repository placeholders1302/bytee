import './HeroSection.css'
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

function HeroSection() {
    const [isHovered,hover] = useState(false)
    const [dark,setDark] = useState(false)

    const cursorHoverStyleLightMode={
        width:'40px',
        height:'40px',
        border:'20px solid white',
        borderRadius:'50%',
        position: 'absolute',
        transition: 'all .1s linear',
        pointerEvents: 'none',
        zIndex: '5',
        transform: 'scale(6)',
        mixBlendMode: 'difference',
        background: 'white'
    }

    const cursorNotHoverStyleLightMode = {
        width:'40px',
        height:'40px',
        border:'3px solid black',
        borderRadius:'50%',
        position: 'absolute',
        transition: 'all .1s linear',
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        zIndex: '5',
    }

    const cursorHoverStyleDarkMode={
        width:'40px',
        height:'40px',
        border:'20px solid white',
        borderRadius:'50%',
        position: 'absolute',
        transition: 'all .1s linear',
        pointerEvents: 'none',
        zIndex: '5',
        transform: 'scale(6)',
        mixBlendMode:`difference`
    }

    const cursorNotHoverStyleDarkMode = {
        width:'40px',
        height:'40px',
        border:'3px solid white',
        borderRadius:'50%',
        position: 'absolute',
        transition: 'all .1s linear',
        pointerEvents: 'none',
        background: 'transparent',
        zIndex: '5',
    }

    const darkTheme={
        backgroundColor: `black`,
        color:`white`,
    }

    const darkThemeBigText = {
        fontSize: `40px`,
        width: `50%`,
        textAlign: `center`,
        letterSpacing: '10px',
        position: 'relative',
        display: 'block',
        fontFamily: "'Poppins', sans-serif",
        textTransform: "uppercase",
        webkitTextStroke: `2px #fff`,
        webkitTextFillColor: `transparent`,
        color: `transparent`,
        transition: 'all .4s linear', 
        opacity: '0.3',
        userSelect: 'none',
    
        // const hover: any {
        //     opacity: 1,
        //     -webkit-text-fill-color: black,       
    }

    const darkThemeBigTextHover={
        opacity: `1`,
        webkitTextFillColor: 'white'
    }

    const lightTheme={
        backgroundColor: `white`,
        color: `black`
    }

    function handleHover(){
        hover(!isHovered);
    }

    function handleClick(){
        setDark(!dark)
        console.log('Does the theme needs to be dark?'+dark)
    }

    function handleMouseMove(e){
        const cursor = document.querySelector(".cursor")
        cursor.style.left=e.pageX+'px';
        cursor.style.top=e.pageY+'px';
    }

  return (
    <>
            <div className="cursor" style={dark?(isHovered?cursorHoverStyleDarkMode:cursorNotHoverStyleDarkMode):(isHovered?cursorHoverStyleLightMode:cursorNotHoverStyleLightMode)}></div>
            <div className="heroSection" style={dark?darkTheme:lightTheme} onMouseMove={(e)=>{handleMouseMove(e)}}>

                <div className="toggleSection"  style={dark?darkTheme:lightTheme}>
                    <div className="sippers">FOR SIPPERS</div>
                    <Switch onClick={handleClick} color="success"/>
                    <div className="brewers">FOR BREWERS</div>
                </div>

                <div className="bigText"  style={dark?(isHovered?darkThemeBigTextHover:darkThemeBigText):lightTheme} onMouseEnter={handleHover} onMouseLeave={handleHover}><h1>bytee: where skills and sips unite.</h1></div>

                <div className="smallText"  style={dark?darkTheme:lightTheme}><p>Discover potential collaborators for your college interests.</p></div>

                <NavLink to='search'><button>Search for anything</button></NavLink>

                <div className="popularCategories"  style={dark?darkTheme:lightTheme}>
                    <p>popular</p>
                    <div className="niche">Web Development.</div>
                    <div className="niche">UI/UX.</div>
                    <div className="niche">AI/ML</div>
                    <div className="niche">Content Writing.</div>
                </div>

            </div>
    </>
  )
}

export default HeroSection