import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Refferl from './components/Refferl';
import Report from './components/Report';
import Logout from './components/Logout';
import JoinNmem from './components/JoinNmem';
import Widthdrawl from './components/Widthdrawl';
import UpdatePro from './components/UpdatePro';
import Transfer from './components/Transfer';
import ReferalIncome from './components/dashboard/ReferalIncome';
import MyTeam from './components/MyTeam';
import Login from './components/loginpage/Login';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/Dashboard';

function App() {
  const [team, setTeam] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/admin/" element={ <AdminLogin />} />
        <Route path="/admin/dashboard" element={ <AdminDashboard /> } />
        <Route path="/user/*" element={<UserRoute team={ team } setTeam={setTeam} /> } />
      </Routes>
    </BrowserRouter>
  );
}


function UserRoute({ team, setTeam }) {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
      <Route path="dashboard" element={ <Dashboard />} />
      <Route path="dashboard/refarel-income" element={<ReferalIncome />} />  
      <Route path="referrals" element={<Refferl />} />
      <Route path="report" element={<Report />} />
      <Route path="logout" element={<Logout />} />
      <Route path="join" element={<JoinNmem />} />
      <Route path="widthdrawl" element={<Widthdrawl />} />
      <Route path="update" element={<UpdatePro />} />
      <Route path="transfer" element={<Transfer />} />
      <Route path="referalincome" element={<ReferalIncome />} />
      <Route path="myteam" element={<MyTeam team={team} setTeam={ setTeam } />} />
      </Routes>
    </div>
  );
}

export default App;