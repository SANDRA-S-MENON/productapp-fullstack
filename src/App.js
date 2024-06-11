import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
