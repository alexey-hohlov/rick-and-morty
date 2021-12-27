import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../app/API";
import { season1, season2, season3, season4, season5 } from "../assets/images";
import { Pagination } from "../components";
import { SearchBar } from "../components";
import { episodeSlice } from "../store/reducers/EpisodeSlice";

export default function Episodes() {
    const { episodes, info, pageNum, searchText } = useSelector(
        (state) => state.episodeReducer
    );
    const { setItems, setInfo, setPage, setSearch } = episodeSlice.actions;
    const dispatch = useDispatch();

    useEffect(() => {
        apiCall.getEpisodes(pageNum, searchText).then((response) => {
            dispatch(setItems(response.data.results));
            dispatch(setInfo(response.data.info));
        });
    }, [pageNum, searchText, dispatch, setInfo, setItems]);

    const handleTitle = (season) => {
        switch (season) {
            case "1":
                return season1;
            case "2":
                return season2;
            case "3":
                return season3;
            case "4":
                return season4;
            case "5":
                return season5;
            default:
                return "";
        }
    };

    return (
        <div className="row m-4">
            <SearchBar setSearch={setSearch} />
            {episodes.map((item, index) => (
                <div className="col m-3" key={index}>
                    <div
                        className="card border-success"
                        style={{ width: "300px", height: "650px" }}
                    >
                        <div className="m-2">
                            <img
                                className="card-img-top img-fluid"
                                src={handleTitle(item.episode.slice(2, 3))}
                                alt={item.name}
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h5 className="card-subtitle text-muted mt-4">
                                    {`Season: ${item.episode.slice(2, 3)}`}
                                </h5>
                                <h5 className="card-subtitle text-muted mt-2">
                                    {`Episode: ${item.episode.slice(4, 7)}`}
                                </h5>
                                <h5 className="card-subtitle text-muted mt-2">
                                    Release date: {item.air_date}
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
