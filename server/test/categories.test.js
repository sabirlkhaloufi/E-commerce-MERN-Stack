const request = require("supertest");
const app = require("../server");


describe("test categories", () => {
  it("add categorie", async () => {
    const res = await request(app).post("/api/categories/add").send({
      categorie: "categorie8",
    });

    expect(res.status).toEqual(200);
  });


  it("update categorie", async () => {
    const res = await request(app).put(`/api/categories/update/${7}`).send({
      categorie: "sabir",
    });

    expect(res.status).toEqual(200);
  });

  it("delete categorie", async () => {
    const res = await request(app).delete(`/api/categories/delete/${7}`)

    expect(res.status).toEqual(200);
  });
});