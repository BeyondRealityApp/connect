import { Box, Button, Fade, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Menu, MenuItem, MenuList } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Question } from "@/lib/types";
import { TransitionGroup } from "react-transition-group";

type QuestionsViewProps = {
  questions: Question[];
  currentQuestionIndex: number;
  handleNextClick: () => void;
  handleBackClick: () => void;
  onRestartClick: () => void;
  openMenu: boolean;
  onMenuClick: () => void;
  locale: string;
  content: {
    questionProgress: string;
    nextButtonText: string;
    backButtonText: string;
    restartButtonText: string;
  };
};

const QuestionsView: React.FC<QuestionsViewProps> = ({
  questions,
  currentQuestionIndex,
  handleNextClick,
  handleBackClick,
  onRestartClick,
  openMenu,
  onMenuClick,
  locale,
  content,
}) => {
  return (
    <>
      <Menu
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={openMenu}
        onClose={onMenuClick}
        anchorEl={document.getElementById("menu-anchor")}
      >
        <MenuList>
          <MenuItem onClick={onRestartClick}>
            <ListItemIcon>
              <RestartAltIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{content.restartButtonText}</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        color="primary"
        onClick={onMenuClick}
        size="small"
        sx={{
          position: "absolute",
          top: 15,
          right: 10,
        }}
      >
        <MoreVertIcon />
      </IconButton>
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
          {content.questionProgress}
        </Typography>
        {questions.length > 0 && (
          <TransitionGroup>
            {questions.map((question, index) => {
              return (
                index === currentQuestionIndex && (
                  <Fade in={true} timeout={500} key={question.id}>
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
                        {question.text[locale]}
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
              {content.nextButtonText}
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
              {content.backButtonText}
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default QuestionsView;
