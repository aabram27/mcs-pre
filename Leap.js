function Leap(year){
    if (year % 4 ==0){
        if (year % 100 ==0){
             if (year % 400 ==0) return true;
             else return false;
        }
        else return true;
    }
    else return false;

    
}
console.log("1997 " + Leap(1997));
console.log("1996 " + Leap(1996));
console.log("1900 " + Leap(1900));
console.log("2000 " + Leap(2000));