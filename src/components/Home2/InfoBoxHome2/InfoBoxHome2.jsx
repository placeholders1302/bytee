import './InfoBoxHome2.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function InfoBoxHome2() {
  return (
    <>
    <div className="infoBox">
        <h1>
            The best part? Everything
        </h1>

        <ul>
            <li>
                <h2><CheckCircleIcon style={{ fill: '#0072ea',marginBottom: '-5px', marginRight: '5px' }}/>Stick to your budget</h2>
                <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            </li>
            <li>
                <h2><CheckCircleIcon style={{ fill: '#0072ea',marginBottom: '-5px', marginRight: '5px' }}/>Get quality work done quickly</h2>
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            </li>
            <li>
                <h2><CheckCircleIcon style={{ fill: '#0072ea',marginBottom: '-5px', marginRight: '5px' }}/>Pay when you&apos;re happy</h2>
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            </li>
            <li>
                <h2><CheckCircleIcon style={{ fill: '#0072ea',marginBottom: '-5px', marginRight: '5px' }}/>Count on 24/7 support</h2>
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default InfoBoxHome2