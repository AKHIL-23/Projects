import { useSelector } from "react-redux/es/hooks/useSelector"

class componentAuthorization {

    static authorizationMethod = (logedusermodule) => {
        const sidebarOptions = useSelector(state => state.user.sideBar)

        // sidebarOptions.forEach(function (ele) {
        //     console.log(ele.component_path)
        //     if (ele.component_path == logedusermodule) {
        //         return true
        //     }
        //     else {
        //         return false

        //     }
        // });

        let i;

        for (i = 0; i < sidebarOptions.length; i++) {

            if (sidebarOptions[i].component_path === logedusermodule) {
                break

            }

        }
        if (i == sidebarOptions.length) {
            return false
        } else {
            return true

        }


    }
}
export default componentAuthorization