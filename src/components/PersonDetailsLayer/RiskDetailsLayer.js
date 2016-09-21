// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import TaskIcon from 'grommet/components/icons/base/Task';
import HistoryIcon from 'grommet/components/icons/base/History';
import DocumentIcon from 'grommet/components/icons/base/Document';
import RiskIcon from 'grommet/components/icons/base/Risk';
import GroupIcon from 'grommet/components/icons/base/Group';

const RiskDetailsLayer = ({
  riskDetails: {
    assessments
  }
}) => {
    const {
      overallRiskScore,
      historyOfHousingAndHomelessnessScore,
      preSurveyScore,
      risksScore,
      socializingAndDailyFunctionsScore,
      wellnessScore
    } = assessments[0];
    return (
      <Layer>
        <Box justify="center" align="center">
          <Heading tag="h5">Risk Score</Heading>
          <Meter
            max={17}
            min={0}
            type="arc"
            value={overallRiskScore}
            thresholds={[
              {value: 5, label: 'Ok', colorIndex: 'ok'},
              {value: 10, label: 'Warning', colorIndex: 'warning'},
              {value: 15, label: 'Critical', colorIndex: 'critical'},
            ]}/>
        </Box>
        <Box
          direction="row"
          justify="between">
          <Value
            label="Pre-Survey"
            value={preSurveyScore}
            icon={<DocumentIcon />} />
          <Value
            label="History"
            value={historyOfHousingAndHomelessnessScore}
            icon={<HistoryIcon />} />
        </Box>
        <Box
          direction="row"
          justify="between">
          <Value
            label="Risks"
            value={risksScore}
            icon={<RiskIcon />} />
          <Value
            label="Social & Daily"
            value={socializingAndDailyFunctionsScore}
            icon={<GroupIcon />} />
          <Value
            label="Wellness"
            value={wellnessScore}
            icon={<TaskIcon />} />
        </Box>
      </Layer>
    );
  };

export default RiskDetailsLayer;
