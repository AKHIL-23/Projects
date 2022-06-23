import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModuleTable from './ModuleTable'
import { getToken } from '../../../../state/LocalStorageService.js'
import { GetAllModuleList } from '../../../../state/servicesApi/ModuleAuthApi.js'
//REDUX STORE
import { AssinModuleListTORedux } from '../../../../state/features/ModuleSlice.js'

const ListAllModules = () => {

    // Redux DIspatch code 
    const dispatch = useDispatch()

    // Getting authtoken from localStorage
    const authtoken = getToken();
    const moduleList = useSelector((state) => state.module.modules)
    const col = [
        "Module Name",
        "Module component path",
        "Module controller path",
        "Module used By",
        "Edit/Delete"
    ]
    useEffect(() => {

        // handle all modules list fetch module api response 
        let modules = GetAllModuleList(authtoken)
        modules.then((result) => {
            dispatch(AssinModuleListTORedux(result))
        })
    }, [])

    return (

        <ModuleTable columns={col} records={moduleList} title="Module Table" />

    )
}

export default ListAllModules