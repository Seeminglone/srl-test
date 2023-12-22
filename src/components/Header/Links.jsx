import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "@mui/material";

import theme from "../../styles/theme";

const Links = () => {
  return (
    <div>
      <IconButton
        variant="contained"
        target="_blank"
        href="https://discord.com/invite/slickracingua"
        sx={{
          maxWidth: "36px",
          maxHeight: "36px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: `${theme.colors.green}50`,
            color: theme.colors.green,
          },
        }}
      >
        <FontAwesomeIcon
          icon={faDiscord}
          style={{
            fontSize: "20px",
            color: theme.colors.grey,
          }}
        />
      </IconButton>
      <IconButton
        variant="contained"
        href="https://www.instagram.com/slickracing.ukraine"
        target="_blank"
        sx={{
          maxWidth: "36px",
          maxHeight: "36px",
          borderRadius: "18px",
          "&:hover": {
            backgroundColor: `${theme.colors.green}50`,
            color: theme.colors.green,
          },
        }}
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{
            fontSize: "20px",
            color: theme.colors.grey,
          }}
        />
      </IconButton>
      <IconButton
        variant="contained"
        href="https://www.youtube.com/@slickracingukraine"
        target="_blank"
        sx={{
          maxWidth: "36px",
          maxHeight: "36px",
          borderRadius: "18px",
          "&:hover": {
            backgroundColor: `${theme.colors.green}50`,
            color: theme.colors.green,
          },
        }}
      >
        <FontAwesomeIcon
          icon={faYoutube}
          style={{
            fontSize: "20px",
            color: theme.colors.grey,
          }}
        />
      </IconButton>
      <IconButton
        variant="contained"
        target="_blank"
        href="https://www.twitch.tv/slickracingukraine"
        sx={{
          maxWidth: "36px",
          maxHeight: "36px",
          borderRadius: "18px",
          "&:hover": {
            backgroundColor: `${theme.colors.green}50`,
            color: theme.colors.green,
          },
        }}
      >
        <FontAwesomeIcon
          icon={faTwitch}
          style={{
            fontSize: "20px",
            color: theme.colors.grey,
          }}
        />
      </IconButton>
    </div>
  );
};

export default Links;
