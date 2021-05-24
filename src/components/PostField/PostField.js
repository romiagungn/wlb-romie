import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { styles } from "./styles";

const PostField = (props) => {
  const { classes, isEdit, onChange, value, onSubmit } = props;

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        className={classes.titleInput}
        onChange={onChange}
        value={value.title}
        disabled={isEdit}
      />
      <CKEditor
        name="body"
        editor={ClassicEditor}
        data={value.body}
        onReady={(editor) => {
          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              "500px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(_, editor) => {
          const data = editor.getData();
          onChange(undefined, { data });
        }}
      />
      <div className={classes.action}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles, { withTheme: true })(PostField);
