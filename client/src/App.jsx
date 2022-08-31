// the navigation are defined

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import NewTry from "./pages/NewTry";
import Getpost from "./pages/Getpost";
import NewTry2 from "./pages/NewTry2";
import Transition from "./pages/Transition";
import Supplier from "./pages/Supplier";


const App = () => {
 const user = useSelector(state=>state.user.currentUser);
//const user=false;
 console.log(user);
// const user=false;
  return (
    <Router>
      <Routes>
        <Route exact path="/"
          element={<Home/>}
        />
        <Route  path="/products/:category"
          element={<ProductList/>}
        />
        <Route  path="/product/:id"
          element={<Product/>}
        />
        <Route  path="/cart"
          element={<Cart/>}
        />
        <Route  path="/success"
          element={<NewTry/>}
        />
        <Route  path="/newtry2"
          element={<Getpost/>}
        />
         <Route  path="/tran/:id"
          element={<Getpost/>}
        />
        <Route  path="/tran2/:id2"
          element={<NewTry2/>}
        />
          <Route  path="/trial"
          element={<Transition/>}
        />
        <Route  path="/trial2"
          element={<Supplier/>}
        />
         <Route  path="/order"
          element={<Success/>}
        />
     {/* <Route path="/login">
  {user ? <Navigate  to="/" /> : <Login />}
</Route> */}
        {/* {
          user ? <Route  path="/login"  element={<Navigate replace to="/" />} />: <Route  path="/login" element={<Navigate replace to="/login" />}/>
          } */}
        <Route path="/login" element={user?<Navigate to="/"/>: <Login/>}
        
        />
        
        
        <Route path="/register" element={user?<Navigate to="/"/>: <Register/>}
        
        />
        

        
        
      </Routes>
    </Router>
  );
};

export default App;
