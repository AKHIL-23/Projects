
const GetAllModuleList = async (token) => {

    const response = await fetch("http://localhost:8000/api/zn/module/listallmodules",);
    const json = await response.json()

    return json.payload

}

const AssingModuleApi = async (value) => {
    const response = await fetch("http://localhost:8000/api/zn/module/assingModule", {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json()
    return json


}
export { GetAllModuleList, AssingModuleApi }
