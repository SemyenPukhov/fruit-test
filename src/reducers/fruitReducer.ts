export const AppActionTypes = {
  GET_USERS: "GET_USERS",
  UPDATE_FAVORITES: "UPDATE_FAVORITES"
};

export interface UserData {
  name: string;
  favoriteFruit: string;
}

export interface State {
  users: UserData[];
  checked: string[];
}

const defaultState: State = {
  users: [],
  checked: []
};

const updateFavorites = (state: State, action: any) => ({
  ...state,
  checked: action.payload
});

export default function fruitReducer(
  state: any,
  action: { type: string; payload: any }
): State {
  state = state || defaultState;

  switch (action.type) {
    case AppActionTypes.GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case AppActionTypes.UPDATE_FAVORITES:
      return updateFavorites(state, action);

    default:
      return state;
  }
}
