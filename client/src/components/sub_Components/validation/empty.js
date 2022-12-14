
export default function Empty(props) {
  let value = props.value;
  let span;
   
  let flag = 0;
   
  if (value.trim() === "") {
    span = "Only space is not allowed";
     
    flag++;
    return [span, flag];
  }
  if (flag === 0) {
    span = "";
    
    return [span, flag];
  }
}
