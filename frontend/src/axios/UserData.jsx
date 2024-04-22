import UserAxios from '.'

export const getMyUserDatas = async () => {
  try {
    
    const response = await UserAxios.get('/me/')
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
