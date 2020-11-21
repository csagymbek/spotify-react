import React from "react";
import "../styles/Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { Grid, Slider } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://d2h1pu99sxkfvn.cloudfront.net/b0/10452826/413322457_ekIEcpGLqj/P0.jpg"
          alt="Album cover"
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Pray for plagues</h4>
          <p>Bring Me The Horizon</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
