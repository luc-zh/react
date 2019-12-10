import React, {Component} from "react"
import SouHeader from "../../sharedComponent/SouHeader"

class Search extends Component {
    constructor() {
        super()
        this.state = {}
    }
    blue(i){
        if(i.key==="4"){
            this.props.history.push("/blueTab")
        }else if(i.key==="5"){
         this.props.history.push("/redTab")
     
        }else if(i.key==="6"){this.props.history.push("/greenTab")}else{
             this.props.history.push("/centers") &&  this.props.history.push("/yellowTab")
        }
     }
    render() {
        return (
            <div>
                <SouHeader money={this.money.bind(this)} onClick={this.blue.bind(this)}/>
                <div style={{marginTop: "45px"}}>
                    1233
                </div>
            </div>
        )
    }

    money() {
        this.props.history.go(-1)
    }
}

export default Search