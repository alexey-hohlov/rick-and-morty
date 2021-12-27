import "./style.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

//Custom styles to adapt bootstrap modal
const contentStyles = {
    width: "700px",
};

//creating portal to place modal over other components in DOM
function Modal({ setModal }) {
    const dispatch = useDispatch();

    return ReactDOM.createPortal(
        <div
            className="modal__overlay"
            onClick={() => dispatch(setModal(false))}
        >
            <div className="modal-content" style={contentStyles}>
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">Footer</div>
            </div>
        </div>,

        document.querySelector("#modal__root")
    );
}

export default Modal;
