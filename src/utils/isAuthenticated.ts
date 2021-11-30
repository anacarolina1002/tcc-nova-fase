const isAuthenticated = () => localStorage.getItem('@token/sustentalize') !== null;

export { isAuthenticated };