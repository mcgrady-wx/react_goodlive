import React from 'react'
import { withRouter } from 'react-router-dom'
import "./style.less"

class SearchInput extends React.Component{
	constructor(){
		super();
		this.state={
			values:""
		}
	}
	render(){
		return (
			 <input
                type="text"
                className="search-input"
                value={this.state.values}
                placeholder="请输入搜索内容"
                onKeyUp={ this.keyUpHandler.bind(this) }
               	onChange={this.getValuesHandler.bind(this)}
            />
		)
	}
	getValuesHandler(e){
		this.setState({
			values:e.target.value
		})
	}
	keyUpHandler(e){
		//console.log(e.keyCode)
		/**
         * 回车判断
         */
		if (e.keyCode==13) {
			// 动态路由跳转
			this.props.history.push("/search/"+this.state.values)
		}
	}
}

export default withRouter(SearchInput)
