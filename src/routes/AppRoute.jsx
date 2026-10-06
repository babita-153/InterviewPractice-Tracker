import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import DashBoardPage from '../pages/DashBoardPage'
import CodingPage from '../pages/CodingPage'
import InterviewPage from '../pages/InterviewPage'
import DsaPage from '../pages/DsaPage'
const AppRoute = () => {

    let router=createBrowserRouter([
        {
            path:"",
            element:<MainLayout/>,
            children:[
                {
                    path:"",
                    element:<DashBoardPage/>
                },
                {
                    path:"coding",
                    element:<CodingPage/>
                },
                {
                    path:"interview",
                    element:<InterviewPage/>
                },
                {
                    path:"dsa",
                    element:<DsaPage/>
                }
            ]
        }
    ])

  return <RouterProvider router={router} ></RouterProvider>
}

export default AppRoute
