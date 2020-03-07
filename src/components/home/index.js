import React, { Component } from 'react';
import HomeSwiper from './homeSwiper'
import { Input } from 'antd';

const { Search } = Input;
// import Img from '../../../public/logo.png'
export class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo" ></div>
                </header>
                <section className="search-bar">
                    <Search
                        placeholder="请输入搜索关键字"
                        onSearch={value => console.log(value)}
                        style={{ width: "100%" }}
                    />
                </section>
                <div className="banner">
                    <HomeSwiper />
                </div>
                <div style={{ width: "90%", margin: "0 auto", border: "1px solid #e9e9e9" }}></div>
                <section className="has-floor-banner">
                    <aside className="inner-poster" alt="广告位图片">
                        <figure>
                            <img className="floor-banner-poster" />
                        </figure>
                    </aside>
                    <aside className=" list-wrap">
                        <section className="flex-item">
                            <figure className="item-cover">
                                <img alt="商品图片" />
                            </figure>
                            <article className="item-title">
                                <h3>商品名</h3>
                            </article>
                            <article className="item-bottom-info">
                                <aside className="item-price">
                                    <span class="yuan">￥</span>
                                    <span>价格</span>
                                    <span className="orignal">
                                        <span className="yuan">￥</span>
                                        商品原价
                                    </span>
                                </aside>
                            </article>
                        </section>
                    </aside>
                </section>
            </div>
        );
    }
}

export default Home;
