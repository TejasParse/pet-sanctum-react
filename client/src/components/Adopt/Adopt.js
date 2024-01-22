import "./Adopt.css"
import Filters from "./Filters"
import SearchBar from "./SearchBar";
import ListPets from "./ListPets";
import { useState, useEffect }  from "react"
import axios from "axios";
import { RingLoader, BarLoader } from "react-spinners"
import { toast } from 'react-toastify';

let Adopt = (props) => {
    
    let [data, changeData] = useState([]);

    let [filter, changeFilter] = useState("all");

    let [search, changeSearch] = useState("");

    let [isLoading, setIsLoading] = useState(true);

    let onChangeSearch = (newString)=>{
        changeSearch(newString);
    }

    useEffect(()=>{

        setIsLoading(true);

        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/petsearch?search=${search}`)
          .then((res) => {
            setIsLoading(false);
            data = res.data;
            console.log(data.data);
            changeData(res.data.data);

          })
          .catch((err) => {
            toast.error(`Error: ${err.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsLoading(false);
            console.log(err);
          });


    }, [search])

    useEffect(()=>{
        
        setIsLoading(true);

        axios
          .get(`${process.env.REACT_APP_SERVER_LINK}/api/pet/${filter}`)
          .then((res) => {
            data = res.data;
            setIsLoading(false);
            console.log(data.data);
            changeData(res.data.data);
          })
          .catch((err) => {
            toast.error(`Error: ${err.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsLoading(false);
            console.log(err);
          });

    },[filter])


    let onChangeFilter = (event)=>{

        console.log(event.target.id);
        changeFilter(event.target.id)

    };

    return (
        <div>
            <SearchBar onChangeSearch={onChangeSearch} isLoading={isLoading}/>
            <Filters onChangeFilter = {onChangeFilter} currentFilter = {filter} />
            <div id="cards1" className="py-4">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="position-relative d-inline-block"> Adopt a Pet </h2>
                    </div>
                    <div className="row">
                        
                        <div className="container">

                            { !isLoading && data.length==0 && <h3>No Data Found!</h3>}
                            { !isLoading && data.length !== 0 && <ListPets dataShow={data}/>}
                            <div className="d-flex justify-content-center my-5">
                                <BarLoader
                                    color="#000"
                                    height={4}
                                    width={200}
                                    loading={isLoading}
                                />
                                {/* <RingLoader
                                    color="#000"
                                    loading={isLoading}
                                    size={75}
                                /> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopt;
