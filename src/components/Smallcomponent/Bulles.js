import React from "react"

class Bulles extends React.Component {
    render() {
        const bulltxt = this.props.bulltxt
        const stylename = this.props.stylename
        const stylename2 = this.props.stylename2
        return (
            <div className="component-bubble-box">
                <span className={`component-bubble-txt ${stylename}`}>
                <span className={`component-arrow ${stylename2}`}></span>{bulltxt}</span>
            </div>
        )
    }
}


export default Bulles