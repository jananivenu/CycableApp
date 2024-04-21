import UserAxios from '.'

export const getMyUserDatas = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await UserAxios.get('/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      },
    } )
    return response.data
  } catch (error) {
    console.error('Error fetching user profile: ', error)
    throw error
  }
}

export const getSpecificUserData = async (id) => {
  try {
    const response = await UserAxios.get(`/users/${id}/`)
    return response.data
  } catch (error) {
    console.error('Error fetching specific user profile: ', error)
    throw error
  }
}
