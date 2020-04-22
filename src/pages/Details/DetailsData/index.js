import React from 'react'
import api from '../../../api'
import DetailsDataView from './DetailsDataView'

export default class DetailsData extends React.Component{
	
	constructor(){
		super();
		this.state={
			datas:{},
			comments:[],
			hasMore:false,
			page:0
		}
	}
	
	componentDidMount(){
		// 列表数据
		let id=this.props.id
		//发送获取商品详情请求
		api.details.detailsData(id)
			.then(res=>res.json())
			.then(data=>{
				//console.log(data)
				this.setState({
					datas:data
				})
			})
		//发送获取商品评价请求
		/*api.comment.commentData(id)
			.then(res=>res.json())
			.then(data=>{
				//console.log(data)
				this.setState({
					comments:data.data
				})
			})*/
		this.http(id,0)
	}
	//请求商品评价数据函数
	http(id,page){
		api.comment.commentData(id,page)
			.then(res=>res.json())
			.then(data=>{
				this.setState({
					comments:this.state.comments.concat(data.data),
					hasMore:data.hasMore,
					page:this.state.page+1
				})
			})
	}
	//加载更多评价
	commentLoadMore(){
		// 列表数据
		let id=this.props.id
		this.http(id,this.state.page)
	}
	render(){
		return (
			<div>
				{
					this.state.datas.imgs&&this.state.comments?
					<DetailsDataView data={this.state.datas} comments={this.state.comments} hasMore={this.state.hasMore} onLoadMore={this.commentLoadMore.bind(this)}/>
					:<div>数据请求中</div>
				}
			</div>
		)
	}
}
