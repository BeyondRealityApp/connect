import { Box, Button, Fade, Typography } from "@mui/material";
import { Question } from "@/lib/types";
import { TransitionGroup } from "react-transition-group";

type QuestionsViewProps = {
  questions: Question[];
  currentQuestionIndex: number;
  handleNextClick: () => void;
  handleBackClick: () => void;
};

const QuestionsView: React.FC<QuestionsViewProps> = ({
  questions,
  currentQuestionIndex,
  handleNextClick,
  handleBackClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        textAlign="center"
        fontWeight={200}
        sx={{
          position: "absolute",
          top: 20,
        }}
      >
        Question {currentQuestionIndex + 1} of {questions.length}
      </Typography>
      {questions.length > 0 && (
        <TransitionGroup>
          {questions.map((question, index) => {
            return (
              index === currentQuestionIndex && (
                <Fade in={true} timeout={500}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80%",
                    }}
                  >
                    <Typography
                      variant="h4"
                      textAlign="center"
                      fontWeight={200}
                      marginBottom={2}
                    >
                      {question.text["en"]}
                    </Typography>
                  </Box>
                </Fade>
              )
            );
          })}
        </TransitionGroup>
      )}
      {questions.length > 0 && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextClick}
            sx={{
              borderRadius: 20,
              width: "80%",
              height: 60,
              position: "absolute",
              bottom: 60,
              maxWidth: 400,
            }}
          >
            Next
          </Button>
          <Button
            color="primary"
            onClick={handleBackClick}
            size="small"
            sx={{
              position: "absolute",
              bottom: 20,
            }}
          >
            Back
          </Button>
        </>
      )}
    </Box>
  );
};

export default QuestionsView;
