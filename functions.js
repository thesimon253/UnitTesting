const functions = {
  multiply: (num1, num2) => num1 * num2,
  isNull: () => null,
  checkTruthy: (value) => value === true,
  addLastName: (lastname) => {
    const user = {firstname: "Pepito", lastname: "Perez"}
    return user;
  }
}

module.exports = functions;


