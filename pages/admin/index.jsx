/* -----------------Globals--------------- */
import React from "react";

/* -----------------Nextjs--------------- */
import Link from "next/link";
import Head from "next/head";

/* -----------------MaterialUI--------------- */
import { Button, Typography, Box } from "@material-ui/core/";

/* -----------------Utils--------------- */
import { getAdminPageTitle } from "./utils.jsx";

/* -----------------Page--------------- */
const Page = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

        <Box width="100%" textAlign='center' m ="auto">

        <Typography variant="h4">
          Admin Page
        </Typography>

        <Link href={{ pathname: "/admin/publishers" }}>
            <Button variant="contained" color="primary">
              Manage Publisher Info
            </Button>
        </Link>

        <Link href={{ pathname: "/admin/bundles" }}>
            <Button variant="contained" color="primary">
              Manage Bundles
            </Button>
        </Link>
      </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  const title = getAdminPageTitle();
  return {
    props: { title }
  };
};

export default Page;
