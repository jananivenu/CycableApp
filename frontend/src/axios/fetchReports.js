import UserAxios from '.'

// export const fetchReports = async (reportId, userId) => {
//   try {
//     let endpoint = '/reports/all/'
//     if (reportId) {
//       endpoint = `/reports/${reportId}/`
//     } else if (userId) {
//       endpoint = `/reports/user/${userId}/`
//     }

//     const response = await UserAxios.get(endpoint)
//     return response.data
//   } catch (error) {
//     throw error
//   }
// }

export const fetchReports = async (reportId, userId, coords) => {
  try {
    let endpoint = '/reports/all/'
    if (reportId) {
      endpoint = `/reports/${reportId}/`
    } else if (userId) {
      endpoint = `/reports/user/${userId}/`
    } else if (coords) {
      const { minLat, minLng, maxLat, maxLng } = coords;
      endpoint = `/reports/latlong?minLat=${minLat}&minLng=${minLng}&maxLat=${maxLat}&maxLng=${maxLng}`;
    }

    const response = await UserAxios.get(endpoint)
    return response.data
  } catch (error) {
    throw error
  }
}

export const fetchAllReports = async () => {
  try {
    let endpoint = '/reports/all/'

    const response = await UserAxios.get(endpoint)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteReport = async (reportId) => {
  try {
    const endpoint = `/reports/${reportId}/`;
    const response = await UserAxios.delete(endpoint);
    return response.data; 
  } catch (error) {
    throw error;
  }
}