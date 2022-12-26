
const request = require("supertest");
const app = require("../server");



describe("test produits ", () => {

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
    expect(res.statusCode).toBe(200);
  });



  it("should add a prodact return status 400 ", async () => {
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
    expect(res.statusCode).toBe(400);
    });

  
//   it("should add a prodact", async () => {
//     const res = await request(app).post(`/api/produit/delete/${6}`).send({
//       image: "public/image/table.png",
//       title: "table",
//       description: "table",
//       price: 3,
//       oldprice: 3,
//       quantite: 3,
//       promotion: false,
//       categorie: "cate",
//     });
//     expect(res.statusCode).toBe(200);
//   });
});