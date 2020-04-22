import React from 'react'
import StoreBuyView from './StoreBuyView'

 /**
     * 详情页视图页面 - >收藏与购买的业务逻辑 -> 收藏与购买的视图
     * 
     */

export default class StoreBuy extends React.Component{
	 constructor(){
        super();
        this.state = {
            collected:false
        }
    }

    storeHandler() {
       console.log("收藏");
    }

    
    BuyHandler() {
        console.log("购买");
    }
	render(){
		return (
			<div>
				<StoreBuyView 
					onStoreHandler={this.storeHandler.bind(this)}
                    onBuyHandler={this.BuyHandler.bind(this)}
				/>
			</div>
		)
	}
}
