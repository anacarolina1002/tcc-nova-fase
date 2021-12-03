const logout = () => {
  localStorage.removeItem('@token/sustentalize');
  localStorage.removeItem('@products/sustentalize');
}

export { logout };