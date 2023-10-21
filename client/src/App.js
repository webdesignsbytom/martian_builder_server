import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import RegisterPage from './users/register/RegisterPage';
import AdminPage from './pages/admin/AdminPage';
import LoginPage from './users/login/LoginPage';

function App() {
  return (
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
  );
}

export default App;
