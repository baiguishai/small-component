import React from "react"
import okimg from "../../static/images/orderok.svg"

class SuccessTip extends React.Component {
    render() {
        return (
            <div className="component-tip-msg">
                <div className="component-tip-div">
                    <p><img src={okimg} alt="success"/></p>
                    <p>成功</p>
                </div>
            </div>
        )
    }
}


export default SuccessTip