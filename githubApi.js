const API = 'https://api.github.com';

var api = {
    searchUsers(searchText) {
        //let url = `${API}/search/users?q=${searchText}+repos:${'>10'}`;
        let url = `${API}/search/users?q=${searchText}`
        return fetch(url)
          .then((res) => res.json())
          .catch((error) => console.log('api.searchUsers', error) );
    },

    getUser(username) {
        //let url = `${API}/${username}`;
        let url = `${API}/users/${username}`;
        return fetch(url)
            .then((res) => res.json())
    },

    getRepos(username) {
        let url = `${API}/${username}/repos`;
        username = username.toLowerCase().trim();
        return fetch(url)
            .then((res) => res.json())
    }
};

export default api;
