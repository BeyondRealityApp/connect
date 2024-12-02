import { Box, FormControl, MenuItem, Select } from "@mui/material";

type LocaleSelectorViewProps = {
  onLanguageChange: (language: string) => void;
  selectedLanguage: string;
};

const LocaleSelectorView: React.FC<LocaleSelectorViewProps> = ({
  onLanguageChange,
  selectedLanguage,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 5,
        right: 10,
      }}
    >
      <FormControl fullWidth>
        <Select
          disableUnderline
          variant="standard"
          color="primary"
          id="language-selector"
          value={selectedLanguage}
          onChange={(event) => onLanguageChange(event.target.value as string)}
          sx={{
            color: "primary.main",
            width: "45px",
            height: "40px",
            "& svg": {
              color: "primary.main",
            },
          }}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="nl">NL</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LocaleSelectorView;
