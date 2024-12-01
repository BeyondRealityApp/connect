import { Box, Button, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";
import { GameSetting } from "@/lib/types";

type SettingOption = Exclude<GameSetting, null>;

const settingOptions = [
  {
    id: "date",
    title: "Date night",
    enabled: true,
  },
  {
    id: "friends",
    title: "Friends",
    enabled: true,
  },
  {
    id: "holiday",
    title: "Holiday",
    enabled: true,
  },
  {
    id: "work",
    title: "Work",
    enabled: true,
  },
];

type WizardStepOneProps = {
  onSettingOptionClick: (settingOption: SettingOption) => void;
};

const WizardStepOne: React.FC<WizardStepOneProps> = ({
  onSettingOptionClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={200}
        marginBottom={2}
      >
        What setting are you in?
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={200}
        marginBottom={4}
      >
        There are questions for every setting. Select one to start.
      </Typography>
      {settingOptions.map((option, index) => (
        <Button
          key={index}
          sx={{
            borderRadius: 20,
            marginTop: 2,
            width: "100%",
            maxWidth: 400,
            height: 60,
          }}
          variant="contained"
          color="primary"
          size="large"
          disabled={!option.enabled}
          onClick={() => onSettingOptionClick(option.id as SettingOption)}
        >
          {option.title}
          {option.enabled ? "" : " (coming soon)"}
        </Button>
      ))}
    </Box>
  );
};

export default WizardStepOne;
