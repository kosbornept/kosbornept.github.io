import './App.css';

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import Logo from './Osborne Logo.svg';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route index element={ <Navigate to="/home" /> } />
    <Route path='home' element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path="*"
           element={<Navigate to="/home" 
           replace={true} 
           />}
    />
  </Route>
));

function App() {
  return (
    <div className="App">
      <img className='logo' src={Logo} alt='Osborne' />
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;