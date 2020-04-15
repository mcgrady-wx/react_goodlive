import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"

import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import NotFound from "../pages/NotFound"

export default class AppRouter extends React.Component{
	render(){
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home}></Route>
                    <Route path="/life" component={Life}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="*" component={NotFound}></Route>
				</Switch>
			</HashRouter>
		)
	}
}