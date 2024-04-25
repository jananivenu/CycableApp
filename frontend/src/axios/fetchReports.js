import UserAxios from ".";

export const fetchReports = async (reportId, userId) => {
  try {
    let endpoint = '/reports/all/';
    if (reportId) {
      endpoint = `/reports/${reportId}/`;
    } else if (userId) {
      endpoint = `/reports/user/${userId}/`;
    }

    const response = await UserAxios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};