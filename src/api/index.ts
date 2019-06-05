import { AppActionTypes, UserData } from "../reducers/fruitReducer";
const getData = () => (dispatch: Function) => {
  (window as any).FruitasticApi.get((data: UserData[]) => {
    dispatch({ type: AppActionTypes.GET_USERS, payload: data });
  });
};

export default getData;
