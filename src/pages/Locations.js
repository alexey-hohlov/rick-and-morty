import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../app/API";
import { Pagination } from "../components";
import { SearchBar } from "../components";
import { locationSlice } from "../store/reducers/LocationSlice";

export default function Locations() {
    const { locations, info, pageNum, searchText } = useSelector(
        (state) => state.locationReducer
    );
    const { setItems, setInfo, setPage, setSearch } = locationSlice.actions;
    const dispatch = useDispatch();

    useEffect(() => {
        apiCall.getLocations(pageNum, searchText).then((response) => {
            dispatch(setItems(response.data.results));
            dispatch(setInfo(response.data.info));
        });
    }, [pageNum, searchText, dispatch, setInfo, setItems]);

    return (
        <div className="row m-4">
            <SearchBar setSearch={setSearch} />
            {locations.map((item, index) => (
                <div className="col m-3" key={index}>
                    <div
                        className="card border-info"
                        style={{ width: "300px", height: "180px" }}
                    >
                        <div className="m-2">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h5 className="card-subtitle text-muted mt-4">
                                    Type: {item.type}
                                </h5>
                                <h5 className="card-subtitle text-muted mt-2">
                                    {item.dimension}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Pagination info={info} setPage={setPage} pageNum={pageNum} />
        </div>
    );
}
