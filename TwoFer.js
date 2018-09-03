function TwoFer(name){

    if (name == "Alice")
       console.log("One for Alice, one for me");
    else if (name == undefined) console.log("One for me, one for me");
}
TwoFer();
TwoFer("Alice");
TwoFer("Test");