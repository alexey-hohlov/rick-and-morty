import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

export default function Pagination({ info, setPage, pageNum }) {
    const dispatch = useDispatch();

    return (
        <ReactPaginate
            className="pagination justify-content-center my-3 gap-3"
            initialPage={pageNum}
            nextLabel="Next"
            previousLabel="Prev"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            pageCount={info.pages}
            onPageChange={(data) => {
                dispatch(setPage(data.selected + 1));
            }}
        />
    );
}
