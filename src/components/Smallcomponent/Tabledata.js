import React from "react"

class Tabledata extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tabledata:"",
            isChecked:false,
            checkedAll:false
        }
    }
    changeAll(){

        // this.setState({
        //     tabledata:this.props.tabledata
        // })
        const list = this.props.tabledata
        list.map(function(check){
            return check.checked=true
        })
    }
    componentDidMount() {

    }
    render() {
        const tabledata = this.props.tabledata
        return (
            <div className="component-table">
                <table>
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                            <label></label>
                        </th>
                        <th>Top</th>
                        <th>问题</th>
                        <th>当天影响用户/占比</th>
                        <th>波动</th>
                        <th>首次上报时间</th>
                        <th>是否系统退出</th>
                        <th>积累影响用户</th>
                        <th>积累影响次数</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tabledata.map((tabledata)=>{
                        return (
                            <tr key={tabledata.problem.name}>
                                <td>
                                    <input type="checkbox"/>
                                    <label></label>
                                </td>
                                <td>{tabledata.top}</td>
                                <td>
                                    <a href={tabledata.problem.url}>{tabledata.problem.name}</a>
                                    <div className="component-td-tip">
                                        <div className="component-td-tiplist">
                                            <span>网络类型</span>
                                            <span>{tabledata.problem.noteworkType}</span>
                                        </div>
                                        <div className="component-td-tiplist">
                                            <span>异常信息</span>
                                            <span>{tabledata.problem.errmsg}</span>
                                        </div>
                                        <div className="component-td-tiplist">
                                            <span>关键堆栈</span>
                                            <span>{tabledata.problem.keyStack}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{tabledata.compare}</td>
                                <td>{tabledata.fluctuation}</td>
                                <td>{tabledata.finddate}</td>
                                <td>{tabledata.isgout}</td>
                                <td>{tabledata.userSoure}</td>
                                <td>{tabledata.userNum}</td>
                                <td>{tabledata.todo}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}


export default Tabledata