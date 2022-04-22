//A program that counts the value of each character and prints the most repetitive one

const findValue=(Str)=>{
   let maxChar="";
   let max=0;
   let count={};
   for(let i of Str){
      if(count[i]){
          count[i]++;
      }else{
          count[i]=1;
      }
   }
  for(let key in count){
      if(count[key]>max){
          max=count[key]
          maxChar=key
      }
  }

   return maxChar;
}

const res=findValue("neeeogg");
console.log(res);


