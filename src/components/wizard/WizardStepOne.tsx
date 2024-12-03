import { Box, Button, Typography } from "@mui/material";
import { GameSetting } from "@/lib/types";
import { ButtonOwnProps } from "@mui/material";

type SettingOption = Exclude<GameSetting, null>;

type WizardStepOneProps = {
  onSettingOptionClick: (settingOption: SettingOption) => void;
  content: {
    title: string;
    description: string;
    settingOption: {
      date: string;
      friends: string;
      yearEnd: string;
      work: string;
    };
  };
};

type Setting = {
  id: SettingOption;
  title: string;
  color: ButtonOwnProps["color"];
};

const WizardStepOne: React.FC<WizardStepOneProps> = ({
  onSettingOptionClick,
  content,
}) => {
  const settings: Setting[] = [
    {
      id: "friends",
      title: content.settingOption.friends,
      color: "primary",
    },
    {
      id: "date",
      title: content.settingOption.date,
      color: "purple",
    },
    {
      id: "yearEnd",
      title: content.settingOption.yearEnd,
      color: "red",
    },
    {
      id: "work",
      title: content.settingOption.work,
      color: "blue",
    },
  ];

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
        {content.title}
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={200}
        marginBottom={4}
      >
        {content.description}
      </Typography>
      {settings.map((option, index) => (
        <Button
          key={index}
          sx={{
            borderRadius: 20,
            marginTop: 2,
            width: "100%",
            maxWidth: 400,
            height: 60,
          }}
          color={option.color}
          variant="contained"
          size="large"
          onClick={() => onSettingOptionClick(option.id as SettingOption)}
        >
          {option.title}
        </Button>
      ))}
    </Box>
  );
};

export default WizardStepOne;
