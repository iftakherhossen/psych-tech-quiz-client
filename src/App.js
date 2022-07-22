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

function App() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);

  // const handleOptions = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }

  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < quiz.length) {
  //     setCurrentQuestion(nextQuestion);
  //   }
  //   else {
  //     setShowScore(true);
  //   }
  // }
  // {
  //   showScore ? (
  //     <div className='score-section'>
  //       You scored {score} out {quiz.length}
  //     </div>
  //   ) : (
  //     <div>
  //       <div className='question-section'>
  //         <div className='question-count'>
  //           <span>Question {currentQuestion + 1}/{quiz.length}</span>
  //         </div>
  //         <div className='question-text'>
  //           {quiz[currentQuestion].questionText}
  //         </div>
  //       </div>
  //       <div className='answer-section'>
  //         {
  //           quiz[currentQuestion].answerOptions.map((option, index) => (
  //             <button onClick={() => {handleOptions(option.isCorrect)}} key={index}>
  //               {option.answerText}
  //             </button>
  //           ))
  //         }
  //       </div>
  //     </div>
  //   )
  // }

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>   
    </AuthProvider>
  );
}

export default App;
