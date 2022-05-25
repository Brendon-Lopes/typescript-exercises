type User = { username: string; password: string };
type VerifyUserFn = (user: User, receivedValues: User) => boolean;

const verifyUser: VerifyUserFn = (user, receivedValues) => {
  return (
    user.username === receivedValues.username &&
    user.password === receivedValues.password
  );
};

const bdUser = { username: "name", password: "123456" };
const receivedUser = { username: "name", password: "123456", permissions: "" };
// Even though one object has more properties, it doesn't return any errors.
// The shape-matching only requires a subset of the object’s fields to match.
const loggedIn = verifyUser(bdUser, receivedUser);

console.log(loggedIn);
