import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Purchage from './Pages/Purchage/Purchage'
import PrivateRoute from './Pages/Login/PrivetRoute/PeivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path="/purchage/:serviceId">
           <Purchage></Purchage>
         </PrivateRoute>
         <PrivateRoute path="/dashboard">
         <Dashboard></Dashboard>
         </PrivateRoute>
         <Route path="/explore">
           <Explore></Explore>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
