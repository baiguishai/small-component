import React from "react"
class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isDown:false,
            isSelect:"请选择..."
        }
    }
    dropdown(){
        console.log(123456)
        this.setState({
            isDown:true
        })
    }
    dropup(a){
        this.setState({
            isDown:false,
            isSelect:a,
        })
    }
    render() {
        const dropdata = this.props.dropdata
        const stylename = this.props.stylename
        return (
            <div className={`component-select ${stylename}`}>
                <div className="component-selected"  onClick={()=>this.dropdown()}>
                    <span className="component-select-option">{this.state.isSelect}</span>
                    <span className="component-arrow-down-border"></span>
                </div>
                {this.state.isDown&&
                    <ul>
                        {dropdata.map((item,index)=>{
                            return (
                                <li key={item.toString()} onClick={()=>this.dropup(item)}><span>{item}</span></li>
                            )
                        })}
                    </ul>
                }

            </div>
        )
    }
}



export default Dropdown