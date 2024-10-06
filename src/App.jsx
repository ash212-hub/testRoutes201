import Navbar from "./navbar"
import Home  from "./Home"
import Contact from "./Contact"
import Product from "./Product"
import Footer from "./Footer"
 import { Routes,Route } from "react-router-dom"
 
 function App() {
   return (
     <div>
       <Navbar/>
     
     <Routes>
       
       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/product" element={<Product />} />
     </Routes>

     <Footer />
     </div>
   )
 }
 
 export default App
 