import React from "react"

class Bread extends React.Component {
    render() {
        const breadNav = this.props.breadNav
        return (
            <div className="component-bread inlineblock">
                {breadNav.map((breadtxt,index)=>{
                    return (
                        <div key={breadtxt}>
                            <span>{breadtxt}</span>{index!==breadNav.length-1?<span>&gt;</span>:""}
                        </div>
                    )
                })}
                {/*<span>{breadNav.}</span><span>&gt;</span><span>二级目录</span><span>&gt;</span><span>三级目录</span>*/}
            </div>
        )
    }
}


export default Bread