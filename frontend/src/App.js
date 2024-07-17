import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<GuestRoute><Home /></GuestRoute>} />
        <Route path='/authenticate' element={<GuestRoute><Authenticate /></GuestRoute>} />
        <Route path='/activate' element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
        <Route path='/rooms' element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


const GuestRoute = ({children}) => {
  const isAuth = false;
  
  if(isAuth) {
    return <Navigate to='/rooms' replace />
  }

  return children;
}

const SemiProtectedRoute = ({children}) => {
  const isAuth = false;
  const user = {
    isActivate: false,
  };

  if(!isAuth) {
    return <Navigate to='/' replace />
  }

  if(isAuth && !user.isActivate) {
    return children;
  }

  return <Navigate to='/rooms' replace />
}

const ProtectedRoute = ({children}) => {
  const isAuth = false;
  const user = {
    isActivate: true,
  };
  
  if(!isAuth) {
    return <Navigate to='/' replace />
  }

  if(isAuth && !user.isActivate) {
    return <Navigate to='/acitvate' replace />
  }

  return children
}