import { Outlet } from "react-router-dom"
import Header from './components/Header/Header';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/footer/Footer";


function Layout() {

  const { isLoading, error }=useAuth0();

  return (
    <>
    {error&&(<p>Authentication Error</p>)}
    {!error&&isLoading&&<p>Loading....</p>}
    {!error&&!isLoading&&(
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )}
    </>
  )
}

export default Layout