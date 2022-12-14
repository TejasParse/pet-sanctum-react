

export default function Username(props) {
    let value = props.value;
    let span;
    
    let flag = 0;
     
    if ( value.length > 21 || value.length <= 2 )
  {
   
    span = "Username should be between 3 to 21";
    
    flag++;
    
    return [span, flag];

  }
  if ( !isNaN(value.charAt(0)) ) 
  {
    span = "Username can't be start with number";
    
    flag++;
     
    return [span, flag];
  }
  for ( let i = 0; i < value.length; i++) 
  {  
    var upper = !(65 <= value.charCodeAt (i) &&  value.charCodeAt(i) <= 90);
    var lower = !(97 <= value.charCodeAt (i) &&  value.charCodeAt(i) <= 122);
    var num = !(48 <= value.charCodeAt (i) && value.charCodeAt(i) <= 57);
    if ( upper  && lower && num)
    {
      
      span = "Username can't contain special character";
      
      flag++;
      
    return [span, flag];
    } 
  }
  if (value.trim() === "")
  {
   
    span = "Only space is not allowed ";
    flag++;
     
    return [span, flag];
    
  }
  if (flag === 0)
  {
    span = ""
     
    return [span,flag];
  }
}
