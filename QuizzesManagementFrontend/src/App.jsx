import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register  from './pages/common/register';
import Login  from './pages/common/login';
import Home_teacher from './pages/teacher/Home_teacher';
import Home_student from './pages/student/Home_student';
import Subject_student from './pages/student/Subject_student';
import Subject_teacher from './pages/teacher/Subject_teacher';
import Create_test_teacher from './pages/teacher/Create_test_teacher';
import Take_test_student from './pages/student/Take_test_student';
import Ans_student from './pages/student/Ans_student';

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
        <Route path="/subject_teacher/:id" element={<Subject_teacher />} />
        <Route path="/create_test_teacher" element={<Create_test_teacher />} />
        <Route path="/take_test_student" element={<Take_test_student />} />
        <Route path="/ans_student" element={<Ans_student />} />
      </Routes>
    </Router>
  );
}

export default App;
