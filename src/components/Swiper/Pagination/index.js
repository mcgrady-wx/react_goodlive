import React from 'react'
import "./style.less"


export default class Pagination  extends React.Component{
	render(){
		const num=this.props.num
		let numArr=new Array(num).fill(1)
		const currentIndex=this.props.currentIndex
		return (
			<div className="swiper-pagination">
                <ul>
                    {
                        numArr.map((element,index) => {
                            return <li className={currentIndex===index?'selected':''} key={index}></li>
                        })
                    }
                </ul>
            </div>

		)
	}
}
