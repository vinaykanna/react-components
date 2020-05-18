import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Note from './Note';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CategoryTabs({ notes }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'>
        <Tab style={{ color: 'white' }} label='All Notes' {...a11yProps(0)} />
        <Tab style={{ color: 'white' }} label='Personal' {...a11yProps(1)} />
        <Tab style={{ color: 'white' }} label='Office' {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {notes.map((item, index) => (
          <Note item={item} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {notes
          .filter((item) => item.category === 'personal')
          .map((note, index) => (
            <Note item={note} />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {notes
          .filter((item) => item.category === 'office')
          .map((note, index) => (
            <Note item={note} />
          ))}
      </TabPanel>
    </div>
  );
}
export default CategoryTabs;
