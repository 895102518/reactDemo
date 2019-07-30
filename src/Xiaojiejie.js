import React, { Component, Fragment } from 'react'
// 导入组件
import XiaojiejieItem from './XiaojiejieItem'
import './haha.css'

class Xiaojiejie extends Component {
    // 构造函数 定义当前的值
    constructor(props) {
        super(props)
        this.state = {
            inputvalue: '',
            list: ['按摩', '推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div><input className='input' value={this.state.inputvalue} onChange={this.inputchange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            //  使用组件
                            return (
                                    <XiaojiejieItem
                                        content={item}
                                        key={index + item}
                                        index = { index }

                                        deleteItem = { this.deleteItem.bind(this) }
                                    />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputchange(e) {
        this.setState({
            inputvalue: e.target.value
        })
    }
    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputvalue],
            inputvalue: ''
            // ...this.state.list 扩展运算符 相当于  把list里面的全部拿过来
            // list:['按摩', '推背', this.state.inputvalue]
        })
    }
    // 删除数组
    deleteItem(index) {
        console.log(index)
        // 不能这样写  给后期挖坑  很严重
        // this.state.list.splice(index,1)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}
export default Xiaojiejie