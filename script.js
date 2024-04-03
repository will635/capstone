let s = 0;

function credits() {
    if (s==0) {
        document.getElementById("credits").style.display = "grid";
        document.getElementById("creditsToggle").value = "Close Credits";
        s = 1;
    } else if (s==1) {
        document.getElementById("credits").style.display = "none";
        document.getElementById("creditsToggle").value = "Open Credits";
        s = 0;
    }
}