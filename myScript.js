var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanel = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabPanel.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanel[panelIndex].style.display = "block";
    tabPanel[panelIndex].style.backgroundColor = colorCode;
    tabButtons.forEach(function (node) {
        node.style.fontWeight = 400;
    });
    tabButtons[panelIndex].style.fontWeight = 800;

}
showPanel(0,'#E5E5E5');
