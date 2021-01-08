function move(obj,attr,target,speed,callback){
	//关闭上一个定时器
	clearInterval(obj.timer);
	//获取元素目标的位置
	var current = parseInt(getStyle(obj,attr));
	//判断速度正负值
	if(current>target){
		speed=-speed;
	}
	//开启一个定时器，用来执行动画效果 
	//向执行动画的对象中添加一个timer属性，用来保存定时器的标识
	obj.timer=setInterval(function(){
		//获取box1原来的left值
		var oldValue = parseInt(getStyle(obj,attr));
		//在旧值的基础上增加
		var newValue = oldValue + speed;
		if((speed < 0 && newValue<target) || (speed > 0 && newValue > target)){
		newValue = target;
	}
	obj.style[attr] = newValue + "px";
	if(newValue == target){
		clearInterval(obj.timer);
		callback && callback();
	}
},30);
}



function getStyle(obj,name){
	if(window.getComputedStyle){
		return getComputedStyle(obj , null)[name];
		}else{
			return obj.currentStyle[name];
		
	}
	}
	
	
