import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './pages/common/register';
import Login  from './pages/common/login';
import Home_teacher from './pages/teacher/home_teacher';
import Home_student from './pages/student/Home_student';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home_teacher" element={<Home_teacher />} />
        <Route path="/home_student" element={<Home_student />} />
        <Route path="/subject_student" element={<Subject_student />} />
        <Route path="/home_teacher" element={<Home_teacher />} />
        <Route path="/subject_teacher" element={<Subject_teacher />} />
        <Route path="/create_test_teacher" element={<Create_test_teacher />} />
        <Route path="/take_test_student" element={<Take_test_student />} />
      </Routes>
    </Router>
  );
}

export default App;
