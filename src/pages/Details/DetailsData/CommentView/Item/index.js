import React from 'react'
import Star from '../../../../../components/Star'
import './style.less'

export default class Item extends React.Component{
	render(){
		//获取数据
		let item=this.props.data
		return (
			  <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={ item.star }/>
                <p>{item.comment}</p>
            </div>
		)
	}
}
