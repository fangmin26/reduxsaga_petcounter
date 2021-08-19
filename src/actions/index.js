export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};
//api 정보가저오는  saga
export const getUsers = () => {
  return {
    type: "GET_USERS_REQUESTED",
  };
};
