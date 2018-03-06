var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var words=[
           {name:"PD",meaning:'product department'},
           {name:"GS",meaning:'Global Source'},
           {name:"lord",meaning:'god'},
           {name:"Socks",meaning:"袜子"},
           {name:"as requested",meaning:"['seɪvjə] 救星;救助者;(S-)救世主"},
           {name:"finalize",meaning:"vt定稿，完成"},
           {name:"stationery",meaning:"文具"},
           {name:"push",meaning:"催"},
           {name:"drop",meaning:"drop/route/upload file via ftp／qq／weChat"},
           {name:"Well received.",meaning:"收到"},
           {name:"forward",meaning:"The files have been forwarded to my colleague for approval. Thank you for the extra work."},
           {name:"tree",meaning:"trunk leaf（leaves） stump 树桩"},
           {name:"snack bags",meaning:"零食袋"},
           {name:"release",meaning:"用于发送最终稿"},
           {name:"slot",meaning:"['seɪvjə] 救星;救助者;(S-)救世主"},
           {name:"for this item",meaning:"我们常常评论item用for，such as for this item"},
           {name:"retouch photoes",meaning:"P图"},
           {name:"zipper",meaning:"包扎"},
           {name:"lip",meaning:"拉链"},
           {name:"color label/swatch",meaning:"色卡"},
           {name:"head／back card",meaning:"头卡／背卡"},
           {name:"PDP",meaning:"PDP 展示盒（面向消费者的那个面，通常指正面）"},
           {name:"feather",meaning:"羽毛"},
           {name:"fur",meaning:"皮毛"},
           {name:"fibber",meaning:"纤维"},
           {name:" label ／warning label",meaning:"警语"},
           {name:"notification",meaning:"通知"},
           {name:"FT",meaning:"FT＝1 inch＝1“"},
           {name:"in terms of",meaning:" 飞机孔"},
           {name:"peg hole",meaning:"色卡"},
           {name:"display",meaning:"PDQ"},
        ]
  res.render('english/', { title: 'English',words:words});
});

module.exports = router;
