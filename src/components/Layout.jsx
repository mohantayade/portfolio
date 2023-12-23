import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import NavbarMob from "./NavbarMob"


function Layout() {
  return (
    < div className=" w-screen ">
      <NavbarMob/>
      <Navbar/>
      <Outlet/>
    </ div>
  )
}

export default Layout
