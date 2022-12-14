import PetCard from "./PetCard"

let ListPets = (props) => {
    return (
        <div className="row g-3 mt-4">

            {
                props.dataShow.map((elmt, index) => {

                    return (
                        <PetCard key={index} data={elmt} />
                    )

                })
            }

        </div>
    )

};

export default ListPets;