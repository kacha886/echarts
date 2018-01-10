
//例1 柱状图
 // 基于准备好的dom，初始化echarts实例
var barChart = echarts.init(document.getElementById('bar'));
 // 指定图表的配置项和数据				 
var bar_option = {
    color: ['#3398DB'],
	title: {
        text: '语文成绩'
    },
    tooltip: {
    	trigger: 'axis',
    },
    grid: {  
		bottom:'20%'//显示数据距离X轴的高度
	},
    xAxis: {
        data:["张三","李四","王五","赵六"],
        axisLabel: {
	   		interval:0, 
	  	 	rotate:40//X轴倾斜角度
		}, 
    },
    
    yAxis: {},
    series: [{
        name: '成绩',
        type: 'bar',
		data: [98,89,78,86]//成绩
    }]
};
// 使用刚指定的配置项和数据显示图表。
barChart.setOption(bar_option);




//例2 饼状图
var pieChart = echarts.init(document.getElementById('pie'));

var pie_option = {
    title : {
        text: "第一题",
        subtext: '小标题',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['A','B','C','D','E']
    },
    series : [
        {
            name: '选择个数',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'A'},
                {value:310, name:'B'},
                {value:234, name:'C'},
                {value:135, name:'D'},
                {value:1548, name:'E'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
pieChart.setOption(pie_option);


//3. series中的数据循环显示
var bar_y_data = [];
var bar_x_data = [];
$.ajax({
	url:"json/score.json",
	type:"get",
	dataType:"json",
	async:false,
	success:function(data){
		for(var i=0;i<data.length;i++){
			bar_x_data.push(data[i]["name"]);
			bar_y_data.push(data[i]["score"]);
		}
	},
	error:function(){
		console.log("连接失败");
	}
});
 // 基于准备好的dom，初始化echarts实例
var barChart_show = echarts.init(document.getElementById('bar_show'));
 // 指定图表的配置项和数据				 
var bar_option_show = {
    color: ['#3398DB'],
	title: {
        text: '语文成绩'
    },
    tooltip: {
    	trigger: 'axis',
    },
    grid: {  
		bottom:'10%'//显示数据距离X轴的高度
	},
    xAxis: {
        data:bar_x_data,
        axisLabel: {
	   		interval:0, 
	  	 	rotate:0//X轴倾斜角度
		}, 
    },
    
    yAxis: {},
    series: [{
        name: '成绩',
        type: 'bar',
		data: bar_y_data//成绩
    }]
};
// 使用刚指定的配置项和数据显示图表。
barChart_show.setOption(bar_option_show);

