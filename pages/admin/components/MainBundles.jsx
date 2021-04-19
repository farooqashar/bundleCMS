/* -----------------MaterialUI--------------- */
import { Paper, Container } from "@material-ui/core";

/* -----------------Child components--------------- */
import Header from "..//components/header.jsx";
import ListTable from "..//components/ListTable.jsx";

/* -----------------Nextjs--------------- */
import Head from "next/head";

/* -----------------Constants--------------- */
import { bundleBreadcrumbs } from "..//constants.jsx";

/* -----------------Componennt--------------- */
const MainBundles = ({ bundles, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="md">
        <Header breadcrumbs={bundleBreadcrumbs} variant="New Bundle" />
        <Paper>
          <ListTable baseURL={"/admin/bundles/"} data={bundles} />
        </Paper>
      </Container>
    </>
  );
};

export default MainBundles;
