import React, { Component } from 'react';

class XiaojiejieItem extends Component {

    // 构造函数 绑定父组件的 this 
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <li onClick={this.handleClick}>{this.props.content}</li> 
        );
    }

    //当前的 this 是使用上面构造函数绑定的 this

    handleClick(){
        // 用父组件传过来的 deleteItem 方法 和 index 来进行删除
        // 调用了父组件传过来的 deleteItem 方法
        this.props.deleteItem(this.props.index)
    }
}

export default XiaojiejieItem;