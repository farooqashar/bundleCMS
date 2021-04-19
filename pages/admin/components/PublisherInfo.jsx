/* -----------------Globals--------------- */
import React from "react";

/* -----------------Child components--------------- */
import BreadCrumbsPage from "..//components/Breadcrumbs.jsx";
import CustomTextField from "..//components/textField.jsx";
import Header from "..//components/header.jsx";
import Footer from "..//components/footer.jsx";

/* -----------------Nextjs--------------- */
import Head from "next/head";

/* -----------------Yup--------------- */
import * as Yup from "yup";

/* -----------------Formik--------------- */
import { Formik, Form } from "formik";

/* -----------------MaterialUI--------------- */
import {
  Button,
  IconButton,
  makeStyles,
  Container,
  Grid,
  Paper, 
  Card, 
  CardHeader, 
  Box, 
  withStyles
} from "@material-ui/core/";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

/* -----------------Nextjs--------------- */
import Link from "next/link";

/* -----------------Styles--------------- */
const styles = () => ({
  formMargins: {
    marginTop: 4,
    marginBottom: 4
  }
});

/* -----------------Component--------------- */
const PublisherInfo = ({ id, prepopulated, managePublishertitle, title }) => {
  const formRequiredness = Yup.object().shape({
    name: Yup.string().required("Required"),
    website: Yup.string().required("Required"),
    description: Yup.string().required("Required")
  });

  return (
    <>
      <Head>
        <title>{managePublishertitle}</title>
      </Head>

      <Container maxWidth="md">
        
      <Header breadcrumbs={[
          {
            path: "/admin",
            name: "Admin page"
          },
          {
            path: "/admin/publishers",
            name: "Publishers"
          },
          {
            path: `/admin/publishers/${id}`,
            name: title
          }
        ]} variant={"Save Publisher Info"} />

<Card>
  <CardHeader title = {"Basic Information"}>
  </CardHeader>
</Card>

<Paper>

      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md">
          <Box m={1}>
              <Formik
                initialValues={{
                  ...prepopulated
                }}
                validationSchema={formRequiredness}
              >
                <Form>
                  <Grid container spacing={2}>

                    <Grid item xs={12}>
                      <CustomTextField placeholder = "i.e. Memorang" name="name" label="Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <CustomTextField placeholder = "i.e. https://memorang.com/" name="website" label="Website" />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTextField
                        name="description"
                        label="Description"
                        placeholder = "i.e. McGraw Hill is an American learning company and one of the big three educational publishers that provides customized educational content, software, and services for pre-K through postgraduate education."
                        multiline
                        rows={4}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <b1>Upload Avatar</b1>
                      <IconButton>
                        <CloudUploadIcon />
                      </IconButton>
                    </Grid>

                    <Grid item xs={12}>
                      <b1>Upload Logo</b1>
                      <IconButton>
                        <CloudUploadIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
              </Box>
          <Footer dialogTitle = {"Delete Publisher?"} cancelTitle = {"Cancel"} discardTitle = {"Delete"} variant = {"Delete"}></Footer>
          </Container>
        </Grid>

      </Grid>

      </Paper>

      </Container>
    </>
  );
};

export default withStyles(styles) (PublisherInfo);
