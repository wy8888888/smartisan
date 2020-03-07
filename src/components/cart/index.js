import React, { Component } from 'react';

export class Cart extends Component {
    render() {
        return (
            <div>
                <header className="header-title">
                    <h1>购物车</h1>
                </header>
                <section className="cart-container">
                    <div className="cart-empty-container">
                        <div className="img-container"></div>
                        <h3>购物车暂无商品</h3>
                        <p>添加到购物车的商品将会显示在这里</p>
                        <a className="buy-btn login-btn">登录</a>
                        <a className="buy-btn">现在选购</a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Cart;
