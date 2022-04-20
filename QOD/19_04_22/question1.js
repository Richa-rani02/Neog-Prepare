// write a program that masks all but last 4 characters of the string "5565534276455423" to #


const mask=(str)=>{
    if(str.length<=4){
        return str;
    }else{
        let output="";
        output=str.substring(0,str.length-4).replace(/\d/g, "#")+
        str.substring(str.length-4,str.length)
        return output;
    }
    
}
const res=mask("5565534276455423");
console.log(res);
