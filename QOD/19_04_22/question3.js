// Reverse the string word wise Input : welcome to neog camp ->camp neog to welcomeconst reverseWord=(str)=>{
    let rev=str.split(" ").reverse().join(" ");
    return rev;
}
const res=reverseWord("welcome to Neog Camp");
console.log(res);
