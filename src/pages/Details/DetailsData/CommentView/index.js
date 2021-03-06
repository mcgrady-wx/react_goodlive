import React from 'react'
import Item from './Item'
import CommentLoadMore from '../../../../components/LoadMore'
import './style.less'

export default class CommentView extends React.Component{
	render(){
		//获取数据
		let data=this.props.comments
		return (
			<div className="comment-list">
				{
					data.map((item,index)=>{
						 return <Item key={index} data={item}/>
					})
				}
				{
					this.props.hasMore?
					<CommentLoadMore onLoadMore={this.props.onLoadMore}/>:
					<div>没有更多评价</div>
				}
				
			</div>
		)
	}
}
