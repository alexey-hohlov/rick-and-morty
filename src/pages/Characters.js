import { useEffect } from "react";
import { apiCall } from "../app/API";
import { Modal, Pagination } from "../components";
import { SearchBar } from "../components";

// import reducers
import { useDispatch, useSelector } from "react-redux";
import { characterSlice } from "../store/reducers/CharacterSlice";

export default function Characters() {
    // original states replaced with redux store
    const { characters, info, pageNum, searchText, modalActive } = useSelector(
        (state) => state.characterReducer
    );
    const { setItems, setInfo, setPage, setSearch, setModal } =
        characterSlice.actions;
    const dispatch = useDispatch();

    useEffect(() => {
        apiCall.getCharacters(pageNum, searchText).then((response) => {
            dispatch(setItems(response.data.results));
            dispatch(setInfo(response.data.info));
        });
    }, [pageNum, searchText, setItems, setInfo, dispatch]);

    return (
        <div>
            {modalActive && <Modal setModal={setModal} />}

            <div className="row m-4">
                <SearchBar setSearch={setSearch} />
                {characters.map((item, index) => (
                    <div className="col m-3" key={index}>
                        <div
                            onClick={() => {
                                dispatch(setModal(true));
                                console.log(item)
                            }}
                            className="card border-dark"
                            style={{
                                width: "300px",
                                height: "420px",
                                cursor: "pointer",
                            }}
                        >
                            <div className="m-2">
                                <img
                                    className="card-img-top"
                                    src={item.image}
                                    alt={item.name}
                                ></img>
                                <div className="card-body justify-content-center text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-subtitle text-muted mt-2">
                                        Species: {item.species}
                                    </h5>
                                    <h5 className="card-subtitle text-muted mt-2">
                                        Status: {item.status}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Pagination info={info} setPage={setPage} pageNum={pageNum} />
            </div>
        </div>
    );
}
