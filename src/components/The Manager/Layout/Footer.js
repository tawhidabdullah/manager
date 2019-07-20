import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Footer = ({ muscles, category, selectCategory }) => {
  const categoryIndex = category
    ? muscles.findIndex(muscle => muscle === category) + 1
    : 0;

  const onChangeCategory = (e, index) => {
    selectCategory(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={categoryIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={onChangeCategory}
        centered
      >
        <Tab label="all" />
        {muscles.map(muscle => {
          return <Tab label={muscle} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
