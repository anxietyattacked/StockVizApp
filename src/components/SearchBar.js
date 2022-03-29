import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Router, useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  // let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate.
  // };
  function handleSubmit(e) {
    e.preventDefault();
    // let params = e.target;
    // setSearchParams(params);
    navigate(`/search/${search.toLocaleUpperCase()}`, { replace: true });
  }

  return (
    <Paper
      elevation={3}
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "80vw",
        marginBottom: "6rem",
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Stocks"
        inputProps={{ "aria-label": "search stocks" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
