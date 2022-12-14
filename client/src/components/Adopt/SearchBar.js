let SearchBar = (props) => {

    return (
        <div className="container border-bottom">
            <div className="row my-3 d-flex justify-content-center align-items-center">
                <div className="col-lg-11 col-md-10 col-sm-9">
                    <div className="search">

                        <i className="fa fa-search"></i>
                        <form action="/Adopt" method="get">
                            <input
                                type="text"
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