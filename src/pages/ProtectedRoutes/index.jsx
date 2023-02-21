import { useContext, useEffect } from "react"
import { Outlet,useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext"

export const ProtectedRoutes = ()=>{
 const navigate = useNavigate()
  
const { userLogged } = useContext(UserContext)

  useEffect(()=>{
      if(!userLogged){
        
        navigate('/')
      } 
    },[])

  return(
    <>
      { userLogged ? <Outlet/> : null}
    </>
  )
}