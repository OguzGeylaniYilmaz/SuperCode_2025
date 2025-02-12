let name = "Oguz Geylani";
let surname = "Yilmaz";

let birthPlace = "Duisburg";
let age = 32;
let height = "176 cm";
let bodyWeight = "72 kg";
let hobbies = "Coding,Surfing,Travelling";

let computerGame = "Diablo 3";
let favoriteMeal = "Döner";
let favoriteSport = "Football";
let favoriteFashion = "Prada";

let favoriteSeason = "Summer";
let favoriteVacationSpot = "Italy";

let text = `Hallo mein Name ist ${name} ${surname}. Ich bin in ${birthPlace} geboren. Ich bin ${age}
und meine Größe ist ${height} und Ich wiege ${bodyWeight}. Meine hoobys sind ${hobbies}.Mein Lieblingscomputerspiel ist ${computerGame} und Meinlieblingsessen ist ${favoriteMeal}. Ich liebe ${favoriteSport} und Meine Lieblingsmodemarke ist ${favoriteFashion}. Meine Lieblingsjahreszeit ist ${favoriteSeason} und mein liebtes Urlaubsziel ist ${favoriteVacationSpot}`;

let myInfo = document.getElementById("myHeading");
myInfo.innerHTML = text;

console.log(text);
