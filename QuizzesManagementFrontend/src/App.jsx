import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './pages/common/register';
import Login  from './pages/common/login';
import Home_student from './pages/student/home_student';
import Subject_student from './pages/student/Subject_student';
import Home_teacher from './pages/teacher/Home_teacher';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home_student" element={<Home_student />} />
        <Route path="/subject_student" element={<Subject_student />} />
        <Route path="/home_teacher" element={<Home_teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
