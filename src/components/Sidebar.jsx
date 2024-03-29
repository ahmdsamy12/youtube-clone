import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

// eslint-disable-next-line react/prop-types
const Sidebar = ({selectedCategory, setSelectedCategory}) => {
 
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, i) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={i}
          style={{
            backgroundColor: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span style={{opacity: category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
