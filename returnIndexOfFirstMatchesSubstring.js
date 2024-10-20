// Problem statement: “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.”

// Examples:

// Example 1:
// Input: str1 = "takeuforward"
//        str2 = “forward”
// Output: 5
// Explanation: "Forward" is present in the 5th index in "takeuforward"

let str1="takeuforward";
let str2="forward";
let stlen=str2.length;
let first=str2[0];
let res="";
for(i of str1){
    if(first==i){
        for(j=str1.indexOf(i);j<(str1.indexOf(i)+stlen);j++){
            res=res+str1[j];
        }
        // console.log(res);
        if(str2==res){
            console.log(str1.indexOf(i));
            break;
        }
    }
    
}
if(str2!=res){
    console.log("-1");
}

