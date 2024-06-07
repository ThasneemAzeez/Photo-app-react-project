import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import UserLogin from './components/UserLogin';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/Addphoto' element={<UserLogin/>}/>
        <Route path='/search' element={<SearchPhoto/>}/>
        <Route path='/delete' element={<DeletePhoto/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
