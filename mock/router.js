var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")
var searchdata = require("./data/search/searchdata")
var detailsdata = require("./data/details/detailsdata")


router.get(config.homehot1,function(req,res){
	// 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot1)
})

router.get(config.homehot2,function(req,res){
	// 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot2)
})

//搜索接口
router.get("/search",function(req,res){
	//接受  城市 搜索内容  页码 作为参数
    var cityName = url.parse(req.url, true).query.city;
    var content = url.parse(req.url, true).query.content;
    var page = url.parse(req.url, true).query.page;
    console.log("城市：" + cityName,"搜索内容：" + content,"页码：" + page);
    res.send(searchdata)
})

//详情接口
router.get("/details",function(req,res){
	//接受  城市id作为参数
    var id = url.parse(req.url, true).query.id;
    console.log("id：" + id);
    res.send(detailsdata)
})
module.exports = router;