import React from "react";
import "./ModalDetail.scss";
function ModalDetail(props) {
  function handleCloseTrailer() {
    props.handleClose(false);
  }
  return (
    <div
      className="modal modal--fixed fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg w-100 modal-dialog--fixed"
        role="document"
      >
        <div className="modal-content modal-content--fixed">
          <div className="modal-body modal-body--fixed">
            <button
              onClick={handleCloseTrailer}
              type="button"
              className="btn_close close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img src="../../../images/close.png" alt="close" />
            </button>
            <iframe
              title="myFrameId"
              width="100%"
              height={485}
              src={`${props.trailer}`}
              frameBorder={0}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetail;
