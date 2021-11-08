// eslint-disable-next-line
const API_URL = `http://localhost:3000/`;

export const request = (url: string) => {
  const data = fetch(`${API_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });

  return data;
};
