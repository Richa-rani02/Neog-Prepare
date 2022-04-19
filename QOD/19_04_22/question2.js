// Given a string ,determine it its pallindrome,considering only alphanumeric characters


// First Approach

const pallindrome=(str)=>{
    str=str.toLowerCase();
    let i=0;
    let j=str.length-1;
    
    while(i<j){
        if(str.charAt(i)!==str.charAt(j)){
            return false;
        }else{
            i++;
            j--;
        }
    }
    return true;
    
}
const res=pallindrome("Abcdcba");
console.log(res);

//2nd Approach

const pallindrome=(str)=>{
    str=str.toLowerCase();
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
    }
    return true;
  
}
const res=pallindrome("Abcdcba");
console.log(res);


// 3rd approach using inbuilt method

const pallindrome=(str)=>{
    str=str.toLowerCase();
    let revStr=str.split('').reverse().join('');
    if(str!==revStr){
        return false;
    }
    
    return true;
  
}
const res=pallindrome("abcdcba");
console.log(res);



