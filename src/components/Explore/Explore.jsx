import './Explore.css'
import Header from '../Home/Header'

function Explore () {
  return (
    <>      
    <Header/>
    <div className='container'>
      <div className="bigImage"><div className="image"></div></div>
      <div className='maskgroup'>
        <div className='desktop1'>
          <span className='text'>
            <span className='text01'>
              <span>
                explore
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>collaboration</span>
              <br></br>
              <span>with like-</span>
              <br></br>
              <span>minded peers</span>
              <br></br>
              <span></span>
            </span>
            <span>
              <span></span>
              <br></br>
              <span>we&apos;re unlocking community knowledge in a new way.</span>
            </span>
          </span>

          <img
            src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
            alt="Rectangle73563"
            className='rectangle7'
          />
          <img
            src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
            alt="Rectangle83564"
            className='rectangle8'
          />
          <img
            src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
            alt="Rectangle103566"
            className='rectangle10'
          />
          <img
            src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
            alt="Rectangle113567"
            className='rectangle11'
          />
          <span className='text15'>
            <span>explore communities</span>
          </span>
          <span className='text17'>
            <span className='text18'>
              with the open to work feature, you can privately tell recruiters
              or publicly share with the LinkedIn community that you are looking
              for new job opportunities.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
            alt="Rectangle93565"
            className='rectangle9'
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Explore