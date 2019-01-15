import React, {Component} from 'react';
import Orderfrom from "./components/Smallcomponent/Orderfrom"
import Deluser from "./components/Smallcomponent/Deluser"
import Adduser from "./components/Smallcomponent/Adduser"
import Tabledata from "./components/Smallcomponent/Tabledata"
import Bread from "./components/Smallcomponent/Bread"
import Tabbar from "./components/Smallcomponent/Tabbar"
import SuccessTip from "./components/Smallcomponent/SuccessTip"
import Failure from "./components/Smallcomponent/Failure"
import Dropdown from "./components/Smallcomponent/Dropdown"
import {Inputone, Inputtwo, Inputthree, Inputfour, Inputfives} from "./components/Smallcomponent/Inputs"
import Buttons from "./components/Smallcomponent/Buttons"
import Bulles from "./components/Smallcomponent/Bulles"
import Tipmsg from "./components/Smallcomponent/Tipmsg"
import Checkbox from "./components/Smallcomponent/Checkbox"
import Pages from "./components/Smallcomponent/Pages"
import './static/css/all.css';

const tabbartxt = [{tabtxt: "Tab1", tabTip: 0}, {tabtxt: "Tab2", tabTip: 1}, {
    tabtxt: "Tab3",
    tabTip: 0
}, {tabtxt: "Tab4", tabTip: 1}, {tabtxt: "Tab5", tabTip: 0},]
const userlist = [
    {name: "shawnczhang（张军）", urlImg: "console52.png"},
    {name: "shawnczhang（张军1）", urlImg: "console52.png"},
    {name: "shawnczhang（张军2）", urlImg: "console52.png"},
    {name: "shawnczhang（张军3）", urlImg: "console52.png"},
    {name: "shawnczhang（张军4）", urlImg: "console52.png"},
    {name: "shawnczhang（张军5）", urlImg: "console52.png"},
    {name: "shawnczhang（张军6）", urlImg: "console52.png"}
]
const tabledata = [
    {
        top: 1,
        problem: {
            url: "/",
            name: "#3204SIGSEGV(SESIGSEGVSIVSIGSEGVSIG)",
            noteworkType: "204 SIGSEGV(SESIGSEGVSIGSE",
            errmsg: "-",
            keyStack: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dolorem ipsa laboriosam natu"
        },
        compare: "1/16.67%", fluctuation: "6.67%", finddate: "2018-12-04 16:11:17", isgout: "", userSoure: 2, userNum: 3,checked:false,todo:"删除"
    },
    {
        top: 2,
        problem: {
            url: "/",
            name: "#1113204SIGSEGV(SESIGSEGVSIVSIGSEGVSIG)",
            noteworkType: "2011 SIGSEGV(SESIGSEGVSIGSE",
            errmsg: "Search for the keywords to learn more about each warning.",
            keyStack: " ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam dolorem ipsa laboriosam natu"
        },
        compare: "9/16.67%",
        fluctuation: "0.67%",
        finddate: "2018-12-22 16:11:17",
        isgout: "是",
        userSoure: 82,
        userNum: 93,
        checked:false,todo:"删除"
    },
    {
        top: 3,
        problem: {
            url: "/",
            name: "#5555SIGSEGV(SESIGSEGVSIVSIGSEGVSIG)",
            noteworkType: "208 SIGSEGV(SESIGSEGVSIGSE",
            errmsg: "-",
            keyStack: "olor sit amet, consectetur adipisicing elit. Alias aperiam dolorem ipsa laboriosam natu"
        },
        compare: "4/16.67%",
        fluctuation: "9.67%",
        finddate: "2018-12-07 16:11:17",
        isgout: "",
        userSoure: 42,
        userNum: 43,
        checked:false,todo:"删除"
    },
    {
        top: 4,
        problem: {
            url: "/",
            name: "#3333SIGSEGV(SESIGSEGVSIVSIGSEGVSIG)",
            noteworkType: "206 SIGSEGV(SESIGSEGVSIGSE",
            errmsg: "-",
            keyStack: "sectetur adipisicing elit. Alias aperiam dolorem ipsa laboriosam natu"
        },
        compare: "3/16.67%",
        fluctuation: "8.67%",
        finddate: "2018-12-06 16:11:17",
        isgout: "",
        userSoure: 22,
        userNum: 23,
        checked:false,todo:"删除"
    },
    {
        top: 5,
        problem: {
            url: "/",
            name: "#32111SIGSEGV(SESIGSEGVSIVSIGSEGVSIG)",
            noteworkType: "205 SIGSEGV(SESIGSEGVSIGSE",
            errmsg: "-",
            keyStack: "Lorem ipsum dolor sit amet, dolorem ipsa laboriosam natu"
        },
        compare: "2/16.67%",
        fluctuation: "7.67%",
        finddate: "2018-12-05 16:11:17",
        isgout: "",
        userSoure: 12,
        userNum: 13,
        checked:false,todo:"删除"
    },
]
const dropdata = ["操作系统1", "操作系统2", "操作系统3", "操作系统4", "操作系统5afafasfasdfsfsafsagafg sagsagasgasga"]
const breadNav = ["一级目录", "二级目录", "三级目录"]
const bulltxt = "气泡气泡气泡气泡气泡气泡气泡气泡气泡气泡..."
const tipmsg ="提示信息..."
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSuccess: false,
            isFailure: false,
            addUser:false,
            delUser:false,
            orderTodo:false
        };
        this.successTip=this.successTip.bind(this)
    }
    successTip(){
        // console.log(123)
        this.setState(()=>({
            isSuccess:true
        }))
        this.timer = setTimeout(()=>{
            this.setState({isSuccess:false})
        },1000)
    }
    failuretip(){
        console.log(123)
        this.setState(()=>({
            isFailure:true
        }))
        this.timer = setTimeout(()=>{
            this.setState({isFailure:false})
        },1000)
    }
    addUsers(){
        this.setState(prevState=>({
            addUser:!prevState.addUser
        }))
    }
    delUser(){
        this.setState(prevState=>({
            delUser:!prevState.delUser
        }))
    }
    orderTodo(){
        this.setState(prevState=>({
            orderTodo:!prevState.orderTodo
        }))
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div className="content">
                <p style={{height:"100px"}}></p>
                <span className="component-btn component-success" onClick={this.successTip}>成功</span>
                <span className="component-btn component-err" onClick={()=>this.failuretip()}>失败</span>
                <span className="component-btn component-err" onClick={()=>this.addUsers()}>增加成员</span>
                <span className="component-btn component-err" onClick={()=>this.delUser()}>删除成员</span>
                <span className="component-btn component-err" onClick={()=>this.orderTodo()}>预约</span>
                {/*提示 信息*/}
                <div className="component-btn component-warn">
                    <span>tip</span>
                    <Tipmsg tipmsg={tipmsg} stylename={["component-tip-color-red","component-icon-warn-red"]}></Tipmsg>
                </div>
                <div className="component-btn component-warn">
                    <span>tip</span>
                    <Tipmsg tipmsg={"提示信息。。。。。"} stylename={["component-tip-color-yellow","component-icon-warn-yellow"]}></Tipmsg>
                </div>
                <div className="component-btn component-warn">
                    <span>tip</span>
                    <Tipmsg tipmsg={tipmsg} stylename={["",""]}></Tipmsg>
                </div>
                {/*气泡*/}
                <div className="component-btn component-bubble">
                    <span>bubble(气泡)-down</span>
                    <Bulles bulltxt={bulltxt} stylename="component-bubble-txt-down" stylename2="component-arrow-top"></Bulles>
                </div>
                <div className="component-btn component-bubble">
                    <span>bubble(气泡)-right</span>
                    <Bulles bulltxt={bulltxt} stylename="component-bubble-txt-right" stylename2="component-arrow-right"></Bulles>
                </div>
                <div className="component-btn component-bubble">
                    <span>bubble(气泡)-top</span>
                    <Bulles bulltxt={bulltxt} stylename="component-bubble-txt-top" stylename2="component-arrow-down"></Bulles>
                </div>
                <div className="component-btn component-bubble">
                    <span>bubble(气泡)-left</span>
                    <Bulles bulltxt={bulltxt} stylename="component-bubble-txt-left" stylename2="component-arrow-left"></Bulles>
                </div>
                <p></p>
                {/*面包屑*/}
                <Bread breadNav={breadNav}></Bread>
                <p></p>
                {/*tab 导航*/}
                <Tabbar tabbartxt={tabbartxt} tabTip={1}></Tabbar>
                <p></p>
                {/*表格*/}
                <Tabledata tabledata={tabledata}></Tabledata>
                <p></p>
                {/*下拉框*/}
                <Dropdown dropdata={dropdata}  stylename="component-select-short"></Dropdown>
                <Dropdown dropdata={dropdata}  stylename="component-select-long"></Dropdown>
                <p></p>
                {/*搜索框*/}
                <Inputone></Inputone>
                <p></p>
                <Inputtwo></Inputtwo>
                <p></p>
                <Inputthree></Inputthree>
                <p></p>
                <Inputfour></Inputfour>
                <p></p>
                <Inputfives></Inputfives>
                <p></p>
                {/*按钮*/}
                <Buttons btntxt="状态变更" stylename="component-btn-normal component-btn-normal-first"></Buttons>
                <span> </span>
                <Buttons btntxt="状态变更" stylename="component-btn-normal component-btn-normal-second"></Buttons>
                <span> </span>
                <Buttons btntxt="状态变更" stylename="component-btn-normal component-btn-unclick"></Buttons>
                <span> </span>
                <Buttons btntxt="状态变更" stylename="component-btn-normal component-btn-unclick-first"></Buttons>
                <p></p>
                <Buttons btntxt="版本发布" stylename="component-btn-normal component-btn-normal-third"></Buttons>
                <span> </span>
                <Buttons btntxt="版本发布" stylename="component-btn-normal component-btn-normal-unclickthird"></Buttons>
                <span> </span>
                <Buttons btntxt="添加标签" stylename="component-btn-secondary component-btn-secondary-first"></Buttons>
                <span> </span>
                <Buttons btntxt="添加标签" stylename="component-btn-secondary component-btn-secondary-second"></Buttons>
                <span> </span>
                <Buttons btntxt="添加标签" stylename="component-btn-secondary component-btn-secondary-unclick"></Buttons>
                <span> </span>
                <Buttons btntxt="添加标签" stylename="component-btn-secondary component-btn-secondary-unclickfirst"></Buttons>
                <span> </span>
                <p></p>
                {/*选择*/}
                <Checkbox stylename={"component-checkbox-checkbox"}></Checkbox>
                <span> </span>
                <Checkbox stylename={"component-checkbox-checkbox-bg"}></Checkbox>
                <span> </span>
                <Checkbox stylename={"component-checkbox-checkbox"}></Checkbox>
                <span> </span>
                <Checkbox stylename={"component-checkbox-radio"}></Checkbox>
                <span> </span>
                <p></p>
                {/*翻页条*/}
                <Pages stylename={"alignlft"}></Pages>
                <Pages stylename={"alignmid"}></Pages>
                <Pages stylename={"alignrgt"}></Pages>
                {/*增加成员*/}
                {this.state.addUser&&<Adduser userlist={userlist}  closeBtn={()=>this.addUsers()}></Adduser>}
                {/*删除成员*/}
                {this.state.delUser&&<Deluser  closeBtn={()=>this.delUser()}></Deluser>}
                {/*预约*/}
                {this.state.orderTodo&&<Orderfrom  closeBtn={()=>this.orderTodo()}></Orderfrom>}
                {/*成功 提示*/}
                {!this.state.isSuccess?null:
                    <SuccessTip></SuccessTip>
                }
                {/*失败 提示*/}
                {!this.state.isFailure?null:
                    <Failure></Failure>
                }
            </div>
        );
    }
}

export default App
