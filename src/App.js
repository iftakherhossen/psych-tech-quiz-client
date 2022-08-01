import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Common/Footer';
import Navigation from './components/Common/Navigation';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Forum from "./Pages/Forum";
import Home from './Pages/Home';
import JoinNow from "./Pages/JoinNow";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Playground from './Pages/Playground';
import Profile from "./Pages/Profile";
import Quiz from "./Pages/Quiz";
import QuizResult from "./Pages/QuizResult";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/joinNow" element={<JoinNow />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/quiz/:name" element={<Quiz />} />
          <Route path="/quiz/:name/result" element={<QuizResult />} />
          <Route path="/user/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>   
    </AuthProvider>
  );
}

export default App;
