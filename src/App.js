import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ExploreAllProducts from "./pages/ExploreAllProducts/ExploreAllProducts";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Register from "./pages/Register/Register";
import Footer from "./pages/Shared/Footer/Footer";
import Navigation from "./pages/Shared/Navigation/Navigation";

function App() {
    return (
        <div className="App bg-color">
            <AuthProvider>
                <Router>
                    <Navigation></Navigation>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <PrivateRoute path="/exploreAllProducts">
                            <ExploreAllProducts></ExploreAllProducts>
                        </PrivateRoute>
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
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
