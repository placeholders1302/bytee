import './Footer.css'

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="wrapper">
                <div className="column">
                    <h3>Categories</h3>
                    <a>Graphics & Design</a>
                    <a>Digital Marketing</a>
                    <a>Writing & Translation</a>
                    <a>Video & Animation</a>
                    <a>Music & Audio</a>
                    <a>Programming & Tech</a>
                    <a>Data</a>
                    <a>Business</a>
                    <a>Photography</a>
                </div>

                <div className="column">
                <h3>Support and Education</h3>
                    <a>Help & Support</a>
                    <a>Trust & Safety</a>
                    <a>Sipping on bytee</a>
                    <a>Buying on bytee</a>
                    <a>Guides</a>
                </div>

                <div className="column">
                    <h3>Community</h3>
                        <a>Community Hub</a>
                        <a>Forum</a>
                        <a>Events</a>
                        <a>Blog</a>
                        <a>Creators</a>
                        <a>Affiliates</a>
                </div>

                <div className="column">
                    <h3>About Us</h3>
                    <a>Siddharth</a>
                    <a>Rashul</a>
                    <a>sthita</a>
                    <a>siddhi</a>
                </div>

            </div>

            <div className="foot">
                <div className="leftFoot">
                    <h1>bytee</h1>
                    <p>&#169; bytee International Ltd. 2024</p>
                </div>

                <div className="rightFoot">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-github"></i>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer