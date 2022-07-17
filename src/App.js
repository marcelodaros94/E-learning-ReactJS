import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CourseList from './components/CourseList/CourseList'

function App() {
  return (
    <>
      <NavBar/>
      <CourseList/>
    </>
  );
}

export default App;
