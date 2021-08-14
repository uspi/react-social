type FriendType = {
  id: number;
  name: string;
};
type InitialStateType = typeof initialState;


let initialState = {
  friends: [
    { id: 1, name: "Vano" },
    { id: 2, name: "Maksim" },
    { id: 3, name: "Olga" },
    { id: 4, name: "Andry" },
    { id: 5, name: "Dane" },
    { id: 6, name: "Kate" },
  ] as FriendType[],
};

const sidebarReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  return state;
};

export default sidebarReducer;
