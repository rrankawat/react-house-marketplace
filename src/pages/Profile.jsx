import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const Profile = () => {
  const auth = getAuth()

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(auth.currentUser)
  }, [auth])

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

export default Profile
