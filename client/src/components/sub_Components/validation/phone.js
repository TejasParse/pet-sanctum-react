
export default function Phone(props) {
  let value = props.value;
  let span;
  let form = /^[6-9]\d{9}$/;
  let nvalue = value.trim();
  
  let flag = 1;
  
  if (nvalue.match(form)) {
    flag = 0;
    span = "";
    
    return [span, flag];
    
  } else if (nvalue.length !== 10) {
    
    span = "Contact number should be of 10 digit";
    
    return [span, flag];
    
  }
  else{
    
    span = "Contact number is invalid";
    
    return [span, flag];
  }

  
}
