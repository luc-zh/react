import React, { Component } from 'react';
import "./style.css"
import SouHeader from "../../../../sharedComponent/SouHeader"
import TopHeader from "../../../../sharedComponent/topHeader";
const data = [
  {
    id: 1,
    keyword: "家电",
    quantity: 8710
  },
  {
    id: 2,
    keyword: "男装",
    quantity: 541
  },
  {
    id: 3,
    keyword: "女装",
    quantity: 65
  },
  {
    id: 4,
    keyword: "手机",
    quantity: 133
  },
  {
    id: 5,
    keyword: "电脑",
    quantity: 179
  }
];

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    }
  }


  render() {
    return (
      <div className="searchBox ">
        <SouHeader value={this.state.inputText} onChange={this.handleChange}  money={this.props.money} onClick={this.props.onClick}/>
        <div className="searchBox__container">
          {/*<input className="searchBox__text"  value={this.state.inputText} onChange={this.handleChange}/>*/}
          {/*<span className="searchBox__cancel" onClick={this.handleCancel}>取消</span>*/}
        </div>
        {this.state.inputText.length > 0 ? this.renderSuggestList() : null}
      </div>
    );
  }
  renderSuggestList() {
    return (
      <ul className="searchBox__list">
        {
          data.map((item ,index)=> {
            return (
              <li className="searchBox__item" key={index}>
                <span className="searchBox__itemKeyworkd">{item.keyword}</span>
                <span className="searchBox__itemQuantity">约{item.quantity}个结果</span>
              </li>
            )
          })
        }
        
      </ul>
    )
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleClear = () => {
    this.setState({
      inputText: ''
    })
  }

  handleCancel = () => {

  }
}

export default SearchBox;