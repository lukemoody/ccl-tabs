console.log('log from tabs.js');

function openTab(evt, tabName) {

    var i, tabPanel, tabLinks;

    tabPanel = document.getElementsByClassName("tab-panel");
    for (i = 0; i < tabPanel.length; i++) {
      tabPanel[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}
