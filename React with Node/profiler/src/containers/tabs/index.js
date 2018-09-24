import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GoogleMarker from '../location/markers';
import 'react-tabs/style/react-tabs.css';

import { Typeahead } from 'react-typeahead';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab disabled="true" >Title 2</Tab>
      <Tab>Google Map</Tab>
    </TabList>

    <TabPanel>
      <div>
      <h2>Search</h2>
            <Typeahead
            options={['John', 'Paul', 'George', 'Ringo']}
            maxVisible={2}
        />
      </div>
      
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <GoogleMarker />
    </TabPanel>
  </Tabs>
);