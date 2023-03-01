import './App.css';
import MainPage from './components/pages/MainPage.tsx';
import FormPage from './components/pages/FormPage.tsx';
import TablePage from './components/pages/TablePage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='form' element={<FormPage />} />
            <Route path='table' element={<TablePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
