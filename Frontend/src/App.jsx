//sets up routing in your React application, rendering different components based on the URL path, and includes toast notifications using react-hot-toast
//react-router-dom axios react-icons react-scroll
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>             
          <Route path='/success' element={<Success/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  );
};

export default App;
