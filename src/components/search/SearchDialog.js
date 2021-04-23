import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import SearchField from "./SearchField";

function SearchDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Search Post</DialogTitle>
      <DialogContent>
        <SearchField autoFocus={true} />
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
}

export default SearchDialog;
