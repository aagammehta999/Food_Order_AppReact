import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCLose}></div>;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCLose={props.onCLose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
