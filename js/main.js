(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){
    var o=m.classList.toggle('abierto');
    b.setAttribute('aria-expanded',o);
  });
  m.addEventListener('click',function(e){
    if(e.target.tagName==='A'){m.classList.remove('abierto');b.setAttribute('aria-expanded',false);}
  });
})();
