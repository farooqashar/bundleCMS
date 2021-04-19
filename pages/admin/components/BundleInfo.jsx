/* -----------------Child Components--------------- */
import CustomAutocomplete from "..//components/CustomAutocomplete.jsx";
import CustomTextField from "..//components/textField.jsx";
import Header from "..//components/header.jsx";
import Footer from "..//components/Footer.jsx";

/* -----------------Yup--------------- */
import * as Yup from "yup";

/* -----------------Formik--------------- */
import { Formik, Form } from "formik";

/* -----------------Nextjs--------------- */
import Link from "next/link";
import Head from "next/head";

/* -----------------MaterialUI--------------- */
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Typography,
  IconButton, Box, Paper, Card, CardHeader, withStyles
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

/* -----------------Utils--------------- */
import {
  getTestimonials,
  getStudyContent,
  getFeatures,
  getAllCategories,
  getAllPublishers,
  getNextBundles
} from "..//utils.jsx";

/* -----------------Styles--------------- */
const styles = () => ({
  formMargins: {
    marginTop: 4,
    marginBottom: 4
  }
});

/* -----------------Component--------------- */
const BundleInfo = ({
  studyContent,
  testimonials,
  nextBundles,
  features,
  publishers,
  categories,
  id,
  bundles,
  prepopulated, 
  optionsTitle, 
  title
}) => {


  const formRequiredness = Yup.object().shape({
    name: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    description: Yup.string().required("Required")
  });

  return (
    <>

      <Head>
        <title>{optionsTitle}</title>
      </Head>


      <Container maxWidth="md">
      <Header breadcrumbs={[
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
          },
          {
            path: `/admin/bundles/${id}/info`,
            name: "Info"
          }
        ]} variant={"Save Bundle Info"} />

<Card>
  <CardHeader title = {"Basic Information"}>
  </CardHeader>
</Card>

<Paper>
      <Grid container>
        <Grid item xs={12}>

            <Box m={1.5}>              
              <Formik
                initialValues={{
                  ...prepopulated
                }}
                validationSchema={formRequiredness}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <CustomTextField placeholder = "i.e. USMLE Step 1 Flashcards" name="name" label="Name" />
                    </Grid>

                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={getAllPublishers()}
                        label="Publishers"
                      ></CustomAutocomplete>
                    </Grid>

                    <Grid item xs={12}>
                      <CustomAutocomplete
                        name = "categories"
                        options={getAllCategories()}
                        label="Categories"
                      ></CustomAutocomplete>
                    </Grid>

                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={getNextBundles()}
                        label="Next Bundles"
                      ></CustomAutocomplete>
                    </Grid>

                    <Grid item xs={12}>
                      <CustomTextField
                        placeholder = "i.e. You’ll find hundreds of questions that cover the content you’ll encounter on the actual shelf exam. The range of question topics covers the clerkship's core competencies and each question includes high yield explanations of both correct and incorrect answers."
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTextField placeholder = "i.e.Your essential rapid-fire study companion and high-yield resource for the surgery shelf and clerkship" name="tagline" label="Tag Line" />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={getFeatures()}
                        label="Features"
                      ></CustomAutocomplete>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={getStudyContent()}
                        label="Study Content"
                      ></CustomAutocomplete>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={getTestimonials()}
                        label="Testimonials"
                      ></CustomAutocomplete>
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
              <Footer dialogTitle = {"Discard Changes?"} cancelTitle = {"Go Back"} discardTitle = {"Discard"} variant = {"Discard Changes"}></Footer>
            </Box>

        </Grid>
      </Grid>
      </Paper>
      </Container>
    </>
  );
};

export default withStyles(styles) (BundleInfo);
