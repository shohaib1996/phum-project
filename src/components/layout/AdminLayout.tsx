import { Outlet } from "react-router-dom"


const AdminLayout =()=> {
  return (
    <div>
        <h1>Hello</h1>
        <div>AdminLayout</div>
        <Outlet/>
    </div>
  )
}

export default AdminLayout