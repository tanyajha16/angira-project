(function(){
  var item = document.querySelectorAll(".timelines li");
  function isElementInviewPort(el){
      var rect = el.getBoundingClientRect();
      console.log(rect);
      return(
          rect.top >= 0 && rect.left >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=(window.innerWidth || document.documentElement.clientWidth)
      );


  }
  function callback(){
      for(var i=0; i < item.length; i = i + 1){
          if (isElementInviewPort(item[i])) {
            item[i].classList.add("in-view");
          }
      }
      
  }
  window.addEventListener("scroll", callback);
})();
