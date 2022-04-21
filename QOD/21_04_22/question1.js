// 3 angles of triangle .find whether triangle is scalene, isosceles,Equilateral

const findTriangle=(a,b,c)=>{
    let output="";
    if(a+b+c===180){
       if(a===b===c){
          output="Equilateral Triangle"
       }else if(a===b || b===c || c===a){
            output="Isosceles Triangle";
       } else{
           output="Scalene Triangle"
       }
       
    }else{
        output="Not a triangle";
    }
    return output;
}   
const res=findTriangle(60,60,60);
console.log(res);
