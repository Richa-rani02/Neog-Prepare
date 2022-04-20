// find day is weekday or weekend

const findWeekend=(str)=>{
 
    const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let output='';
    for(let i in days){
        if(days[i]===str){
            if(i>0){
                 return output=`${str} is weekday`;
               } else{
                return output=`${str} is Weekend`;
               }
        }
       
    }
    return output="Not a valid day";

}
const res=findWeekend("Monday");
console.log(res);