import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlotPropsSignIn from './components/login'; // Assuming login is SlotPropsSignIn
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlotPropsSignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
