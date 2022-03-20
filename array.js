
var friends = ["Imran","tania","Shamiha","nazmul","habibur","nothing"]
var friend2 = ["tania","imran","Shamiha","nazmul","habibur","hello"]


friends.pop();
friends.push("lx Imran");
friends.shift();
friends.unshift("ad imran");



function arrayPrint(){
    for(var i = 0; i<friends.length;i++){
        var j = friends[i];
        console.log(j);
    }
}

arrayPrint();