import React from "react"

// 增加成员

class Adduser extends React.Component {

    render() {
        const userlist = this.props.userlist
        const closeBtn = this.props.closeBtn
        return (
            <div className="component-from-box component-fixed">
                <div className="component-from-addbox component-absolute-origin bg-fff borderBoxAll">
                    <div className="component-from-head">
                        <span>增加成员</span>
                        <span className="component-close-btn" onClick={closeBtn}></span>
                    </div>
                    <div className="component-search-users">
                        <div className="component-search-line"><input type="text" placeholder="输入企业微信搜索添加成员"/></div>
                        <div className="component-search-allusers inlineblock">
                            {userlist.map((user)=>{
                                return (
                                    <div className="component-usermsg inlineblock" key={user.name}>
                                        <div className="pic"><img src={require("../../static/images/console52.png")} alt={user.urlImg}/></div>
                                        <div className="name">{user.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="component-from-btn">
                        <input type="submit" value="确认"/>
                        <input type="reset" value="取消" onClick={closeBtn}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Adduser