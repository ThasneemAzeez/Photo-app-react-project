import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import UserLogin from './components/UserLogin';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';

function App() {
  return (
    <div >
      <FrontPage/>
      <UserLogin/>
      <SearchPhoto/>
      <DeletePhoto/>
     
    </div>
  );
}

export default App;
