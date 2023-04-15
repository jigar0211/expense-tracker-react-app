import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyle from './styles';

const Details = ({ title }) => {
  const classes = useStyle();
  return (
    <div>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">50$</Typography>
          {/* <Doughnut data="DATA" /> */}
        </CardContent>
      </Card>
    </div>
  )
}

export default Details;