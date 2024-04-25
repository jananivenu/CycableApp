import UserAxios from ".";

export const addComment = async (reportId, commentData) => {
    try {
        const response = await UserAxios.post(`/comments/new/${reportId}/`, commentData);
        return response.data;
    } catch (error) {
        throw error;
    }
};