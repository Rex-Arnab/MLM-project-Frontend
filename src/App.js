import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Refferl from './components/Refferl';
import Report from './components/Report';
import Logout from './components/Logout';
import JoinNmem from './components/JoinNmem';
import Widthdrawl from './components/Widthdrawl';
import UpdatePro from './components/UpdatePro';
import Transfer from './components/Transfer';
import MyTeam from './components/MyTeam';
import Login from './components/loginpage/Login';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/Dashboard';
import Referal from './components/Referal';


function App() {
  const [team, setTeam] = useState([]);
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin/" component={AdminLogin} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/refereal/:ref_id" component={Referal} />
          <Route exact path="/refereal" component={() => <p className="d-flex alert alert-danger">No Referral ID Found</p>} />
          <div className="App">
            <Sidebar />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/referrals" component={Refferl} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/logout" component={() => <Logout setTeam={setTeam} />} />
            <Route exact path="/join" component={JoinNmem} />
            <Route exact path="/widthdrawl" component={Widthdrawl} />
            <Route exact path="/update" component={UpdatePro} />
            <Route exact path="/transfer" component={Transfer} />
          <Route exact path="/myteam" component={() => <MyTeam team={team} setTeam={ setTeam} />} />
          </div>
       </Switch>
      </Router>
  );
}
 
export default App;