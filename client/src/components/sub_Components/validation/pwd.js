 
export default function Pwd(props) {
  let value = props.value;
  let span;
  let name = props.name;
  let flag = 0;
   
  

  if (value.length > 20 || value.length <= 8) {
    span = "Password should be between 8 to 20";

    flag++;
     
    return [span, flag];
  }
  let upper;
  let i;
  for (i = 0; i < value.length; i++) {
    upper = 65 <= value.charCodeAt(i) && value.charCodeAt(i) <= 90;

    if (upper) {
      break;
    }
  }
  if (i === value.length) {
    span = "Atleast 1 uppercase is mandatory";

    flag++;
     
    return [span, flag];
  }

  for (i = 0; i < value.length; i++) {
    let lower = 97 <= value.charCodeAt(i) && value.charCodeAt(i) <= 122;
    if (lower) {
      break;
    }
  }
  if (i === value.length) {
    span = "Atleast 1 lowercase is mandatory";

    flag++;
     
    return [span, flag];
  }

  for ( i = 0; i < value.length; i++) {
    var num = 48 <= value.charCodeAt(i) && value.charCodeAt(i) <= 57;
    if (num) {
      break;
    }
  }
  if (i === value.length) {
    span = "Atleast 1 digit is mandatory";

    flag++;
     
    return [span, flag];
  }

  if (value.trim() === "") {
    span = "Only space is not allowed ";
    flag++;
     
    return [span, flag];
  }
  if (flag === 0) {
    span = "";
     
    return [span, flag];
  }
}
