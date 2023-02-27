
function openPanel(e, panelName) {
  var i, panelContent, leftPanelItems;
  panelContent = document.getElementsByClassName("panelContent");
  for (i = 0; i < panelContent.length; i++) {
    panelContent[i].style.display = "none";
  }
  leftPanelItems = document.getElementsByClassName("leftPanelItems");
  for (i = 0; i < leftPanelItems; i++) {
    leftPanelItems[i].className = panelContent[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(panelName).style.display = "block";
  e.curentTarget.className += " active";
}

document.getElementById("defaultOpenpanel").click();
