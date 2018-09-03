function Bob(mes){
    if(mes.indexOf("?!") ==mes.length-2 || mes.indexOf("!?") == mes.length-2 )
        return "Calm down, I know what I'm doing!";
    else if (mes.toLowerCase().indexOf("bob")==0 && mes.length < 5)
        return "Fine. Be that way!";
    else if (mes[mes.length-1] == "?")
        return "Sure.";
    else if (mes[mes.length-1] == "!")
        return "Whoa, chill out!";
    else return "Whatever.";
    
}

console.log("Bob!" + " - " + Bob("Bob!"));
console.log("Bob!!!" + " - " + Bob("Bob!!!"));
console.log("Bob, what a nightmare?" + " - " + Bob("Bob, what a nightmare?"));
console.log("What a hell!?" + " - " + Bob("What a hell!?"));
console.log("Really?!" + " - " + Bob("Really?!"));
console.log("La la la" + " - " + Bob("La la la"));
