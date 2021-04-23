import React from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@material-ui/core";

import { FiSearch } from "react-icons/fi";

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
              <FiSearch size={24} color="rgba(0, 0, 0, 0.54)" />
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
