export const getUserListApiCall = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  )
    .then((response) => response.json())

    .catch((error) => console.error("Error fetching data:", error));
    return res;
};
