//Given a string, return the character that occurs the maximum number of times in the string. If the maximum occurrence of two or more characters is the same, return any one of them. 
let input=prompt("Enter value:");
// let input="takeuforward";
let emp="";
let maxEle="";
let maxlen=0;
for(i of input){
    if(!emp.includes(i)){
        emp+=i;
    }
}
for(j of emp){
    let c=0;
    for(k of input){
        if(j==k){
            c=c+1;
        }
    }
    if(c>maxlen){
        maxEle=j;
        maxlen=c;
    }
}
console.log(maxEle);
