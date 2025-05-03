import {checkUser, createUser, deleteUser} from '../backend/requests'

//checks if user exists
describe("checkUser function", () => {
  test("Existing user with matching user/pass returns user info", async () => {
    let result,expected;
    expected = "data";

    result = await checkUser("crzy8", "6foorkiillah");
    expect(result).toEqual(expect.any(Object));
 
    result = await checkUser("msaleh23","Happydyz74");
    expect(result).toEqual(expect.any(Object));

    result = await checkUser("Bobby","Bob54321");
    expect(result).toEqual(expect.any(Object));

   })

  test("Existing user with wrong pass returns wrong password message", async () => {
    let result;

    result = await checkUser("crzy8","fail");
    expect(result).toBe("wrong password");

    result = await checkUser("msaleh23","fail");
    expect(result).toBe("wrong password");

    result = await checkUser("Bobby","fail");
    expect(result).toBe("wrong password");
  })

  test("Nonexisting user returns no user found message", async () => {
    let result;
    result = await checkUser("fail1","6foorkiillah");
    expect(result).toBe("no user found");

    result = await checkUser("fail2","Happydyz74");
    expect(result).toBe("no user found");

    result = await checkUser("fail3","Bob54321");
    expect(result).toBe("no user found");
  })
})


//checks if user can be created
describe("createUser function", () => {
  test("Existing user returns failed message", async () => {
    let expected, result;
    expected = {
      "status": "failed"
    };

    result = await createUser("crzy8","6foorkiillah");
    expect(result).toEqual(expected);

    result = await createUser("Bobby","Bob54321");
    expect(result).toEqual(expected);
  })

  test("New user returns created message", async () => {
    let expected, result;
    expected = {
      "status":"created"
    };
    result = await createUser("testUser","testfail");

    expect(result).toEqual(expected);
  })
})


//checks if user can be deleted
describe("deleteUser function", () => {
  test("Existing user can be deleted", async () => {
    let expected, result;
    expected = {
      "status": "deleted"
    };
    result = await deleteUser("testUser");
    expect(result).toEqual(expected);
  })

  test("nonexisting user can't be deleted", async () => {
    let expected, result;
    expected = {
      "status": "failed"
    };
    result = await deleteUser("randomunNonexisting");
    expect(result).toEqual(expected);
  })
})

