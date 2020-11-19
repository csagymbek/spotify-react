export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQA1tibzSYj7fiBRw7gtV7tp29NNlXq-aYFzlXrtFkU9eLNGXmPwDnEpTuAywWIDGcKOoqSdBHry808moKS7_-S2xTpuaMXJOidhl9QM78bZpps76QMT1py7QQheiXbXngQZ1mG_ovPvq-piLRon3_eJexCZ_jLSX22b6JEhRiKb7tgtTffe",
};

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
