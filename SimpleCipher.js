var SimpleCipher = {
    alp:"abcdefghijklmnopqrstuvwxyz",

    encode1:function(str){
        return this.move1(str,3);
    },
    decode1 : function(str){
        return this.move1(str,-3);
    },
    move1 : function(str, step){
        var out = "";
        for(var i=0;i<str.length;i++){
            out = out + String.fromCharCode(str[i].charCodeAt(0)+step);
        }
        return out;
    },

    coder2:function(str, key,direction){
        var j = 0;
        var out = "";
        for (var i=0;i<str.length;i++){
            out = out + this.move1(str[i],direction * this.alp.indexOf(key[j]));   
            if (j>=key.length-1) j = 0;
            else j++;
        }
        return out;
    },

    coder3:function(str, key,direction){
        
        if (key == undefined || key == ""){
            key = "";
            for (var i=0;i<100;i++){
                key = key + this.alp[Math.floor(Math.random()*this.alp.length)];
            }
            
        }
        else {
            var i = 0;
            while(i<key.length && this.alp.indexOf(key[i])>=0) i++;
            if (i< key.length) {
                return "Incorrect key";
            }
        }
        return "key=" + key + " Result="+this.coder2(str,key,direction);
    }

};
console.log("1 Encode iamapandabear: " + SimpleCipher.encode1("iamapandabear"));
console.log("1 Decode ldpdsdqgdehdu: " +SimpleCipher.decode1("ldpdsdqgdehdu"));
console.log("2 Encode iamapandabear with key abc: " + SimpleCipher.coder2("iamapandabear", "abc",1));
console.log("2 Decode result back: " +SimpleCipher.coder2(SimpleCipher.coder2("iamapandabear", "abc",1), "abc",-1));
console.log("3 Generate key if not provided and encode: " + SimpleCipher.coder3("iamapandabear", "" ,1));
console.log("3 Check key for Uppercase: " + SimpleCipher.coder3("iamapandabear", "aBc" ,1));