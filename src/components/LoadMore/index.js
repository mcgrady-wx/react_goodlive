import React from "react"
import './style.less'

export default class LoadMore extends React.Component {
	constructor(){
		super();
		this.load=React.createRef();
	}
	/**
     * 监听页面滚动事件
     */
	componentDidMount(){
		let timer=null
		//获取屏幕的高度
		let winHeight=document.documentElement.clientHeight
		window.onscroll=()=>{
			//console.log(this.load.current)//获取当前元素
			// getBoundingClientRect:对象
			//console.log(this.load.current.getBoundingClientRect().top)//获取元素距离顶部的距离
			//防止抖动使用计时器
			if (timer) {
				clearTimeout(timer)
			}
			timer=setTimeout(()=>{
				if (this.load.current.getBoundingClientRect().top<winHeight) {
					// 该加载数据的时候
                    this.props.onLoadMore();
				}
			},100)
		}
		
	}
	
    render() {
        return (
            <div ref={this.load}>
               	加载更多  
            </div>
        )
    }
}