// find profit or loss 

const profitLoss=(cp,sp)=>{
let output='';

if(cp>sp){
output=`${cp-sp} Loss`;
}else if(sp>cp){
    output=`${sp-cp} Profit`;
}else{
    output=`No Profit no Loss`;
}
return output;

}
const res=profitLoss(3125,1125);
console.log(res);