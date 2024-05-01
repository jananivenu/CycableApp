import UserAxios from ".";

export const deleteComment = async (commentId) => {
    try {
        const response = await UserAxios.delete(`/comments/${commentId}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};