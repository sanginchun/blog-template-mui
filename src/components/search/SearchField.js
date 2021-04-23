import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const propTypes = { autoFocus: PropTypes.bool };

const defaultProps = { autoFocus: false };

function SearchField({ autoFocus }) {
  return (
    <form noValidate autoComplete="off" autoCorrect="off">
      <TextField
        fullWidth
        autoFocus={autoFocus}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

export default SearchField;
