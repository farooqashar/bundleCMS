/* -----------------Globals--------------- */
import React from "react";

/* -----------------MaterialUI--------------- */
import {Button,Container, Box} from "@material-ui/core";

/* -----------------Utils--------------- */
import { getDashboardTitle } from "./admin/utils.jsx";

/* -----------------Nextjs--------------- */
import Link from "next/link";
import Head from "next/head";

/* -----------------Page--------------- */
const Page = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

          <Box textAlign='center'>
      <Link href={{ pathname: "/admin" }}>


          <Button variant="contained" color="primary">
            Click Here To Go To Admin Section
          </Button>


      </Link>
                </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  const title = getDashboardTitle();
  return {
    props: { title }
  };
};

export default Page;
