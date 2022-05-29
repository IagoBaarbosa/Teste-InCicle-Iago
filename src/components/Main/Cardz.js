import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

/////// Cardz Esquerda ///////

function Cardz(props) {
  console.log(props);
  return (
    <Card sx={{ display: "flex", height: 120, width: 800, margin: 1 }}>
      <Box sx={{ display: "flex", height: 19, width: 73 }}>
        <CardContent sx={{ display: "flex", flexDirection: "right" }}>
          <Typography component="div" variant="h6"></Typography>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 100 }}
            image={props.item.file.url}
            alt="img"
          />
        </CardContent>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            fontStyle: "normal",
            color: "#707070",
            margin: "1px",
            padding: "15px 200px",
            position: "absolute",
            width: "999px",
            height: "999px",
            textAlign: "left",
          }}
        >
          {props.item.title}
        </p>
      </Box>
      <p
        style={{
          fontFamily: "Open Sans",
          fontSize: "12px",
          fontStyle: "normal",
          color: "#707070",
          margin: "1px",
          padding: "35px 200px",
          position: "absolute",
          width: "999px",
          height: "999px",
          textAlign: "left",
        }}
      >
        {props.item.type}
      </p>
      <p
        style={{
          fontFamily: "Open Sans",
          fontSize: "12px",
          fontStyle: "normal",
          color: "#707070",
          margin: "1px",
          padding: "50px 200px",
          position: "absolute",
          width: "999px",
          height: "999px",
          textAlign: "left",
        }}
      >
        {props.item.description}
      </p>
    </Card>
  );
}

export default Cardz;
