var d = new Date();
var weekday = d.getDay();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"];
var weekdayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("currentdate").innerHTML = weekdayName[weekday] + ', ' + day + ' ' + monthNames[month] + ' ' + year;