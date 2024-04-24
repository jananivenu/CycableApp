import UserAxios from ".";

export const addComment = async (reportId, commentData) => {
    // const token = localStorage.getItem('token');
    try {
        const response = await UserAxios.post(`/comments/new/${reportId}`, commentData, {
            headers: {
                'Content-Type': 'multipart/form-data',

            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};