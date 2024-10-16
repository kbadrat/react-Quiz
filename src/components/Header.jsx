import logo from '../assets/quiz-logo.png';

export default function Header() {
  return (

    <header>
        <img src={logo} alt="ReactQuiz Logo" />
        <h1>ReactQuiz</h1>
    </header>
  );
}