var http=require("http");
var qs=require("querystring");
var monthData={
    name:"六月销售数据列表",
    list:[
        {
            staff:"张三",
            goods:[
                {id:1001,name:"衬衫",price:60,num:25,total:2100},
                {id:1002,name:"羊毛衫",price:45,num:36,total:2100},
                {id:1003,name:"雪纺衫",price:33,num:120,total:2100},
                {id:1004,name:"裤子",price:120,num:70,total:2100},
                {id:1005,name:"高跟鞋",price:600,num:65,total:2100},
            ]
        },
        {
            staff:"李四",
            goods:[
                {id:1001,name:"衬衫",price:60,num:90,total:2100},
                {id:1002,name:"羊毛衫",price:45,num:110,total:2100},
                {id:1003,name:"雪纺衫",price:33,num:40,total:2100},
                {id:1004,name:"裤子",price:120,num:15,total:2100},
                {id:1006,name:"袜子",price:6,num:20,total:2100},
            ]
        },
        {
            staff:"王五",
            goods:[
                {id:1001,name:"衬衫",price:60,num:40,total:2100},
                {id:1003,name:"雪纺衫",price:33,num:20,total:2100},
                {id:1004,name:"裤子",price:120,num:10,total:2100},
                {id:1005,name:"高跟鞋",price:600,num:5,total:2100},
                {id:1006,name:"袜子",price:6,num:70,total:2100},
                {id:1007,name:"风衣",price:6000,num:7,total:2100},
            ]
        }
    ]
}
var server=http.createServer(function(req,res){
    var data="";
    req.on("data",function(_data){
        data=_data;
    });
    req.on("end",function(){
        var path=req.url;
        console.log(path)
        // switch(path){
        //     case 
        // }
    })
})
server.listen(4010,"localhost",function(){
    console.log("start !")
})