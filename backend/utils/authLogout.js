export const logout = () => {
  localStorage.removeItem("token"); // or "user", or whatever you used to store session
  sessionStorage.clear(); // if you used sessionStorage instead
};
