let Filters = (props) => {

    console.log(props.currentFilter);
    
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                <button type="button" className={`p-2 rounded m-2 ps-3 pe-3 filter-btn ${props.currentFilter == "all" && "filter-btn-clicked"}`} id="all" onClick={props.onChangeFilter}>
                    All
                </button>
                <button type="button" className={`p-2 rounded m-2 ps-3 pe-3 text-dark filter-btn ${props.currentFilter == "Dog" && "filter-btn-clicked"}`} id="Dog" onClick={props.onChangeFilter}>
                    Dogs
                </button>
                <button type="button" className={`p-2 rounded m-2 ps-3 pe-3 text-dark filter-btn ${props.currentFilter == "Cat" && "filter-btn-clicked"}`} id="Cat" onClick={props.onChangeFilter}>
                    Cat
                </button>
                <button type="button" className={`p-2 rounded m-2 ps-3 pe-3 text-dark filter-btn ${props.currentFilter == "Fish" && "filter-btn-clicked"}`} id="Fish" onClick={props.onChangeFilter}>
                    Fish
                </button>
                <button type="button" className={`p-2 rounded m-2 ps-3 pe-3 text-dark filter-btn ${props.currentFilter == "Other" && "filter-btn-clicked"}`} id="Other" onClick={props.onChangeFilter}>
                    Other
                </button>
            </div>
        </div>
    )

};

export default Filters;