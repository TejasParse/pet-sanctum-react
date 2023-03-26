

export default function Cpwd(props) {
  let value = props.value;
  let password = props.pwd;
  let span;
  
  
  let flag = 0;
  
  if ( value !== password  )
  {
    span = "Reconfirm your password.";
    flag++;
    
    return [span, flag];

  }
  if (value === password) {
    span = "";
    
    return [span, flag];
  }
}
