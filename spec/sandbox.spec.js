const { Selector } = require("testcafe");
const { expect } = require("chai");

fixture`Sandbox`.page`https://www.google.com`;

test("should be on Google", async () => {
  const title = await Selector("title").innerText;

  expect(title).to.equal("Google");
});
