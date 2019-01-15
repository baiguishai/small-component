import React from "react"
class Dropdownshort extends React.Component {
    render() {
        const dropdata = this.props.dropdata
        return (
            <div className="component-select component-select-shot">
                <div className="component-selected">
                    <span className="component-select-option">操作系统</span>
                    <span className="component-arrow-down-border"></span>
                </div>
                <ul>
                    {dropdata.map((item,index)=>{
                        return (
                             <li key={item.toString()}><span>{item}</span></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default Dropdownshort