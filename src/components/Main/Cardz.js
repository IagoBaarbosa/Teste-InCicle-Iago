import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Box } from "@mui/system";

/////// Cardz ///////

function Cardz() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", height: 90, width: 738 }}>
      <Box sx={{ display: "flex", height: 90, width: 738 }}>
        <CardContent sx={{ display: "flex", flexDirection: "right" }}>
          <Typography component="div" variant="h6"></Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          ></Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 10, pb: 10 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 30, width: 380 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default Cardz;
