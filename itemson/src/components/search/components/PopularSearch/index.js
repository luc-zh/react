import React, { Component } from 'react';
import "./style.css"
import {Link} from  "react-router-dom"

const data = ['手机','电脑','男装','女装','家电','化妆品','没钱买啥','酒水','鞋子']

class PopularSearch extends Component {
  render() {
    return (
      <div className="popularSearch">
        {
          data.map((item,index) => {
            return (
              <Link to="/particular">
              <div key={index} className="popularSearch__item">{item}</div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

export default PopularSearch;