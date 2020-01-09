import React from 'react'
import {withRouter, Link} from 'react-router-dom'

//要使用 React.Component
class Detail extends React.Component {
    render() {
        return (
            <div>
                Detail页面<br/>
                <Link to="/detail">嵌套路由1</Link><br/>
                <Link to="/detail/DetailChildTwo">嵌套路由2</Link>
                {/*嵌套的页面显示在这里*/}
                {this.props.children}
            </div>
        )
    }
}

// 将组件包裹进 Route, 然后返回
export default withRouter(Detail);
