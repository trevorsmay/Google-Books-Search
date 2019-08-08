import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
   return (
     <Router>
     <div>
       <Nav />
       <Switch>
         <Route exact path="/" component={SearchBooks} />
         <Route exact path="/saved" component={SaveBooks} />
         <Route exact path="/saved/:id" component={SaveBooks} />
       </Switch>
        <Footer />
     </div>
     </Router>
   );
 }

 export default App;

