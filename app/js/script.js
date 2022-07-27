"use strict"

var buttons = document.querySelectorAll(".btn");

//button mouse over - out
for(var element of buttons) {
    //Mouse over
    element.addEventListener("mouseover", function() {
        this.classList.add("button-mouseOver");
    });

    //Mouse out
    element.addEventListener("mouseout", function() {
        this.classList.remove("button-mouseOver")
    })
}

var active = "active-button";

//button-tab active
for(var e of buttons) {
    e.addEventListener("click", function() {

        // if(this.getAttribute("active-button") == "active") {
        //     console.log("aktyvus")
        //     this.classList.add("test")
        //     this.removeAttribute("active-button");
        // }
        
        for(var e of buttons){
            e.classList.remove("button-tab-active");
            e.removeAttribute(active)
        }

        this.classList.add("button-tab-active");
        // this.setAttribute(active, "active");
        
    });
}

var tabs = document.getElementsByClassName("tab");

//first load
for(var x of tabs) {
    x.style.display = "none";
}

function changeTab(event, name){
    //display selected tab
    for(var x of tabs) {
        x.style.display = "none";
    }
    document.getElementById(name).style.display = "block";

    //style clicked button
    for(var x of buttons) {
        x.classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");

}

