import Description from "./Description"
import RadioGroupRating from './Rating'
import './StudentProfile.css'
import { useAuth0 } from "@auth0/auth0-react";

function TeacherProfile() {
    const { isAuthenticated, user } = useAuth0();
  
    const signUp = async () => {
      try {
        const response = await fetch('/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.name,
            email_id: user.email,
            photourl: user.picture
          }),
        });
        
        if (!response.ok) {
          throw new Error('Sign-up failed');
        }
  
        console.log('User signed up successfully');
      } catch (error) {
        console.error(error);
      }
    };
  
    if(isAuthenticated){
      signUp();
    }
  
  return (
    <div className="studentProfile">
        <div className="profileTop">            
        {user?.picture && <img src={user.picture} alt={user.name} />}
            <div className="info">
                <h1>{user.name}</h1>
                <p className='moreInfo'>First Year</p>
                <p className='moreInfo'>National Institute of Technology,Rourkela</p>  
                <p>{user.email}</p>              
                <div className="rating">
                    <RadioGroupRating/>
                </div>
                <div className="tags">
                    <div className="tag">designing</div>
                    <div className="tag">ReactJS</div>
                    <div className="tag">C++</div>
                </div>
            </div>
        </div>
        <div className="profileBottom">
            
            <div className="desc">
                <Description/>
            </div>
        </div>
    </div>
  )
}

export default TeacherProfile