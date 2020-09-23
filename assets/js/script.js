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

var momentEl = moment().hours(Number);
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

        if (moment().format("HH") == $(nineEl).attr("data-time"))
        $(nineEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(nineEl).attr("data-time"))
        $(nineEl).css("backgroundColor", "green");
    else
        $(nineEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(tenEl).attr("data-time"))
        $(tenEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(tenEl).attr("data-time"))
        $(tenEl).css("backgroundColor", "green");
    else
        $(tenEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(elevenEl).attr("data-time"))
        $(elevenEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(elevenEl).attr("data-time"))
        $(elevenEl).css("backgroundColor", "green");
    else
        $(elevenEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(twelveEl).attr("data-time"))
        $(twelveEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(twelveEl).attr("data-time"))
        $(twelveEl).css("backgroundColor", "green");
    else
        $(twelveEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(oneEl).attr("data-time"))
        $(oneEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(oneEl).attr("data-time"))
        $(oneEl).css("backgroundColor", "green");
    else
        $(oneEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(twoEl).attr("data-time"))
        $(twoEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(twoEl).attr("data-time"))
        $(twoEl).css("backgroundColor", "green");
    else
        $(twoEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(threeEl).attr("data-time"))
        $(threeEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(threeEl).attr("data-time"))
        $(threeEl).css("backgroundColor", "green");
    else
        $(threeEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(fourEl).attr("data-time"))
        $(fourEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(fourEl).attr("data-time"))
        $(fourEl).css("backgroundColor", "green");
    else
        $(fourEl).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(fiveEl).attr("data-time"))
        $(fiveEl).css("backgroundColor", "red");
    else if (moment().format("HH") > $(fiveEl).attr("data-time"))
        $(fiveEl).css("backgroundColor", "green");
    else
        $(fiveEl).css("backgroundColor", "lightgray");

          
    }

