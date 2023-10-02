import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Form from './components/pages/form/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
