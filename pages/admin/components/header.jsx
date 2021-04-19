/* -----------------Globals--------------- */
import React, { useState } from "react";

/* -----------------MaterialUI--------------- */
import { Button, Box } from "@material-ui/core";

/* -----------------Child components--------------- */
import BreadCrumbsPage from "..//components/Breadcrumbs.jsx";

/* -----------------Component--------------- */
const Header = ({ variant, breadcrumbs }) => {
  const [changeStatus, setChangeStatus] = useState(true);

  const saveData = () => {
    setChangeStatus(!changeStatus);
  };
  return (
    <Box
      py={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <BreadCrumbsPage breadcrumbs={breadcrumbs}> </BreadCrumbsPage>
      {changeStatus ? (
        <Button color="primary" variant="contained" onClick={saveData}>
          {variant}
        </Button>
      ) : null}
    </Box>
  );
};

export default Header;
