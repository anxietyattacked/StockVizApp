import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
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
        gridColumn: "span 3",
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Stock Symbol"
        inputProps={{ "aria-label": "search stock symbol" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
