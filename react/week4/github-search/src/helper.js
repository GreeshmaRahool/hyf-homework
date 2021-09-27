const api = (searchQuery) => {
  return fetch(`https://api.github.com/search/users?q=${searchQuery}`).then(
    (res) => res.json()
  );
};

export default api;
