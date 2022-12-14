import { Link } from "react-router-dom" 

let PetCard = (props) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card bg-light h-100">
        <div className="card-body text-center">
          <div className="square-box_tanishq">
            <div
              className="square-content cardImage"
              id="card12Image"
              style={{
                backgroundImage: `url(${props.data.imageUrl})`,
              }}
            ></div>
          </div>
          <h3 className="card-title mb-2 mt-2"> {props.data.name} </h3>
          <p className="mb-0"> {props.data.breed} </p>
          <p className="mt-0"> {props.data.pincode} </p>
          <div className="">
            <Link to={`/PetInformation/${props.data.id}`} >
  
              <button type="button" className="btn m-2 text-dark adopt-btn">
                Know More
              </button>
    
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
