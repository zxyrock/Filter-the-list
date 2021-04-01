window.onload = function(){
  // 绑定搜索栏
  var Input = document.getElementById('filterInput');
 
  // 监听搜索栏
  Input.addEventListener('keyup',filterNames);

  function filterNames(){
    // 获取输入的文本
   let filterValue = Input.value.toUpperCase();

   // 获取ul
   let ul = document.getElementById('names');
   
   //  获取li
   let li = document.getElementsByClassName('collection-item')
   

   // 遍历获取到的li
   for(let i = 0;i < li.length; i++){

    // 获取到 a标签
    let a = li[i].getElementsByTagName('a')[0];

    // 获取到 a标签文本的大写字符
    let aText = a.innerHTML.toUpperCase();

    // 判断,index()判断是否含有该值，有出现则大于-1
    if(aText.indexOf(filterValue) > -1){
      li[i].style.display = "";
    }else{
      // 反之隐藏
      li[i].style.display = "none";
    }
   }

  }


}