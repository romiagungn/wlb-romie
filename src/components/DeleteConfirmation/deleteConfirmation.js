import React from "react";
import { withStyles, Modal, Button } from "@material-ui/core";

import { styles } from "./styles";

const DeleteConfirmation = (props) => {
  const { classes, open, handleClose, onDelete } = props;

  const body = (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={classes.paper}
    >
      <h2 id="modal-confirmation-title">Delete</h2>
      <p id="modal-confirmation-description">
        Are you sure you want to delete this post?
      </p>
      <div className={classes.actionWrapper}>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-confirmation-title"
        aria-describedby="modal-confirmation-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default withStyles(styles, { withTeme: true })(DeleteConfirmation);
