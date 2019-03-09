
var localTime = new Date();

var utcTime = localTime.getUTCHours();
var estTime = new Date();

estTime.setHours(utcTime-5);

print("\nCurrent Date/Time: " + estTime + "\n");
