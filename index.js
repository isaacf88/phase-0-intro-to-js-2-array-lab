const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat () {
    cats.shift("Milo");
}

const newcats = ["Broom"]
function appendCat () {
    
    let newcats = [...cats, "Broom"];
    return newcats;
}

const newcats2 = ["Arnold"]
function prependCat () {

    let newcats2 = ["Arnold",...cats];
    return newcats2;
}

const newcats3 = ["Milo", "Otis", "Garfield"];
function removeLastCat () {

    newcats3.splice(2);
    return newcats3;
}

const newcats4 = ["Milo", "Otis", "Garfield"];
function removeFirstCat () {

    newcats4.splice(0,1);
    return newcats4;
}