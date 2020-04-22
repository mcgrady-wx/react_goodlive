import React from 'react'
import './style.less'

export default class Star extends React.Component{
	render(){
		//获取星星数量
		let star=this.props.star
		//判断如果星星数大于5，就只取5
		if (star>=5) {
			star=5
		}
		return (
			 <div className="star-container">
                {
                	[1,2,3,4,5].map((item,index)=>{
                		//做判断，大于等于的星星数高亮
                		let lightClass = star >= item ? ' light' : ''
                		return (
                			<i className={"icon-star"+lightClass} key={index}></i>
                		)
                	})
                }
            </div>
		)
	}
}
