import React from "react"

class Pages extends React.Component {
    render() {
        const stylename = this.props.stylename
        return (
            <div className={`component-pages borderBoxAll ${stylename}`}>
                <span className="prev-page-btn">上一页</span>
                <div className="component-page-nums">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                <span className="next-page-btn">下一页</span>
            </div>
        )
    }
}


export default Pages