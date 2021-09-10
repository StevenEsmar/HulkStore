import { useEffect, useState } from 'react';
import HomeAdmin from './HomeAdmin';
import Login from './Login';
import { auth } from '../firebase';


function AuthUser() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      
      {user ? <HomeAdmin userSes={user} /> : <Login />}

    </div>
  );
}

export default AuthUser;