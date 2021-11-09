import { createContext, useState } from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
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
import Register from './components/registerpage/Register';

const userContext = createContext();

function App() {
  const [user, setUser] = useState(null)
  return (
    <userContext.Provider value={{ user: user, setUser: setUser}}>
    <Router
        basename={window.location.hostname === 'localhost' ? '/' : 'MLM-project-Frontend/build/'}
      >
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <div className="App">
            <Sidebar />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/refarel-income" component={ReferalIncome} />
            <Route exact path="/referrals" component={Refferl} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/join" component={JoinNmem} />
            <Route exact path="/widthdrawl" component={Widthdrawl} />
            <Route exact path="/update" component={UpdatePro} />
            <Route exact path="/transfer" component={Transfer} />
            <Route exact path="/referalincome" component={ReferalIncome} />
            <Route exact path="/myteam" component={MyTeam} />
          </div>
       </Switch>
      </div>
      </Router>
      </userContext.Provider>
  );
}
 
export default App;
export {
  userContext
}