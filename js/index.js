// == 值比较  === 类型比较 $(id) ---->  document.getElementById(id)  
function $(id){  
    return typeof id === 'string' ? document.getElementById(id):id;  
}  

function setTab(m,n){
	var tli=document.getElementById("leftmenu"+m).getElementsByTagName("li");
	var mli=document.getElementById("tab"+n);
	if(mli){
		mli.style.display = "block";
	 }
	 for(i=0;i<tli.length;i++){  
	  tli[i].className=i==n?"hover":"";
	  var tempMli=document.getElementById("tab"+i);
	  if(i!=n && tempMli){
		  tempMli.style.display = "none";
	  }
	 }
}
  
// 当页面加载完毕  
window.onload = function(){  
    // 拿到所有的标题(li标签) 和 标题对应的内容(div)  
    //var titles = $('tab-header').getElementsByTagName('li');  
    //var divs = $('tab-content').getElementsByClassName('dom');  
	var titlesArr = document.getElementsByClassName("tab-header-class");
	var divsArr = document.getElementsByClassName("tab-content-class");
	// 判断  
    if(titlesArr.length != divsArr.length) return;  
    for(var k=0;k<titlesArr.length;k++){
    	var titles = titlesArr[k].getElementsByTagName('li');  
    	var divs = divsArr[k].getElementsByClassName('dom');  
    	console.log(divs[0]);
		console.log(divs[1]);
        // 判断  
        if(titles.length != divs.length) return;  
        // 遍历  
        for(var i=0; i<titles.length; i++){  
            // 取出li标签  
            var li = titles[i]; 
			var div = divs[i];
			div.id = i+k*titles.length; 
            li.id = i+k*titles.length;  
			
//            console.log(li);  
            // 监听鼠标的移动  
            li.onmousemove = function(){  
			
				var allTitlesArr = document.getElementsByClassName("tab-header-class");
				var allDivsArr = document.getElementsByClassName("tab-content-class");
				
				if(allTitlesArr.length != allDivsArr.length) return;
				for(var x=0;x<allTitlesArr.length;x++){
					var allTitles = allTitlesArr[x].getElementsByTagName('li');  
					var allDivs = allDivsArr[x].getElementsByClassName('dom');
					
					for(var z=0;z<allTitles.length;z++){
						if(allTitles[z].id!=this.id){
							allTitles[z].className = ''; 
						}else{
							this.className = 'selected'; 
						}
						
						if(allDivs[z].id!=this.id){
							allDivs[z].style.display = 'none';
						}else{
							allDivs[z].style.display = 'block'; 
						}
					}
				}
			
            }
		}			
    }
   
  
}  