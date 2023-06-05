import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout"
import GlobalFile from "../Global/GlobalFile"


export const mainRoutes = createBrowserRouter([
    {
        path : "/",
        element : < Layout/>,
        children : [
            {
                index : true,
                element :<GlobalFile/>
            }
        ]
    }
])