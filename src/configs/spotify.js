// Client ID 42434f5b4bae4030aa863a5add1597d9
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// 1. click login button
// 2. Redirect to official Spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";
// 3. Redirect to home page,  which is:
const redirectUri = "http://localhost:3000/";

const clientId = "42434f5b4bae4030aa863a5add1597d9";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;