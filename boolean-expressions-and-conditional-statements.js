const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = true;
let hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
const Torch = readline.question("Do you have Torch.Enter Y for 'yes' N for 'No' ");
if (Torch.toUpperCase() === 'N') {
    hasTorch = false;
}


if (choice.toLowerCase() === "mountains" && hasTorch) {
    console.log("You safely navigate through the dark mountains.");
    const Sword = readline.question("Do you have Sword.Enter Y for 'yes' N for 'No'");
    const mountainsChoice = readline.question("You encounter a wild animal. Do you 'fight' or 'run'? ");
    
    if (Sword.toUpperCase() === 'N') {
        hasSword = false;
    }
    if (mountainsChoice.toLowerCase() === "fight" && hasSword) {
        console.log("You draw your sword and defeat the animal!");
    } else if (mountainsChoice.toLowerCase() === "fight" && !hasSword) {
        console.log("You try to fight with your bare hands, but you're defeated!");
    } else {
        console.log("You run away safely, but you're exhausted.");
    }
}

 else if (choice.toLowerCase() === "mountains" && !hasTorch) {
    console.log("It's too dark to proceed. You decide to turn back.");
}
else if (choice.toLowerCase() === "village" || hasMap) {

    let Compass = readline.question("Do you have Compass.Enter Y for 'yes' N for 'No'");

    if (Compass.toUpperCase() === 'N') {
        hasCompass = false;

     }
    if (hasCompass) {
        console.log("You find your way to the village.");
    } else {
        console.log("You can not decide the direction");
    }
}
else {
    console.log("You get lost and wander aimlessly.");
}

