	// 导航栏开始
	$('.img').mouseover(function(){
		$('.content').show()

	})
	$('.img').mouseout(function(){
		$('.content').hide()

	})
	window.onload=function(){


		var Lis=document.getElementsByTagName("li")
		for(i=0;i<Lis.length;i++){
			Lis[i].onmouseover=function(){
				this.className='lihover'
			}
			Lis[i].onmouseout=function(){
			this.className=''
		}
		}// 导航栏结束
		//图像放大
	
	$('.img1').mouseover(function(){

		$(this).addClass('div1')
	})
	$('.img1').mouseout(function(){
		$(this).removeClass('div1')
		
	})
// alert(1)
	

		// 幻灯片开始
	var now=1;
	
	var max=3;
	img=document.getElementById('img')
	//alert(max)
	setInterval(function(){
		for(i=1;i<(max+1);i++){
			if (i==now) {
				img.src='img/cd'+i+'.jpg'
				
			}else{
				img.innterHTML=i
				//alert(i)
			}
		}
		if (now==max) {
			now=1
		}else{
			now++
		}
		
	},2000)
}
	

