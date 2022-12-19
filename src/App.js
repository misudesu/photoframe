import Frame from './Page/Frame';
import LandingPage from './Page/LandingPage'
import Search from './Page/Search'
import Navigation from './Page/Navigation'
import Contact from './Page/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Footer from './Page/Footer';
import About from './Page/About'
import Upload from './Page/Upload'
import SignUp from './Page/SignUp'
function App() {
  return (
     <HashRouter>
   <Navigation/>
    <Routes>
      <Route>
       <Route exact path='/'  element={<LandingPage/>}/> 
       <Route path='/search'  element={<Search/>} /> 
       <Route path='/frame' element={<Frame/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/uplood' element={<Upload/>}/>
       <Route path='/signup' element={<SignUp/>}/>
      </Route>
    </Routes>
    <Footer/>
  </HashRouter>   
  );
}

export default App;
