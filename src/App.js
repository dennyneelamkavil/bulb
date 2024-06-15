import { Container, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [isOn, setIson] = useState(false);

  const handleToggle = () => {
    setIson(!isOn);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100%",
        gap: 6,
      }}
    >
      <img
        src={
          isOn
            ? "https://png.pngtree.com/png-clipart/20230323/original/pngtree-shine-idea-lightbulb-in-yellow-and-gray-color-png-image_9001212.png"
            : "https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-vector-black-line-glowing-idea-bulb-clipart-design-png-image_6352152.png"
        }
        alt=""
        width={400}
        height={400}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isOn} />}
          label={<Typography variant="h5">{isOn ? "Turn Off" : "Turn On"}</Typography>}
          onChange={handleToggle}
        />
      </FormGroup>
    </Container>
  );
}

export default App;
