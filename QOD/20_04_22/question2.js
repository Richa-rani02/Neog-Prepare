// find character at index

const findChar=(str,pos)=>{
    let char='';
    
    for(let i=0;i<str.length;i++){
        if(i===pos){
           char=str[i]
        }
    }
     return char;
    }
    
    const res=findChar("neoGcamp",4);
    console.log(res);
    
    
    
    // 2nd approach
    
    const findChar1=(str,pos)=>{
        let char='';
        
        if(pos<=str.length){
            char=str.charAt(pos);
        }
         
         return char;
        }
        
        const res1=findChar1("neoGcamp",7);
        console.log(res1);