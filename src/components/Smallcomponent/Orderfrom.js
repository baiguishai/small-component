import React from "react"

// 预约
class Orderfrom extends React.Component {

    render() {
        const closeBtn = this.props.closeBtn
        return (
            <div className="component-from-box component-fixed">
                <div className="component-order-form borderBoxAll">
                    <form action="#">
                        <div className="component-from-head">
                            <span>预约产品宣讲</span>
                            <span className="component-close-btn" onClick={closeBtn}></span>
                        </div>
                        <div className="component-order-list">
                            <div className="component-order-list-block inlineblock">
                                <div className="lft">
                                    <span>预约人员</span>
                                </div>
                                <div className="right">
                                    <span>ryanczhang（张程）</span>
                                </div>
                            </div>
                            <div className="component-order-list-block inlineblock order-form-date">
                                <div className="lft">
                                    <span>预约时间</span>
                                </div>
                                <div className="right">
                                    <input type="button" placeholder=""/>
                                </div>
                            </div>
                            <div className="component-order-list-block inlineblock">
                                <div className="lft">
                                    <span>预约地点</span>
                                </div>
                                <div className="right">
                                    <input type="text" placeholder="科兴请填写会议室或茶水间位置，其他地区请填写办公大厦"/>
                                </div>
                            </div>
                            <div className="order-form-line"></div>
                            <div className="component-order-list-block inlineblock">
                                <div className="lft">
                                    <span>项目名称</span>
                                </div>
                                <div className="right">
                                    <input type="text" placeholder="补充项目名称方便我们更好的提供服务"/>
                                </div>
                            </div>
                            <div className="component-order-list-block inlineblock">
                                <div className="lft">
                                    <span>游戏类型</span>
                                </div>
                                <div className="right">
                                    <input type="text" placeholder="补充游戏类型方便我们更好的提供服务"/>
                                </div>
                            </div>
                            <div className="component-order-list-block">
                                <input type="submit" value="完成并提交"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Orderfrom