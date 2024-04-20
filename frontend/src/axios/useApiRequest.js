import axios from 'axios'

const useApiRequest = axios.create({
  baseURL: 'https://cycable.propulsion-learn.ch/backend/api',
})

export const getMyProfileData = async (token) => {
  return await useApiRequest.get('/users/get/me/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}


export default useApiRequest
