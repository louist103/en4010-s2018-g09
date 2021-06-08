function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
}
function enableScroll() { 
    window.onscroll = function() {}; 
} 
function toggleFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("menuextend-mobile");
    var x = document.getElementsByClassName('line');
    var z = document.getElementsByClassName('logo');
    if (y.style.display === "block") {
        y.style.display = "none";
        enableScroll();
    } else {
        disableScroll();
        y.style.display = "block";
    }
  }