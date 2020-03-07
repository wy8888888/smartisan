import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import Phone from './phone'
import Accessories from './accessories'
import Costume from './costume'
import Breathe from './breathe'
import Electric from './electric'
import Office from './office'
import { Input } from 'antd';

const { Search } = Input;
export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            path: ["phone", "accessories", "costume", "breathe", "electric", "office"]
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        axios.get("http://localhost:4000/data").then((res) => {
            console.log(res);
            if (res.status === 200) {
                this.setState({
                    list: res.data
                })
            }
        })
    }
    render() {
        let { list, path } = this.state;
        return (
            <div>
                {/* 搜索框  */}
                <section className="search-bar" style={{boxShadow:"0 1px 0 hsla(0, 0%, 40%, .1)"}}>
                    <Search
                        placeholder="请输入搜索关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: "100%" }}
                    />
                </section>
                {/* 左侧列表 */}
                <section className="left-wrap">
                    <ul className="left-list">
                        {
                            list.map((item, index) => {
                                return <li key={index}>
                                    <NavLink to={"/category/" + path[index]}> {item.classifyName}
                                    </NavLink>
                                </li>
                            })
                        }

                    </ul>
                </section>
                {/* 右侧商品列表 */}
                <section className="right-wrap">
                    <Switch>
                        <Route path="/category/phone" component={Phone} />
                        <Route path="/category/accessories" component={Accessories} />
                        <Route path="/category/costume" component={Costume} />
                        <Route path="/category/breathe" component={Breathe} />
                        <Route path="/category/electric" component={Electric} />
                        <Route path="/category/office" component={Office} />
                        <Redirect from="/category" to="/category/phone" exact />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Category;
