import Login from './Pages/Login/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PrivateRoutes from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import User from './Pages/User/User';



function App() {
  return (
    <BrowserRouter>
    <div>
      <AuthProvider>
        <Routes>
          <Route element = {<PrivateRoutes />}>
          <Route path='/dashboard' element={<Home/>} />
          <Route path='/users' element={<User/>} />
          </Route>
          <Route path="/" element={<Login />}/>
        </Routes>
      </AuthProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
