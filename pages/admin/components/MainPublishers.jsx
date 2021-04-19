/* -----------------MaterialUI--------------- */
import { Paper, Container } from "@material-ui/core";

/* -----------------Child components--------------- */
import Header from "..//components/header.jsx";
import ListTable from "..//components/ListTable.jsx";


/* -----------------Nextjs--------------- */
import Head from "next/head";

/* -----------------Constants--------------- */
import { publisherBreadcrumbs } from "..//constants.jsx";

/* -----------------Componennt--------------- */
const MainPublishers = ({ publishers, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="md">
        <Header breadcrumbs={publisherBreadcrumbs} variant={"New Publisher"} />
        <Paper>
          <ListTable baseURL={"/admin/publishers/"} data={publishers} />
        </Paper>
      </Container>
    </>
  );
};

export default MainPublishers;
