import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TemporaryDrawer from "./Drawer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer></TemporaryDrawer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                textDecoration: "none",
                color: "white",
              }}
            >
              <QueryStatsIcon sx={{ marginRight: ".8rem" }} />
              StockSearch
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
