import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import MainLayout from './Views/MainLayout/mainLayout';
import DashBoard from './Views/Dash/DashBoard';
import MemberShipManage from './Views/component/Membership/memberShipManage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/:slug" element={<MainLayout/>} /> 
        </Route>
        <Route path='/' element={<MainLayout/>} /> 
      </Routes>
    </div>
  );
}

export default App;
