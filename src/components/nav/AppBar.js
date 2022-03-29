import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TemporaryDrawer from "./Drawer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer></TemporaryDrawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <QueryStatsIcon sx={{ marginRight: ".8rem" }} />
            Stock
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
