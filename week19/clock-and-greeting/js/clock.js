let username = prompt("Enter name");

if (username)
    document.querySelector("#myName").innerHTML = username

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}, ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

    document.querySelector("#myClock").innerHTML = `${timeString} | ${dateString}`;
}

setInterval(updateClock, 1000);

updateClock();

