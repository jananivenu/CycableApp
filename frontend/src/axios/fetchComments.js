import UserAxios from ".";

export const fetchComments = async (reportId) => {
  try {
    const endpoint = `/comments/report/${reportId}`;

    const response = await UserAxios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};