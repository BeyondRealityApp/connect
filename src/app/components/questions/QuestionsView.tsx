import { Box, Button, Fade, Typography } from "@mui/material";
import { Question } from "@/app/db/questions";
import { TransitionGroup } from "react-transition-group";

type QuestionsViewProps = {
  questions: Question[];
  currentQuestionIndex: number;
  handleNextQuestionClick: () => void;
};

const QuestionsView: React.FC<QuestionsViewProps> = ({
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
        width: "100%",
      }}
    >
      <TransitionGroup>
        <Fade key={currentQuestionIndex} timeout={500}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {questions[currentQuestionIndex].text["en"]}
          </Typography>
        </Fade>
      </TransitionGroup>
      <Button
        sx={{
          borderRadius: 20,
          position: "absolute",
          bottom: 20,
          width: "50%",
        }}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleNextQuestionClick}
      >
        Next question
      </Button>
    </Box>
  );
};

export default QuestionsView;
