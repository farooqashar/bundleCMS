// @flow

/* -----------------Globals--------------- */
import React, { useState } from 'react';

/* -----------------Child Components--------------- */
import Header from './header';
import AlertDialog from '../../common/dialogs/AlertDialog';

/* -----------------Nextjs--------------- */
import Head from 'next/head';

/* -----------------Yup--------------- */
import * as Yup from 'yup';

/* -----------------Formik--------------- */
import { Formik, Form } from 'formik';

/* -----------------MaterialUI--------------- */
import {
  Container,
  Grid,
  FormControlLabel,
  Box,
  Paper,
  Card,
  CardHeader,
  withStyles,
  ListSubheader,
  List,
  ListItem,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  TextField,
  Button,
} from '@material-ui/core';

/* -----------------Styles--------------- */
const styles = () => ({
  formMargins: {
    marginTop: 4,
    marginBottom: 4,
  },
});

/* -----------------Types--------------- */
type Props = {
  title: string,
  id: number,
  plansTitle: string,
  bundleID: number,
  plan: *
}

/* -----------------Component--------------- */
const BundlePlan = (props: Props) => {
  const {
    title,
    id,
    plansTitle,
    bundleID,
    plan,
  } = props;

  const [planDuration, setPlanDuration] = useState(plan.duration);
  const [price, setPrice] = useState(plan.price);
  const [planInterval, setPlanInterval] = useState(plan.interval);
  const [lifetime, setLifetime] = useState(false);
  const [currencyValue, setCurrencyValue] = useState('USD');
  const [trial, setTrial] = useState(true);
  const [trialInterval, setTrialInterval] = useState(plan.trialInterval);
  const [trialDuration, setTrialDuration] = useState(plan.trialDuration);
  const [dialogVisible, setDialogVisible] = useState(false);
  const formRequiredness = Yup.object().shape({
    planDuration: Yup.number().required('Required'),
    trialDuration: Yup.number().required('Required'),
    price: Yup.number().required('Required'),
  });

  return (
    <>
      <Head>
        <title>{plansTitle}</title>
      </Head>

      <Container maxWidth="md">
        <Header
          breadcrumbs={[
            {
              link: '/admin',
              title: 'Admin page',
            },
            {
              link: '/admin/bundles',
              title: 'Bundles',
            },
            {
              link: `/admin/bundles/${bundleID}`,
              title,
            },
            {
              link: `/admin/bundles/${bundleID}/plans`,
              title: 'Plans',
            },
          ]}
          variant="Save"
          link={`/admin/bundles/${bundleID}/plans`}
        />

        <Card>
          <CardHeader title={`Plan ${id}`} />
          <Paper>
            <Box m={1.5}>
              <Formik
                validationSchema={formRequiredness}
              >
                <Form>

                  <List>
                    <ListSubheader>Plan Duration</ListSubheader>
                    <ListItem>
                      <Grid container spacing={2} direction="row">
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={(
                              <Checkbox
                                checked={lifetime}
                                onChange={() => setLifetime(!lifetime)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                              />
)}
                            label="Lifetime"
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                    {lifetime ? (
                      null
                    ) : (
                      <>
                        <ListItem>
                          <Grid container spacing={2} direction="row">
                            <Grid item xs={6}>
                              <TextField
                                placeholder="e.g. 3"
                                name="planDuration"
                                label="Duration"
                                value={planDuration}
                                onChange={(e) => setPlanDuration(e.target.value)}
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <FormControl fullWidth="true" variant="outlined">
                                <InputLabel id="interval">Interval</InputLabel>
                                <Select
                                  labelId="interval"
                                  label="Interval"
                                  id="interval"
                                  value={planInterval}
                                  onChange={(event) => setPlanInterval(event.target.value)}
                                >
                                  <MenuItem value="Months">Months</MenuItem>
                                  <MenuItem value="Year">Years</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>

                        </ListItem>
                      </>
                    ) }

                    <ListSubheader>Pricing</ListSubheader>
                    <ListItem>
                      <Grid container spacing={2} direction="row">
                        <Grid item xs={6}>
                          <TextField
                            placeholder="e.g. $19.99"
                            name="price"
                            label="Amount"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            variant="outlined"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth="true" variant="outlined">
                            <InputLabel id="currency">Currency</InputLabel>
                            <Select
                              labelId="currency"
                              label="Currency"
                              id="currency"
                              value={currencyValue}
                              onChange={(event) => setCurrencyValue(event.target.value)}
                            >
                              <MenuItem value="USD">USD</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListSubheader>Trial</ListSubheader>
                    <ListItem>
                      <Grid container spacing={2} direction="row">
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={(
                              <Checkbox
                                checked={trial}
                                onChange={() => setTrial(!trial)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                              />
)}
                            label="Enabled"
                          />
                        </Grid>
                      </Grid>
                    </ListItem>
                    {trial ? (
                      <>
                        <ListItem>
                          <Grid container spacing={2} direction="row">
                            <Grid item xs={6}>
                              <TextField
                                placeholder="e.g. 7"
                                name="trialDuration"
                                label="Duration"
                                value={trialDuration}
                                onChange={(e) => setTrialDuration(e.target.value)}
                                variant="outlined"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={6}>
                              <FormControl fullWidth="true" variant="outlined">
                                <InputLabel id="trial-interval">Interval</InputLabel>
                                <Select
                                  labelId="trial-interval"
                                  label="Interval"
                                  id="trial-interval"
                                  value={trialInterval}
                                  onChange={(event) => setTrialInterval(event.target.value)}
                                >
                                  <MenuItem value="Days">Days</MenuItem>
                                  <MenuItem value="Weeks">Weeks</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </>
                    )
                      : (
                        null
                      ) }

                  </List>

                </Form>
              </Formik>
              <Button color="error" variant="contained" onClick={() => setDialogVisible(true)}>Discard</Button>
              <AlertDialog
                config={{
                  title: 'Discard?',
                  message: '',
                  positiveButtonText: 'Discard',
                  negativeButtonText: 'Cancel',
                  onButtonPressed: setDialogVisible,
                }}
                visible={dialogVisible}
              />
            </Box>
          </Paper>
        </Card>
      </Container>
    </>
  );
};

export default withStyles(styles)(BundlePlan);
