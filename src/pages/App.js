import React from 'react'
import { connect } from "react-redux"
import * as cityActions from "../store/actions/city"
import { bindActionCreators } from "redux"


class APP extends React.Component{
	 /**
     * 初始化需求
     *    1.城市初始化
     * 
     */
    componentDidMount(){
        const city = localStorage.getItem("city");
        // 北京 -> 来源与定位
        this.props.cityActions.initCity({
            cityName:city||"北京"
        })
    }
    
	render(){
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

const mapStateToProps= (state)=>{
    return{
        city:state.city
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(APP)
