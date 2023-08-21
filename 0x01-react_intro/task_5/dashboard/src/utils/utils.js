export const getFullYear = () => {
    const currentdate = new Date();
    return currentdate.getFullYear();
}
export const getfooterCopy = (isIndex) => 
    (isIndex ? "Holberton school" : "Holberton School main dashboard");

export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD';
};