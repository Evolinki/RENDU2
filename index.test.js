const getDataFromAPI = require('./index');

test("the array should not be empty", async() => {
    const festivals = await getDataFromAPI();
    expect(festivals).not.toBeNull();
})