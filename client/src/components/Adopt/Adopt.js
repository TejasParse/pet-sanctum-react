import "./Adopt.css"
import Filters from "./Filters"
import SearchBar from "./SearchBar";
import ListPets from "./ListPets";
import { useState, useEffect }  from "react"
import axios from "axios";

let Adopt = (props) => {
    
    let data = require("../../database/pets.json");
    let [totalData, changeTotalData] = useState([]);
    let [filterState, changeFilter] = useState("all");
    let [dataShow, changeData] = useState([]);
    let [isLoad, LoadChange] = useState(true);

    useEffect(()=>{
        
        axios.get("http://localhost:3005/Pets")
            .then(res=>{
                data = res.data;
                console.log(res.data);
                changeData(res.data);
                changeTotalData(res.data);
            })
            .catch(err=>{
                console.log(err);
            })

    },[])


    useEffect(()=>{
        LoadChange(true)
        if(filterState == "all") {
            changeData(totalData)
            LoadChange(false)
            return;
        }
        let temp = totalData.filter((elmt, index)=>{
            return elmt.type.toLowerCase()==filterState;
        });

        LoadChange(false)

        console.log(temp);
        changeData(temp)
    },[filterState, totalData]);

    let onChangeFilter = (event)=>{

        console.log(event.target.id);
        changeFilter(event.target.id.toLowerCase())

    };

    return (
        <div>
            <SearchBar/>
            <Filters onChangeFilter = {onChangeFilter} currentFilter = {filterState} />
            <div id="cards1" className="py-4">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="position-relative d-inline-block"> Adopt a Pet </h2>
                    </div>
                    <div className="row">
                        
                        <div className="container">

                            { isLoad && <h3>Loading!</h3>}
                            { !isLoad && dataShow.length != 0 && <ListPets dataShow={dataShow}/>}
                            { !isLoad && dataShow.length == 0 && <h3>No Pets Available</h3>}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopt;
