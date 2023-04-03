import { useState } from "react";

let SearchBar = (props) => {

    let [currentInput, changeInput] = useState("");

    return (
        <div className="container border-bottom">
            <div className="row my-3 d-flex justify-content-center align-items-center">
                <div className="col-lg-11 col-md-10 col-sm-9">
                    <div className="search">

                        <i className="fa fa-search"></i>
                        <form onSubmit={(event)=>{
                            event.preventDefault();

                            props.onChangeSearch(currentInput);

                        }} method="get">
                            <input
                                type="text"
                                value={currentInput}
                                onChange={(event)=>{
                                    changeInput(event.target.value);
                                }}
                                className="form-control"
                                placeholder="Search by Breed or Pincode or Name"
                                name="search"
                            />
                            <button className="btn text-light" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SearchBar;