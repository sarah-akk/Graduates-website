import './App.css';
import Sections from './layouts/Sections/Sections';
import Home from './layouts/Home/Home';
import Courses from './layouts/Courses/Courses';
import Overview from './layouts/Overview/Overview';
import Coaches from './layouts/Coaches/Coaches';
import Contact from './layouts/Contact/Contact';
import Application from './layouts/Application/Application';
import Footer from './layouts/Footer/Footer';
 

function App() {
  return (
    <>
    <Home />
    <Sections />
    <Courses/>
    <Overview/>
    <Coaches/>
    <Application/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
