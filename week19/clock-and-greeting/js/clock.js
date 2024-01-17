let username = prompt("Enter name");

if (username)
    document.querySelector("#myName").innerHTML = username




function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = daysOfWeek[now.getDay()];

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = day + ", " + (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear();

    document.querySelector("#myClock").innerHTML = timeString + " | " + dateString;

}

setInterval(updateClock, 1000);

updateClock();

