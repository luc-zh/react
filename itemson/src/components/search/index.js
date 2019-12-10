import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import PopularSearch from './components/PopularSearch'
import SearchHistory from './components/SearchHistory'

class Search extends Component {
    blue(i){
        if(i.key==="4"){
            this.props.history.push("/blueTab")
        }else if(i.key==="5"){
            this.props.history.push("/redTab")

        }else if(i.key==="6"){this.props.history.push("/greenTab")}else{
            this.props.history.push("/centers") &&  this.props.history.push("/yellowTab")
        }
    }
    money() {
        this.props.history.goBack()
    }
  render() {
        console.log(this.props)
    return (
      <div>
        <SearchBox money={this.money.bind(this)} onClick={this.blue.bind(this)}/>
        <PopularSearch/>
        <SearchHistory/>
      </div>
    );
  }
}

export default Search;