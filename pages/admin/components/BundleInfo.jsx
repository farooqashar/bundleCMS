// @flow

/* -----------------Globals--------------- */
import React, { useState } from 'react';

/* -----------------Child Components--------------- */
import CustomMultiSelect from './CustomMultiSelect';
import CustomTextField from './textField';
import Header from './header';
import AlertDialog from '../../common/dialogs/AlertDialog';
import ImagePickerDialog from '../../create/ImagePickerDialog';

/* -----------------Formik--------------- */
import { Formik, Form } from 'formik';

/* -----------------Nextjs--------------- */
import Head from 'next/head';

/* -----------------MaterialUI--------------- */
import {
  Container,
  Grid,
  Box,
  Paper,
  Card,
  CardHeader,
  withStyles,
  ListSubheader,
  List,
  ListItem,
  TextField,
  Chip,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CloudUpload } from '@material-ui/icons';

/* -----------------Utils--------------- */
import {
  getTestimonials,
  getStudyContent,
  getFeatures,
  getAllCategories,
  getAllPublishers,
  getNextBundles,
  bundleInfoformRequiredness,
} from './utils';

/* -----------------Styles--------------- */
const styles = theme => ({
  formMargins: {
    marginTop: 4,
    marginBottom: 4,
  },
  container: {
    paddingBottom: theme.spacing(12),
  },
  errorText: {
    color: theme.palette.error.main,
  },
  Card: {
    paddingBottom: 10,
  },
});

/* -----------------Types--------------- */
type Props = {
  prepopulated: *,
  optionsTitle: string,
  title: string,
  cancelLink: string,
  discardLink: string,
  breadcrumbs: [],
  link: string,
  dialogTitle: string,
  cancelTitle: string,
  discardTitle: string,
  variant: string,
  id: string
}

/* -----------------Component--------------- */
const BundleInfo = (props: Props) => {
  const {
    prepopulated,
    optionsTitle,
    title,
    breadcrumbs,
    link,
    id,
  } = props;

  const [name, setName] = useState('');
  const [categories, setCategories] = useState(getAllCategories());
  const [features, setFeatures] = useState(getFeatures());
  const [publishers] = useState(getAllPublishers());

  const [dialogVisible, setDialogVisible] = useState(false);
  const [imagePickerVisibility, setImagePickerVisibility] = useState(false);

  const onChangeTags = (event) => {
    const updatedValues = [...categories];

    if (event.target.value === undefined) {
      console.log();
    } else {
      updatedValues.push({
        name: event.target.value,
        // Random Unique ID is needed
      });
      setCategories(updatedValues);
    }
  };

  const onChangeFeatureTags = (event) => {
    const updatedValues = [...features];

    if (event.target.value === undefined) {
      console.log();
    } else {
      updatedValues.push({
        name: event.target.value,
        // Random Unique ID is needed
      });
      setFeatures(updatedValues);
    }
  };

  return (
    <>
      <Head>
        <title>{optionsTitle}</title>
      </Head>

      <Container maxWidth="md">
        <Header
          breadcrumbs={breadcrumbs}
          variant="Save"
          link={link}
        />
        <Box m={2} mb={6}>
          <Card>
            <CardHeader title={`Bundle ${id}`} />
            <Paper>
              <Grid container>
                <Grid item xs={12}>
                  <Box m={2} mb={2}>
                    <Formik
                      initialValues={{
                        ...prepopulated,
                      }}
                      validationSchema={bundleInfoformRequiredness}
                    >
                      <Form>

                        <List>

                          <Grid container spacing={2} direction="column">
                            <ListSubheader>Data</ListSubheader>
                            <ListItem>
                              <Grid item xs={12}>
                                <TextField
                                  placeholder="e.g. USMLE Step 1 Flashcards"
                                  defaultValue={name}
                                  label="Name"
                                  onChange={(e) => setName(e.target.value)}
                                  variant="outlined"
                                  fullWidth
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <CustomTextField
                                  placeholder="i.e. You’ll find hundreds of questions that cover the content you’ll encounter on the actual shelf exam. The range of question topics covers the clerkship's core competencies and each question includes high yield explanations of both correct and incorrect answers."
                                  name="description"
                                  label="Description"
                                  multiline
                                  rows={4}
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>

                              <Grid item xs={12}>
                                <CustomTextField
                                  placeholder="i.e.Your essential rapid-fire study companion and high-yield resource for the surgery shelf and clerkship"
                                  name="tagline"
                                  label="Tag Line"
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <Button
                                  variant="contained"
                                  onClick={() => setImagePickerVisibility(!imagePickerVisibility)}
                                >
                                  <CloudUpload />
                                  Upload Logo
                                </Button>
                                <ImagePickerDialog
                                  currentFactIndex={2}
                                  currentTermIndex={1}
                                  studySetId="studySetId"
                                  contentItemId="contentItemId1"
                                  itemType="New"
                                  visible={imagePickerVisibility}
                                  callback={() => setImagePickerVisibility(!imagePickerVisibility)}
                                />
                              </Grid>
                            </ListItem>
                            <ListItem>
                              <Grid item xs={12}>
                                <Autocomplete
                                  multiple
                                  fullWidth
                                  id="features"
                                  options={features.map((option) => option.name)}
                                  freeSolo
                                  renderTags={(tag, getTagProps) => tag.map((option, index) => (
                                    <>
                                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    </>
                                  ))
        }
                                  onChange={(event) => onChangeFeatureTags(event)}
                                  renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Features" placeholder="Feature" />
                                  )}
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <CustomMultiSelect
                                  options={getTestimonials()}
                                  label="Testimonials"
                                  dialogLabel="Testimonial"
                                  mutable
                                />
                              </Grid>
                            </ListItem>

                            <ListSubheader>Meta Data</ListSubheader>
                            <ListItem>
                              <Grid item xs={12}>
                                <Autocomplete
                                  id="publishers"
                                  options={publishers}
                                  getOptionLabel={(option) => option.name}
                                  renderInput={(params) => <TextField {...params} label="Publisher" variant="outlined" />}
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <Autocomplete
                                  multiple
                                  fullWidth
                                  id="tags"
                                  options={categories.map((option) => option.name)}
                                  freeSolo
                                  renderTags={(tag, getTagProps) => tag.map((option, index) => (
                                    <>
                                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    </>
                                  ))
        }
                                  onChange={(event) => onChangeTags(event)}
                                  renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Categories" placeholder="Category" />
                                  )}
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <Autocomplete
                                  id="next-bundles"
                                  options={getNextBundles()}
                                  getOptionLabel={(option) => option.name}
                                  renderInput={(params) => <TextField {...params} label="Next Bundle" variant="outlined" />}
                                />
                              </Grid>
                            </ListItem>

                            <ListItem>
                              <Grid item xs={12}>
                                <Autocomplete
                                  id="study-content"
                                  options={getStudyContent()}
                                  getOptionLabel={(option) => option.name}
                                  renderInput={(params) => <TextField {...params} label="Study Content" variant="outlined" />}
                                />
                              </Grid>
                            </ListItem>
                          </Grid>
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

                </Grid>
              </Grid>
            </Paper>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default withStyles(styles)(BundleInfo);
