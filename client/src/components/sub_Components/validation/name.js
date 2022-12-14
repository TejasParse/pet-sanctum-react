
export default function Name(props) {
  let value = props.value;
  let span ;
  let label = props.label;
  
  let flag = 0;

   
  for (let i = 0; i < value.length; i++) {
    let upper = !(
      65 <= value.trim().charCodeAt(i) && value.trim().charCodeAt(i) <= 90
    );
    let lower = !(
      97 <= value.trim().charCodeAt(i) && value.trim().charCodeAt(i) <= 122
    );
    let space = !(32 === value.charCodeAt(i));
    if (upper && lower && space) {
      span = label+" can't contain special character & number";

      flag++;
       
      return [span,flag];
    }
  }
  if (value.trim().length > 21 || value.trim().length <= 2) {
    span = label+" should be of length 3 to 21";

    flag++;
     
    return [span,flag];
  }
  if (value.trim() === "") {
    span = "Only space is not allowed.";

    flag++;
     
    return [span,flag];
  }
  if (flag === 0)
  {
    span = ""
    return [span,flag];
  }
}
