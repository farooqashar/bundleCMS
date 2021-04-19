/* -----------------Globals--------------- */
import React, { useState } from "react";

/* -----------------Child Components--------------- */
import BreadCrumbsPage from "..//components/Breadcrumbs.jsx";
import CustomAutocomplete from "..//components/CustomAutocomplete.jsx";
import CustomTextField from "..//components/textField.jsx";
import Header from "..//components/header.jsx";
import Footer from "..//components/footer.jsx";

/* -----------------Nextjs--------------- */
import Link from "next/link";
import Head from "next/head";

/* -----------------Yup--------------- */
import * as Yup from "yup";

/* -----------------Formik--------------- */
import { Formik, Form } from "formik";

/* -----------------MaterialUI--------------- */
import {
  makeStyles,
  Button,
  Container,
  Grid,
  Typography,
  FormControlLabel,
  Switch, 
  Box, 
  Paper, 
  Card, 
  CardHeader, 
  withStyles
} from "@material-ui/core";

/* -----------------Styles--------------- */
const styles = () => ({
  formMargins: {
    marginTop: 4,
    marginBottom: 4
  }
});

/* -----------------Component--------------- */
const BundlePlan = ({ title, id, interval, currency, prepopulated, plansTitle }) => {

  const [checkedStatus, setCheckedStatus] = useState({
    checkedA: true,
    checkedB: true
  });

  const formRequiredness = Yup.object().shape({
    planDuration: Yup.number().required("Required"),
    price: Yup.number().required("Required")
  });

  const handleChange = (event) => {
    setCheckedStatus({ ...checkedStatus, [event.target.name]: event.target.checked });
  };

  return (
    <>

      <Head>
        <title>{plansTitle}</title>
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
            path: `/admin/bundles/${id}/plans`,
            name: "Plan"
          }
        ]} variant={"Save Bundle Plan"} />

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

                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={checkedStatus.checkedA}
                            onChange={handleChange}
                            color="primary"
                            name="checkedA"
                            inputProps={{ "aria-label": "primary checkbox" }}
                          />
                        }
                        label="Trial"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={checkedStatus.checkedB}
                            onChange={handleChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ "aria-label": "primary checkbox" }}
                          />
                        }
                        label="Lifetime"
                      />
                    </Grid>

                    {checkedStatus.checkedA ? (
                      <>
                        <Grid item xs={12}>
                          <CustomAutocomplete
                            options={interval}
                            label="Trial Interval"
                          ></CustomAutocomplete>
                        </Grid>
                        <Grid item xs={12}>
                          <CustomTextField
                            placeholder = "i.e. 8"
                            name="planDuration"
                            label="Plan Duration"
                          />
                        </Grid>
                      </>
                    ) : (
                      <></>
                    )}
                    <Grid item xs={12}>
                      <CustomTextField placeholder = "i.e. 19.99" name="price" label="Price" />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomAutocomplete
                        options={currency}
                        label="Currency"
                      ></CustomAutocomplete>
                    </Grid>

                    {checkedStatus.checkedB ? (
                      <></>
                    ) : (
                      <>
                        <Grid item xs={12}>
                          <CustomAutocomplete
                            options={interval}
                            label="Plan Interval"
                          ></CustomAutocomplete>
                        </Grid>
                        <Grid item xs={12}>
                          <CustomTextField
                            placeholder = "i.e. 8"
                            name="planDuration"
                            label="Plan Duration"
                          />
                        </Grid>
                      </>
                    )}

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

export default withStyles(styles) (BundlePlan);
