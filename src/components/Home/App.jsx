import './App.css'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>    
    <Header/>
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
        <button className='isleBTN'><NavLink to="/explore" id='exploreBTN' className="inactive" activeclassname="active">explore now!</NavLink></button>
      </div>
    </div>

    </>
  )
}

export default App