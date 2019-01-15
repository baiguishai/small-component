import React from "react"

class Checkbox extends React.Component {
    render() {
        const stylename = this.props.stylename
        return (
            <div className="component-input-selectbox">
                <input type="checkbox" className="component-input-checkbox position-origin"/>
                <span className={`component-checkbox ${stylename}`}></span>
            </div>
        )
    }
}


export default Checkbox