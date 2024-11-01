import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './pages/common/register';
import Login  from './pages/common/login';
import Home_student from './pages/student/Home_student';
import Subject_student from './pages/student/Subject_student';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home_student" element={<Home_student />} />
        <Route path="/subject_student" element={<Subject_student />} />
      </Routes>
    </Router>
  );
}

export default App;
