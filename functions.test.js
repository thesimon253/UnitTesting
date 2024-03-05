const functions = require("./functions.js");
describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
     const a = 8;
     const b = 4;

    //ACT
     const result = functions.multiply (a, b);
    //ASSERT
     expect(result).toEqual(32);
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    

    
    //ARRANGE
    const c = null;
    const d = null;

    //ACT
     const result = functions.isNull (c, d);

    //ASSERT
    expect(result).toBe(null);
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
      const value = true;
    //ACT
      const result = functions.checkTruthy(value);
    //ASSERT
     expect(result).toBe(true);
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGEno
     const lastname = "Perez";
    //ACT
     const result = functions.addLastName(lastname);
    //ASSERT
      expect(result).toBe("Pepito Perez");
  });
})
