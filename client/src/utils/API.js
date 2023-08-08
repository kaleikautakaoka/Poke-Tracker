export const createUser = async (userData) => {
    return new Promise((resolve, reject) => {
        fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}

export const loginUser = async (userData) => {
    return new Promise((resolve, reject) => {
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}

export const savePokemon = async (userData, token) => {
    return new Promise((resolve, reject) => {
        fetch("/api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}

export const deletePokemon = async (userData, token) => {
    return new Promise((resolve, reject) => {
        fetch("/api/users/pokemons", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}

export const updateUser = async (userData, token) => {
    return new Promise((resolve, reject) => {
        fetch("/api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}


// export variables that gets a token, fetches user data, creates users, login users, saves pokemon, removes pokemon, and updates users and connects to the pokeApi
export const getPokemonData = async (query) => {
    return new Promise((resolve, reject) => {
        const url = `https://beta.pokeapi.co/graphql/v1beta${query}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}




