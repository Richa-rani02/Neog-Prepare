const findSum=(str)=>{
   let sum=0;
   for(let i=0;i<str.length;i++){
       sum+=Number(str[i]);
   }
   return sum;
}

const res=findSum("1234");
console.log(res);