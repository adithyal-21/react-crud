import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Check from "./components/Check";

function Home() {
    return (
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={Index}/>
           <Route path="/add" exact component={Add}/>
           <Route path="/check" exact component={Check}/>
           <Route path="/:id/edit" exact component={Edit}/>
        
       </Switch>
       </BrowserRouter>
    );
}

export default Home;
if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}