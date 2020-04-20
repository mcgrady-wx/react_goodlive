import React from 'react'
import SearchHeader from './SearchHeader'
import SearchList from './SearchList'
import {connect} from 'react-redux'

class Search extends React.Component{
	render(){
		//console.log(this.props.match.params.content)
		return (
			<div>
				<SearchHeader />
				<SearchList content={this.props.match.params.content} city={this.props.city.cityName}/>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		city:state.city
	}
}

export default connect(mapStateToProps)(Search)
