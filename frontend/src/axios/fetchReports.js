import UserAxios from ".";

export const fetchReports = async (reportId, userId) => {
  try {
    let endpoint = '/reports/all/';
    if (reportId) {
      endpoint = `/reports/${reportId}`;
    } else if (userId) {
      endpoint = `/reports/user/${userId}`;
    }

    const response = await UserAxios.get(endpoint);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};