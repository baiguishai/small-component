import React from "react"

class Inputone extends React.Component {
    render() {
        return (
            <div className="component-search-big borderBoxAll">
                <input type="text" placeholder="搜索名称/编号"/>
                <button className="component-search-icon"></button>
            </div>
        )
    }
}

class Inputtwo extends React.Component {
    render() {
        return (
            <div className="component-search-input borderBoxAll">
                <input type="text" placeholder="搜索名称/编号"/>
                <button className="component-search-btn">搜索</button>
            </div>
        )
    }
}

class Inputthree extends React.Component {
    render() {
        return (
            <div className="component-search-normal borderBoxAll">
                <input type="text" placeholder="搜索名称/编号"/>
                <button className="component-search-icon"></button>
            </div>
        )
    }
}

class Inputfour extends React.Component {
    render() {
        return (
            <div className="component-input-block component-input-warn">
                <input className="component-warn" type="text" placeholder="用户名"/>
                <span className="component-warn-txt">包含非法字符</span>
            </div>
        )
    }
}

class Inputfives extends React.Component {
    render() {
        return (
            <div className="component-input-block component-input-unedit">
                <input className="component-input-unuse" disabled="disabled" type="text" placeholder="用户名"/>
            </div>
        )
    }
}

export {Inputone, Inputtwo, Inputthree, Inputfour, Inputfives}