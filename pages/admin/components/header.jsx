// @flow

/* -----------------Globals--------------- */
import React, { useState } from 'react';

/* -----------------MaterialUI--------------- */
import { Button, Box, CircularProgress } from '@material-ui/core';

/* -----------------Child components--------------- */
import Breadcrumbs from '../../common/Breadcrumbs';

/* -----------------Nextjs--------------- */
import Link from 'next/link';

/* -----------------Types--------------- */
type Props = {
  variant: string,
  link: string,
  breadcrumbs: *,
}

/* -----------------Component--------------- */
const Header = (props: Props) => {
  const { variant, breadcrumbs, link } = props;
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
      <Breadcrumbs breadcrumbValues={breadcrumbs} />
      {changeStatus ? (
        <Link href={link}>
          <Button color="primary" variant="contained" onClick={saveData}>
            {variant}
          </Button>
        </Link>
      )
        : (
          <CircularProgress
            color="secondary"
            size={35}
          />
        )
        }
    </Box>
  );
};

export default Header;
