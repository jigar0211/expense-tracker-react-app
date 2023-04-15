import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form' 
import List from './List/List' 

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subholder="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant='h5'>Total Balance $222</Typography>
          <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* InfoCard... */}
          try saying: Add Income for $100 for $100 in category Salary for monday
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Main;