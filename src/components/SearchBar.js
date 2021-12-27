import { useDispatch } from "react-redux";

export default function SearchBar({ setSearch }) {
    const dispatch = useDispatch();

    return (
        <form className="d-flex justify-content-center">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Start typing to search..."
                aria-label="Search"
                onChange={(event) => {
                    dispatch(setSearch(event.target.value));
                }}
            ></input>
        </form>
    );
}
