import React, { Component } from 'react';
import axios from 'axios'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
export class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerList: []
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项，
              autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
        this.getData()
    }
    getData() {
        axios.get("http://localhost:5000/data").then((res) => {
            console.log(res.data[0].list);
            if (res.status === 200) {
                this.setState({
                    bannerList: res.data[0].list
                })
            }
        })
    }

    render() {
        let { bannerList } = this.state;
        return (
            <div className="swiper-container" >
                <div className="swiper-wrapper">
                    {
                        bannerList.map((item, index) => {
                            return <div className="swiper-slide" key={index}>
                                    <img src={item.image} alt='' style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                                   </div>
                        })
                    }
                    {/* <div class="swiper-slide"><img src={bannerList[1].image} alt=''style={{width:"100%"}}/></div>
                        <div class="swiper-slide"><img src={bannerList[2].image} alt=''style={{width:"100%"}}/></div>
                        <div class="swiper-slide"><img src={bannerList[3].image} alt=''style={{width:"100%"}}/></div> */}
                    {/* <div class="swiper-slide">876789</div> */}
                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination">

                </div>
            </div>
        );
    }
}

export default HomeSwiper;
