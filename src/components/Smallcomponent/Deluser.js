import React from "react"

// 删除成员

class Deluser extends React.Component {
    render() {
        const closeBtn = this.props.closeBtn
        return (
            <div className="component-from-box component-fixed">
                <div className="component-from-delbox component-absolute-origin bg-fff">
                    <div className="component-from-head">
                        <span>删除成员</span>
                        <span className="component-close-btn" onClick={closeBtn}></span>
                    </div>
                    <p className="component-from-tiptxt">确定要删除成员“abbyhuang（黄小钊）”吗？</p>
                    <div className="component-from-btn">
                        <input type="submit" value="确认"/>
                        <input type="reset" value="取消" onClick={closeBtn}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Deluser