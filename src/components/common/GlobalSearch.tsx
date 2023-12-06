import MuiBox from "@mui/material/Box";
import { memo } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Input from "./Input";
import SearchIcon from "@mui/icons-material/Search";
import Form from "./Form";
import useFocus from "@/hooks/useFocus";

const Box = styled(MuiBox)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.grey[100],
  "&:hover": { backgroundColor: theme.palette.grey[200] },
  borderRadius: 50,
  "& .MuiOutlinedInput-root": {
    borderRadius: 50,
    border: "none",
    backgrond: "transparent",
    "& input": {
      padding: 12,
    },
    "& fieldset": {
      border: "none",
    },
  },
}));

/**
 * Global search component
 */
const GlobalSearch = memo(function GlobalSearch() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const search = target.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    navigate(`${location.pathname}?${newParams}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", px: 2, ml: 2 }}>
        <SearchIcon color="secondary" />
        <Input
          name="search"
          type="text"
          key={searchParams?.get("q")}
          placeholder="Search keyword..."
          defaultValue={searchParams?.get("q") || ""}
          autoComplete="off"
        />
      </Box>
    </Form>
  );
});

export default GlobalSearch;
