import React from 'react'
import Home from './components/Home'
import Detail from './components/Detail'
import DetailChildOne from './components/DetailChildOne'
import DetailChildTwo from './components/DetailChildTwo'
import TodoList from './components/TodoList'
// HashRouter | BrowserRouter
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function BasicRoute() {
    return (
        <div className="BasicRoute ">
            <Router>
                <Link to='/'>Home</Link> <br/>
                <Link to='/Detail'>Detail</Link> <br/>
                <Link to='/TodoList/woshiTodoList'>TodoList</Link>
                <div>
                    <Route exact path='/' component={Home}/>
                    {/*嵌套页面路由*/}
                    <Route path="/detail" render={() =>
                        <Detail>
                            <Route exact path="/detail" component={DetailChildOne}/>
                            <Route exact path="/detail/DetailChildTwo" component={DetailChildTwo}/>
                        </Detail>
                    }/>
                    <Route exact path='/TodoList/:name' component={TodoList}/>
                </div>
            </Router>
        </div>
    );
}

export default BasicRoute;
