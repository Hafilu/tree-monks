var acc = document.getElementsByClassName("accordion");
var i;

// Open the first accordion by default
if (acc.length > 0) {
  var firstPanel = acc[0].nextElementSibling;
  acc[0].classList.add("acco-active");
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // If the clicked panel is already open, close it
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("acco-active");
    } else {
      // Close all panels
      var panels = document.getElementsByClassName("panel");
      for (var j = 0; j < panels.length; j++) {
        panels[j].style.maxHeight = null;
        acc[j].classList.remove("acco-active");
      }

      // Open the clicked panel
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("acco-active");
    }
  });
}
