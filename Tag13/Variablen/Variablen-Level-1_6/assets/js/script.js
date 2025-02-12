
let x = 34;
x = 67;
console.log(x);

const y = 34;
y = 67;
console.log(y); // Wir bekommen Fehler. Denn sobald eine Konstantenvariable definiert ist, kann sie nicht mehr geändert werden. der Fehler, den wir erhalten haben ist Uncaught TypeError: Assignment to constant variable.