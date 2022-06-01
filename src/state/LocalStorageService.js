// TO SAVE AUTH TOKEN IN LOCAL STORAGE

const storeToken = (token) => {
    localStorage.setItem('authToken', token)
}

const getToken = () => {
    let token = localStorage.getItem('authToken')
    return token
}

const removeToken = (token) => {
    localStorage.removeItem(token)
}

export { storeToken, getToken, removeToken }