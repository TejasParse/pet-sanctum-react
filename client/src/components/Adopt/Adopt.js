import "./Adopt.css"
import Filters from "./Filters"
import SearchBar from "./SearchBar";
import ListPets from "./ListPets";
import { useState, useEffect }  from "react"
import axios from "axios";

let Adopt = (props) => {
    
    let [data, changeData] = useState([]);

    let [filter, changeFilter] = useState("all");

    let [search, changeSearch] = useState("");

    let onChangeSearch = (newString)=>{
        changeSearch(newString);
    }

    useEffect(()=>{

        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/petsearch?search=${search}`)
          .then((res) => {
            data = res.data;
            console.log(data.data);
            changeData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });


    }, [search])

    useEffect(()=>{
        
       
        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/${filter}`)
          .then((res) => {
            data = res.data;
            console.log(data.data);
            changeData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });

    },[filter])


    let onChangeFilter = (event)=>{

        console.log(event.target.id);
        changeFilter(event.target.id)

    };

    return (
        <div>
            <SearchBar onChangeSearch={onChangeSearch}/>
            <Filters onChangeFilter = {onChangeFilter} currentFilter = {filter} />
            <div id="cards1" className="py-4">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="position-relative d-inline-block"> Adopt a Pet </h2>
                    </div>
                    <div className="row">
                        
                        <div className="container">

                            { data.length==0 && <h3>Loading!</h3>}
                            { data.length !== 0 && <ListPets dataShow={data}/>}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopt;
