export function formatUserName(user) {
    return user.first_name && user.last_name
        ? `${user.first_name} ${user.last_name}`
        : user.username;
}