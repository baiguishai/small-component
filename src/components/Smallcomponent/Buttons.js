import React from "react"
class Buttons extends React.Component {
    render() {
        const stylename =this.props.stylename
        const btntxt=this.props.btntxt
        return (
            <span className={`component-btn-style ${stylename}`}>{btntxt}</span>
        )
    }
}

export default Buttons