import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './pages/common/register';
import Login  from './pages/common/login';
import Home_teacher from './pages/teacher/home_teacher';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home_teacher" element={<Home_teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
