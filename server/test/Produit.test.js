
const request = require("supertest");
const app = require("../server");



describe("POST /api/produit/add  // add", () => {
  it("should add a prodact", async () => {
    const res = await request(app).post("/api/produit/add").send({
      image: "pabluc/image/a.png",
      title: "korssi",
      description: "arika korsi",
      price: 12,
      oldprice: 12,
      quantite: 12,
      promotion: true,
      categorie: "cate",

    });
    // console.log("res.body :>> ", res.body);

    expect(res.statusCode).toBe(200);
  });
});

describe("POST /api/produit/add  // add", () => {
  it("should add a prodact", async () => {
    const res = await request(app).post("/api/produit/add").send({
      image: "",
      title: "",
      description: "",
      price: "",
      oldprice: "",
      quantite: "",
      promotion: "",
      categorie: "",

    });
    // console.log("res.body :>> ", res.body);

    expect(res.statusCode).toBe(400);
  });
});