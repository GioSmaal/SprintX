var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.width == "200px") {
        content.style.width = "0";
        content.style.visibility = "hidden";
        content.style.marginLeft = "0px"
      } 
      else {
        content.style.width = "200px";
        content.style.visibility = "visible";
        content.style.marginLeft = "-100px";
      }
    });
  }

function calculate(elem){
    if (elem.style.backgroundColor == "green") {
    elem.style.backgroundColor = "#BBB";
    }
    else {
    elem.style.backgroundColor = "green";
    }
}

