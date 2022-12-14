 

export default function Pincode(props) {
    let value = props.value;
    let span;
    let form = /^[0-9]{6}$/;
    let nvalue = value.trim();
    
    let flag = 1;
    
    if (nvalue.match(form)){
        flag = 0;
        span = "";
         
        return [span, flag];
    }
    else{
        span = "Pincode is invalid";
         
        return [span, flag];
    }
}
