import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import { Home } from "./Pages/Home/Home"
import { Login } from "./Pages/Login/Login"
import { Signup } from "./Pages/Signup/Signup"
import { NotFoundError } from './Pages/NotFoundError'
import toast, {ToastBar, Toaster} from 'react-hot-toast'
import { useAuthContext } from './Contexts/auth.context'

function App() {
  
  

   
  
const {authUser}=useAuthContext()
  return (
    
   <div className="p-4 h-screen flex items-center justify-center"> 

 

<Routes>
  
  <Route path="/" element={authUser? <Home/> : <Navigate to="/login"/> }/>
  <Route path="/signup" element={authUser ? <Navigate to ="/"/> : <Signup/> }/>
  <Route path="/login" element={authUser? <Navigate to="/"/> : <Login/>}/>
  <Route path="*" element={<NotFoundError/>}/>
  
</Routes>


<Toaster/>




 
  

   </div>
  )
}

export default App
