


const GetLogedUser = async (token) => {


    const response = await fetch("http://localhost:8000/api/zn/user/logeduser", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const json = await response.json()
    console.log(`getLogedUser function `, json);
    return json

}
const ListAllUsers = async (token) => {
    // const dispatch = useDispatch();
    const response = await fetch("http://localhost:8000/api/zn/user/userlist", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const json = await response.json()
    return json



}

const ListAllRoles = async (token) => {
    const response = await fetch("http://localhost:8000/api/zn/role/listallroles", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const json = await response.json()
    return json.payload
}

export { GetLogedUser, ListAllUsers, ListAllRoles }