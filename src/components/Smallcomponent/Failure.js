import React from "react"
import errorimg from "../../static/images/ordererr.svg"

class Failure extends React.Component {
    render() {
        return (
            <div className="component-tip-msg">
                <div className="component-tip-div">
                    <p><img src={errorimg} alt="error"/></p>
                    <p>成功</p>
                </div>
            </div>
        )
    }
}


export default Failure