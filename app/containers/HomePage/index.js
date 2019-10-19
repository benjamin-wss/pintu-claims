/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import {
  Container,
  Grid,
  Card,
  CardHeader,
  Box,
  CardContent,
  TextField,
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import messages from './messages';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="xl">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader
                subheader={
                  <Box fontWeight={'fontWeightMedium'}>
                    <FormattedMessage {...messages.header} />
                  </Box>
                }
              />
              <CardContent style={{ paddingTop: 0 }}>
                <Grid
                  container
                  direction="column"
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Formik>
                    {formikProps => {
                      const {
                        values,
                        errors,
                        touched,
                        setFieldValue,
                        setFieldTouched,
                      } = formikProps;

                      return (
                        <React.Fragment>
                          <Grid item xs={12}>
                            <TextField
                              required
                              label="Email"
                              placeholder="Enter email here"
                              margin="normal"
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              label="Password"
                              placeholder="Enter password here"
                              margin="normal"
                              type="password"
                              variant="outlined"
                            />
                          </Grid>
                        </React.Fragment>
                      );
                    }}
                  </Formik>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default HomePage;
