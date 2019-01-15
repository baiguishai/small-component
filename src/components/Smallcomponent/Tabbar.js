import React from "react"

class Tabbar extends React.Component {
    render() {
        const tabbartxt =this.props.tabbartxt
        return (
            <div className="component-tab">
                <ul className="component-tab-ul">
                    {tabbartxt.map((txt,index)=>{
                        return (
                            <li key={txt} className={index===0?"active":""}>
                                <span>{txt.tabtxt}</span>
                                {txt.tabTip===1?<span className="component-tab-tip"></span>:""}
                             </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default Tabbar