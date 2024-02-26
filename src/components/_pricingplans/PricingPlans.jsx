import React, { useState } from 'react';
import { Box, Button, Card, Typography } from "@material-ui/core";
import { Navbar } from "../../pages";
import { accordianData, pricingPlans } from "../../shared/data";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "./style.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddCircleIcon  sx={{ fontSize: '1.3rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  padding: '8px',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    marginLeft: ".5rem"
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));


const PricingPlans = () => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <div className="nav">
        <Navbar />
      </div>

      <div className="plan-div">
        <Typography className="plan-heading" variant="h5">
          Pricing Plans
        </Typography>
        <div className="plan-child-div">
          {pricingPlans.map((data) => (
            <Card key={data.id} className="plan-card">
              <Typography component={"p"}>{data.plan}</Typography>
              <hr />
              <Typography variant="h5">{data.price}</Typography>
              <Typography component={"p"}>{data.heading}</Typography>
              <hr />
              <Typography component={"p"}>{data.data1}</Typography>
              <hr />
              <Typography component={"p"}>{data.data2}</Typography>
              <hr />
              <Typography component={"p"}>{data.data3}</Typography>
              <hr />
              <Typography component={"p"}>{data.data4}</Typography>
              <hr />
              <Button>Order Now</Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="plan-second-div">
        <hr style={{ color: "#DEDFDF" }} />
        <Typography className="plan-second-text" component={"p"}>
          HelloThali Subscription
          <span style={{ color: "#0f5132" }}> Terms & condition</span>
        </Typography>
        <hr style={{ color: "#DEDFDF" }} />
      </div>

      <div className="last-plan-div">
        <Typography className="last-plan-div-texth5" variant="h5">
          Questions ?
          <div style={{ marginTop: "1rem"}}>
            {
              accordianData.map((data) => (
               <div key={data.id}>
                 <Accordion  expanded={expanded === `${data.panel}`} onChange={handleChange(() => {data.panel})}>
                <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
                  <Typography className='accordian_typo_first' component={"p"}>{data.data}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className='accordian_typo_second' component={"p"}>
                     {data.desc}
                  </Typography>
                </AccordionDetails>
               </Accordion>
              </div>
              ))
            }
          </div>
        </Typography>
      </div>

      <div className='plan-contactus'></div>
    </Box>
  );
};

export default PricingPlans;
