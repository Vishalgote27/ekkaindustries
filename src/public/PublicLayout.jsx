import React from 'react'
import Navbar from './componants/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './componants/Footer'

const PublicLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />

    </>
}

export default PublicLayout