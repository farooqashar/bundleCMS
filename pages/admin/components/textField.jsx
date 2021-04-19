/* -----------------MaterialUI--------------- */
import { TextField } from "@material-ui/core";

/* -----------------Formik--------------- */
import { useField } from "formik";

/* -----------------Component--------------- */
const CustomTextField = ({ placeholder, name, ...otherProps }) => {
  const [field, meta, helpers] = useField(name);

  const customProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined"
  };

  if (meta && meta.touched && meta.error) {
    customProps.helperText = meta.error;
    customProps.error = true;
  }

  return <TextField placeholder= {placeholder} {...customProps} />;
};

export default CustomTextField;
