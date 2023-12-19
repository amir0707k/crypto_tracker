import  React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {  ThemeProvider, createTheme } from "@mui/material";
import './style.css';
import Grid from "../Grid";
import List from "../List";


export default function TabsComponent({coins}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color:"var(--white)",
    width:"50vw",
    fontSize:"1rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"captitalize"
  }

  const theme = createTheme({
    palette:{
        primary:{
            main:"#3a80e9"
        }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          variant="fullWidth"
        >
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return (
                <Grid coin ={coin} key= {i}/>
              );
              
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((coin, i) => {
              return (
                <List coin={coin}/>
              );
            })}
           </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
