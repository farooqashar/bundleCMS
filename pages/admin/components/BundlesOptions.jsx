/* -----------------Globals--------------- */
import React from "react";

/* -----------------Child Components--------------- */
import BreadCrumbsPage from "..//components/Breadcrumbs.jsx";
import Header from "..//components/header.jsx";

/* -----------------Nextjs--------------- */
import Link from "next/link";
import Head from "next/head";

/* -----------------MaterialUI--------------- */
import { Button,Container, Box } from "@material-ui/core/";

/* -----------------Component--------------- */
const BundlesOptions = ({ id, title, optionsTitle}) => {

  return (
    <>
      <Head>
        <title>{optionsTitle}</title>
      </Head>

      <Box alignText = "center" m={5}>

        <Container maxWidth="md">
        <BreadCrumbsPage
          breadcrumbs={[
            {
              path: "/admin",
              name: "Admin page"
            },
            {
              path: "/admin/bundles",
              name: "Bundles"
            },
            {
              path: `/admin/bundles/${id}`,
              name: title
            }
          ]}
        ></BreadCrumbsPage>
        </Container>

        <Link href={{ pathname: `/admin/bundles/${id}/info` }}>
          <center>
            <Button variant="contained" color="primary">
              Manage Bundle Info
            </Button>
          </center>
        </Link>

        <br></br>

        <Link href={{ pathname: `/admin/bundles/${id}/plans` }}>
          <center>
            <Button variant="contained" color="primary">
              Manage Bundle Plans
            </Button>
          </center>
        </Link>
       
      </Box>
    </>
  );
};

export default BundlesOptions;
