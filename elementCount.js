let input=prompt("enter input:").split(" ").join("");
// let input="HelloWorld";
console.log(input);
let alpha="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
for(i of alpha){
    let c=0;
    for(j of input){
        if(i==j){
            c=c+1;
        }
       
    }
    if(c>0)
    console.log(`${i}-${c}`);
    
}