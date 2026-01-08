import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// IMPORT YOUR PAGES
import ScrollToTop from './PinPagePosition.jsx';
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';


function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                {/* URL: / -> Shows FrontPage */}
                <Route path="/" element={<FrontPage/>}/>

                {/* URL: /about -> Shows AboutPage */}
                <Route path="/about" element={<AboutPage/>}/>

            </Routes>
        </Router>
    );
}

export default App;

