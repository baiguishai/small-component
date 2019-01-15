import React from "react"

class Tipmsg extends React.Component {
    render() {
        const stylename = this.props.stylename
        const tipmsg = this.props.tipmsg
        return (
            <div className={`component-tip-box ${stylename[0]}`}>
                <span><span className={`component-icon-warn ${stylename[1]}`}></span>{tipmsg}</span>
            </div>
        )
    }
}


export default Tipmsg