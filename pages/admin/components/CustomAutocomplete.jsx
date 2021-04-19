/* -----------------Globals--------------- */
import React, { useState } from "react";

/* -----------------MaterialUI--------------- */
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const filter = createFilterOptions();

/* -----------------Component--------------- */
const CustomAutocomplete = ({ options, label }) => {
  const [value, setValue] = useState(null);
  const [newValues, setNewValues] = useState(options);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              name: newValue
            });
          } else if (newValue && newValue.inputValue) {
            setValue({
              name: newValue.inputValue
            });
            const updatedValues = [...newValues];
            updatedValues.push({
              name: newValue.inputValue
            });
            setNewValues(updatedValues);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(newValues, params) => {
          const filtered = filter(newValues, params);
          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`
            });
          }
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={newValues}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        renderOption={(option) => option.name}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} fullWidth label={label} variant="outlined" />
        )}
      />
    </div>
  );
};

export default CustomAutocomplete;
