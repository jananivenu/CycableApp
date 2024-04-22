import UserAxios from ".";

export const fetchReports = async (reportId) => {
  try {
    const endpoint = reportId ? `/reports/${reportId}` : '/reports/all/';
    const response = await UserAxios.get(endpoint);
    
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};