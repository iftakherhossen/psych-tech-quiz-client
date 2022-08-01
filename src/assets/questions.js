const questions = [
     {
          questionNo: 1,
          totalQuestions: 5,
          questionText: 'What is the capital of France?',                
          answerOptions: [
               { answerText: 'New York', isCorrect: false, answerNo: 1 },
               { answerText: 'London', isCorrect: false, answerNo: 2 },
               { answerText: 'Paris', isCorrect: true, answerNo: 3 },
               { answerText: 'Dublin', isCorrect: false, answerNo: 4 },
          ],
          correctAnswer: { answerText: 'Paris', isCorrect: true, answerNo: 3 },
          isFinalQuestion: false, 
     },
     {
          questionNo: 2,
          totalQuestions: 5,
          questionText: 'Who is CEO of Tesla?',
          answerOptions: [
               { answerText: 'Jeff Bezos', isCorrect: false, answerNo: 1 },
               { answerText: 'Elon Musk', isCorrect: true, answerNo: 2 },
               { answerText: 'Bill Gates', isCorrect: false, answerNo: 3 },
               { answerText: 'Tony Stark', isCorrect: false, answerNo: 4 },
          ],
          correctAnswer: { answerText: 'Elon Musk', isCorrect: true, answerNo: 2 },isFinalQuestion: false,
     },
     {
          questionNo: 3,
          totalQuestions: 5,
          questionText: 'The iPhone was created by which company?',
          answerOptions: [
               { answerText: 'Apple', isCorrect: true, answerNo: 1 },
               { answerText: 'Intel', isCorrect: false, answerNo: 2 },
               { answerText: 'Amazon', isCorrect: false, answerNo: 3 },
               { answerText: 'Microsoft', isCorrect: false, answerNo: 4 },
          ],
          correctAnswer: { answerText: 'Apple', isCorrect: true, answerNo: 1 },isFinalQuestion: false,
     },
     {
          questionNo: 4,
          totalQuestions: 5,
          questionText: 'How many Harry Potter books are there?',
          answerOptions: [
               { answerText: '1', isCorrect: false, answerNo: 1 },
               { answerText: '4', isCorrect: false, answerNo: 2 },
               { answerText: '6', isCorrect: false, answerNo: 3 },
               { answerText: '7', isCorrect: true, answerNo: 4 },
          ],
          correctAnswer: { answerText: '7', isCorrect: true, answerNo: 4 },
          isFinalQuestion: false,
     },
     {
          questionNo: 5,
          totalQuestions: 5,
          questionText: 'What is the capital of Bangladesh?',
          answerOptions: [
               { answerText: 'Dhaka', isCorrect: true, answerNo: 1 },
               { answerText: 'Tehran', isCorrect: false, answerNo: 2 },
               { answerText: 'New Delhi', isCorrect: false, answerNo: 3 },
               { answerText: 'Doha', isCorrect: false, answerNo: 4 },
          ],
          correctAnswer: { answerText: 'Dhaka', isCorrect: true, answerNo: 1 },isFinalQuestion: false,
     },
];

export default questions;