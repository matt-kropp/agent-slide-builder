import "./App.css";
import { Link, Route, Routes } from 'react-router-dom';
import NewSlide from './pages/NewSlide';
import EditSpeakerNotes from './pages/EditSpeakerNotes';
import EditSlideContent from './pages/EditSlideContent';
import EditLayout from './pages/EditLayout';

export default function App() {
  return (
    <div className="app">
      <nav className="top-nav">Agent Slide Builder</nav>
      <div className="main">
        <nav className="left-nav">
          <ul>
            <li><Link to="/">New Slide</Link></li>
            <li><Link to="/speaker-notes">Edit Speaker Notes</Link></li>
            <li><Link to="/slide-content">Edit Slide Content</Link></li>
            <li><Link to="/layout">Edit Layout</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<NewSlide />} />
            <Route path="/speaker-notes" element={<EditSpeakerNotes />} />
            <Route path="/slide-content" element={<EditSlideContent />} />
            <Route path="/layout" element={<EditLayout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
