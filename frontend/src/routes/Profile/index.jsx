import { useEffect, useState } from 'react'
import Profile from '../../components/ProfileComponent'
import { getmyUserDatas, getSpecificUserData } from '../../axios/UsersData.jsx'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const userID = useParams().user_id
  console.log('profile-rout', userID)
  const [me, setMe] = useState(false)

  useEffect(() => {
    if (userID) {
      // Doing it like this, to not have to deal with promises
      const fetchUserData = async () => {
        try {
          const userData = await getSpecificUserData(userID)
          setFetchedUser(userData)
        } catch (error) {
          // Handle any errors here
          console.error('Error fetching user data:', error)
        }
      }
      fetchUserData()
    } else {
      const fetchUserMeData = async () => {
        try {
          const userData = await getMyUserDatas()
          setFetchedUser(userData)
        } catch (error) {
          // Handle any errors here
          console.error('Error fetching user data:', error)
        }
      }
      fetchUserMeData()
      setMe(true)
    }
  }, [userID])

  return (
    <div>
      <UserProfile user={fetchedUser} me={me} />
    </div>
  )
}
