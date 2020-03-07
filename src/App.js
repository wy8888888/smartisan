import React from 'react';
import { Route, NavLink, Redirect, Switch, withRouter } from 'react-router-dom'
import { Icon } from 'antd';
import './index.css';
import './Hammer.css';
// import Home from './components/home'
// import Category from './components/category'
// import Cart from './components/cart'
// import My from './components/my'
// import NotFound from './components/notfound'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  componentDidMount() {
    this.changTitle(this.props.location.pathname);
    this.routeListen()
  }
  routeListen(){
    this.props.history.listen((location)=>{
      this.changTitle(location.pathname)
    })
  }
  //根据路由改变标题栏的标题
  changTitle(pathname){
    this.setState({
      visible:true
    })
    switch(pathname){
      case '/':
        case '/home':document.title="首页";break;
        case '/cart':document.title="购物车";break;
        case '/user':document.title="个人中心";break;
        default:
          if(pathname.includes("category")){
            document.title="分类"
          }else{
            this.setState({
              visible:false
            })
          }
    }
  }

  render() {
    return (
      // {/* 多个组件匹配只渲染第一个 */ }
      < div className="App" >
        
        <footer className="bottom" style={{"display":this.state.visible?'':"none"}}>
          <ul className="bottom-nav">
            <li className="nav-item">
              <NavLink to="/home"><Icon type="home" /><h5>首页</h5></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category"><Icon type="unordered-list" /><h5>分类</h5></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart"><Icon type="shopping" theme="filled" /><h5>购物车</h5></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user"><Icon type="user" /><h5>个人中心</h5></NavLink>
            </li>
          </ul>
        </footer>
      </div >
    );
  }
}


export default withRouter(App);
