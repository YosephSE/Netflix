import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"
import Account from "./pages/Account"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SingUp/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
      </Routes>
    </>
  )
}

export default App
