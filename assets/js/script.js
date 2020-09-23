var nineEl= document.querySelector("#nine");
var tenEl= document.querySelector("#ten");
var elevenEl= document.querySelector("#eleven");
var twelveEl= document.querySelector("#twelve");
var oneEl= document.querySelector("#onePm");
var twoEl= document.querySelector("#twoPm");
var threeEl= document.querySelector("#threePm");
var fourEl= document.querySelector("#fourPm");
var fiveEl= document.querySelector("#fivePm");
var saveBtn = document.querySelector(".saveBtn");
var today = document.querySelector("#currentDay");

var momentEl = moment().hour(Number);
today.innerHTML = (momentEl);


//Array of the different times
var times =["9AM-UR","10AM-UR",
"11AM-UR","12PM-UR",
"1PM-UR","2PM-UR",
"3PM-UR","4PM-UR",
"5PM-UR"];



    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        //get nearby values.
        var nineAmEl= nineEl.value;
        var tenAmEl= tenEl.value;
        var elevenAmEl= elevenEl.value;
        var twelvePmEl= twelveEl.value;
        var onePmEl= oneEl.value;
        var twoPmEl= twoEl.value;
        var threePmEl= threeEl.value;
        var fourPmEl = fourEl.value;
        var fivePmEl = fiveEl.value
       
        //set items in local storage.
        localStorage.setItem(times[0],JSON.stringify(nineAmEl));
        localStorage.setItem(times[1],JSON.stringify(tenAmEl));
        localStorage.setItem(times[2],JSON.stringify(elevenAmEl));
        localStorage.setItem(times[3],JSON.stringify(twelvePmEl));
        localStorage.setItem(times[4],JSON.stringify(onePmEl));
        localStorage.setItem(times[5],JSON.stringify(twoPmEl));
        localStorage.setItem(times[6],JSON.stringify(threePmEl));
        localStorage.setItem(times[7],JSON.stringify(fourPmEl));
        localStorage.setItem(times[8],JSON.stringify(fivePmEl));
    });
    
    displayItems();

    function displayItems() {
        //get items in local storage
        var nineAM = JSON.parse(localStorage.getItem(times[0]));
        var tenAM = JSON.parse(localStorage.getItem(times[1]));
        var elevenAM = JSON.parse(localStorage.getItem(times[2]));
        var twelvePM = JSON.parse(localStorage.getItem(times[3]));
        var onePM = JSON.parse(localStorage.getItem(times[4]));
        var twoPM = JSON.parse(localStorage.getItem(times[5]));
        var threePM = JSON.parse(localStorage.getItem(times[6]));
        var fourPM = JSON.parse(localStorage.getItem(times[7]));
        var fivePM = JSON.parse(localStorage.getItem(times[8]));

        nineEl.value = nineAM;
        tenEl.value = tenAM;
        elevenEl.value = elevenAM;
        twelveEl.value = twelvePM;
        oneEl.value = onePM;
        twoEl.value = twoPM;
        threeEl.value = threePM;
        fourEl.value = fourPM;
        fiveEl.value = fivePM;
        
        //setting up present,past and future time

        if (momentEl == $(nineEl).attr("data-time"))
        $(nineEl).addClass("present");
    else if (momentEl > $(nineEl).attr("data-time"))
        $(nineEl).addClass("future");
    else
        $(nineEl).addClass("past");

    if (momentEl == $(tenEl).attr("data-time"))
        $(tenEl).addClass("present");
    else if (momentEl > $(tenEl).attr("data-time"))
        $(tenEl).addClass("future");
    else
        $(tenEl).addClass("past");

    if (momentEl == $(elevenEl).attr("data-time"))
        $(elevenEl).addClass("present");
    else if (momentEl > $(elevenEl).attr("data-time"))
        $(elevenEl).addClass("future");
    else
        $(elevenEl).addClass("past");

    if (momentEl == $(twelveEl).attr("data-time"))
        $(twelveEl).addClass("present");
    else if (momentEl > $(twelveEl).attr("data-time"))
        $(twelveEl).addClass("future");
    else
        $(twelveEl).addClass("past");

    if (momentEl == $(oneEl).attr("data-time"))
        $(oneEl).addClass("present");
    else if (momentEl > $(oneEl).attr("data-time"))
        $(oneEl).addClass("future");
    else
        $(oneEl).addClass("past");

    if (momentEl == $(twoEl).attr("data-time"))
        $(twoEl).addClass("present");
    else if (momentEl > $(twoEl).attr("data-time"))
        $(twoEl).addClass("future");
    else
        $(twoEl).addClass("past");

    if (momentEl == $(threeEl).attr("data-time"))
        $(threeEl).addClass("present");
    else if (momentEl > $(threeEl).attr("data-time"))
        $(threeEl).addClass("future");
    else
        $(threeEl).addClass("past");

    if (momentEl == $(fourEl).attr("data-time"))
        $(fourEl).addClass("present");
    else if (momentEl > $(fourEl).attr("data-time"))
        $(fourEl).addClass("future");
    else
        $(fourEl).addClass("past");

    if (momentEl == $(fiveEl).attr("data-time"))
        $(fiveEl).addClass("present");
    else if (momentEl > $(fiveEl).attr("data-time"))
        $(fiveEl).addClass("future");
    else
        $(fiveEl).addClass("past");

          
    }

