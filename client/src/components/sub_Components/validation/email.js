

export default function Email(props) {
  let value = props.value;
  let span;
   
  let flag = 0;
  
  if (!value.includes(".")) {
    span = "Email don't have dot character";

    flag++;
    
    return [span, flag];
  }
  var check4 = value.indexOf(".") === value.length - 4;
  var check3 = value.indexOf(".") === value.length - 3;
  if (value.indexOf("@") <= value.indexOf(".") && !check4 && !check3) {
    span = "Email: '.' is used in wrong position";

    flag++;
   
    return [span, flag];
  }
  if (value.trim() === "") {
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
