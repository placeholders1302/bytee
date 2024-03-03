import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, user } = useAuth0();
  const [signUpError, setSignUpError] = useState(null);

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
      setSignUpError('Sign-up failed');
    }
  };

  if(isAuthenticated){
    signUp();
  }

  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user.name} />}
        <h2>{user.name}</h2>
        {signUpError && <p>{signUpError}</p>}
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {' '}
              {objKey} : {user[objKey]}{' '}
            </li>
          ))}
        </ul>
      </article>
    )
  );
}

export default Profile;