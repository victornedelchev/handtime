export const getAccessToken = () => {
  const authLocalStorageJSON = localStorage.getItem("auth");

  if (!authLocalStorageJSON) {
    return "";
  }

  const authData = JSON.parse(authLocalStorageJSON);

  return authData?.accessToken;
};
