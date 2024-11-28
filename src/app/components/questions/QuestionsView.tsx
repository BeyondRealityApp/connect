import { Box, Button, Fade, Typography } from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Question } from "@/app/db/questions";
import { SettingOption } from "./QuestionsController";
import { TransitionGroup } from "react-transition-group";

type QuestionsViewProps = {
  settingOption: SettingOption;
  onStartClick: (settingOption: SettingOption) => void;
  questions: Question[];
  currentQuestionIndex: number;
  handleNextQuestionClick: () => void;
};

const settingOptions = [
  {
    id: "date",
    title: "Date night",
    enabled: true,
  },
  {
    id: "friends",
    title: "Friends",
    enabled: false,
  },
  {
    id: "family",
    title: "Family",
    enabled: false,
  },
];

const QuestionsView: React.FC<QuestionsViewProps> = ({
  settingOption,
  onStartClick,
  questions,
  currentQuestionIndex,
  handleNextQuestionClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "90%",
      }}
    >
      <TransitionGroup>
        {!settingOption && (
          <Fade key={0} timeout={500}>
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
                  startIcon={
                    option.id === "date" ? (
                      <FavoriteIcon />
                    ) : option.id === "friends" ? (
                      <Diversity3Icon />
                    ) : (
                      <Diversity1Icon />
                    )
                  }
                  key={index}
                  sx={{
                    borderRadius: 20,
                    marginTop: 2,
                    width: "100%",
                    height: 60,
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!option.enabled}
                  onClick={() => onStartClick(option.id as SettingOption)}
                >
                  {option.title}
                  {option.enabled ? "" : " (coming soon)"}
                </Button>
              ))}
            </Box>
          </Fade>
        )}
        {settingOption && (
          <Fade key={1} timeout={500}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
              }}
            >
              {questions[currentQuestionIndex].text["en"]}
            </Typography>
          </Fade>
        )}
      </TransitionGroup>
      {settingOption && (
        <Button
          sx={{
            borderRadius: 20,
            position: "absolute",
            bottom: 20,
            width: "80%",
            height: 60,
          }}
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNextQuestionClick}
        >
          Next question
        </Button>
      )}
    </Box>
  );
};

export default QuestionsView;
