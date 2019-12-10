import React,{Component} from 'react';
import Footer from "./components/foonter/Foonter"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Classify from "./components/classify/Classify"
import Cart from "./components/cart/Cart"
import Home from "./components/home/Home"
import {connect} from "react-redux"
import Particular from "./components/particular/particular";
import Search from "./components/search/index";
import Register from "./components/register/index";
import Commodity from "./components/commodity/commodity";
import Commoditys from "./components/commodity copy/commodity";
import PrivateRoute from "./sharedComponent/condition/index";
import Centers from "./components/centers/cneters"
import WoDe from "./components/center";
class App extends Component{
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/' exact>
                            {<Redirect to='/blueTab'/>}
                        </Route>
                        <Route path="/blueTab" component={Home}/>
                        <Route path='/redTab' component={Classify}/>
                        <Route path='/greenTab' component={Cart}/>
                        <Route path='/yellowTab' component={WoDe}/>
                        <PrivateRoute path='/centers' component={Centers}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/particular' component={Particular}/>
                        <Route path='/search' component={Search}/>
                        <Route path='/commodity/:id' component={Commodity}/>
                        <Route path='/Commoditys/:id' component={Commoditys}/>

                    
                    </Switch>
                </div>
            </Router>
        );
    }
}

// const mapStateToProps=(state,props)=>{
//    return{
//        fang:state.cart.fang
//    }
// }
// const mapDispatchToProps=(dispatch)=>{
//
// }
//
// connect(mapStateToProps,mapDispatchToProps)(App);
export default App
