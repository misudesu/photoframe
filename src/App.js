import Frame from './Page/Frame';
import LandingPage from './Page/LandingPage'
import Search from './Page/Search'
import Navigation from './Page/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Page/Footer';
function App() {
  return (
    <div >
   <BrowserRouter>
   <Navigation/>
 
    <Routes>
      <Route>
       <Route path='/'  element={<LandingPage/>} /> 
       <Route path='/search'  element={<Search/>} /> 
       <Route path='/frame' element={<Frame/>}/>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
