import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "../configs/spotify";
import "../styles/App.css";
import Login from "./Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "../context api/DataLayer";

const spotify = new SpotifyWebApi();

export default function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      // spotify.setAccessToken(_token);
      setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("2kV2g7uCTlYvASTkQGHx1l").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      // spotify.getMyTopArtists().then((response) =>
      //   dispatch({
      //     type: "SET_TOP_ARTISTS",
      //     top_artists: response,
      //   })
      // );

      dispatch({
        type: "SET_SPOTIFY",
        spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}
