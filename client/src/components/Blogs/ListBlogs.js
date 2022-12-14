import PetCard from "./PetCard"

let ListBlogs = (props) => {
    return (
        <div className="row g-3 mt-4">

            {
                props.dataShow.map((elmt, index) => {

                    return (
                        <Blog key={index} data={elmt} />
                    )

                })
            }

        </div>
    )

};

export default ListBlogs;