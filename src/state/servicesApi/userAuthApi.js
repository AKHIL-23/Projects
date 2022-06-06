// import { useDispatch } from 'react-redux';
// import { fetchUserRecord } from '../features/UserSlice';


const GetLogedUser = async (token) => {

    // const dispatch = useDispatch();
    const response = await fetch("http://localhost:8000/api/zn/user/logeduser", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const json = await response.json()
    console.log(`getLogedUser function `, json);
    return json.payload

    // dispatch(fetchUserRecord(json.payload))



}

export { GetLogedUser }