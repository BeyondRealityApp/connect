import { Box, Button, Typography } from "@mui/material";
import { GameSetting } from "@/lib/types";

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

const WizardStepOne: React.FC<WizardStepOneProps> = ({
  onSettingOptionClick,
  content,
}) => {
  const settingOptions = [
    {
      id: "date",
      title: content.settingOption.date,
      enabled: true,
    },
    {
      id: "friends",
      title: content.settingOption.friends,
      enabled: true,
    },
    {
      id: "yearEnd",
      title: content.settingOption.yearEnd,
      enabled: true,
    },
    {
      id: "work",
      title: content.settingOption.work,
      enabled: true,
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
        </Button>
      ))}
    </Box>
  );
};

export default WizardStepOne;
