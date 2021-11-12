import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import ExploreAllProducts from "./pages/ExploreAllProducts/ExploreAllProducts";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="App bg-color">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/exploreAllProducts">
                            <ExploreAllProducts></ExploreAllProducts>
                        </Route>
                        <PrivateRoute path="/placeOrder/:id">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>
                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
