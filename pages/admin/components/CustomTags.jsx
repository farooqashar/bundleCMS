// @flow

// WIP

/* -----------------Globals--------------- */
import React, { useState, useEffect } from 'react';

/* -----------------MaterialUI--------------- */
import Autocomplete, {
} from '@material-ui/lab/Autocomplete';
import { TextField, Paper, Chip } from '@material-ui/core/';

/* -----------------Child Components--------------- */
import DataTable from './dataTable';

/* -----------------Types--------------- */
type Props = {
  options: [],
  dialogLabel: string,
  label: string
}

/* -----------------Component--------------- */
const CustomTags = (props: Props) => {
  const { options, label, dialogLabel } = props;

  const [newValues, setNewValues] = useState([]);
  const [, setDataValues] = useState([]);

  const onChangeTags = (event) => {
    const updatedValues = [...newValues];
    // console.log('event.target.value');
    // console.log(event.target);
    // console.log(event.target.value);

    if (event.target.value === undefined) {
      console.log();
    } else {
      updatedValues.push({
        name: event.target.value,
        // Random Unique ID is needed
        id: 0,
      });
      setNewValues(updatedValues);
    }
  };

  useEffect(() => {
    const newest = [...newValues];
    setDataValues(newest);
  }, [newValues]);

  return (
    <>
      <Autocomplete
        multiple
        id="tags"
        options={options.map((option) => option.name)}
        freeSolo
        renderTags={(tag, getTagProps) => tag.map((option, index) => (
          <>
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          </>
        ))
        }
        onChange={(event) => onChangeTags(event)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label={label} placeholder={label} />
        )}
      />
      <Paper>
        <DataTable label={dialogLabel} data={newValues} />
      </Paper>
    </>
  );
};

export default CustomTags;
