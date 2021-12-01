const express = require("express");
const cors = require("cors");
const { ladiesShoes, watches, gentsShoes } = require("./data/featured");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/featured", (req, res) => {
  res.json({ products: { ladiesShoes, gentsShoes, watches } });
});

app.get("/single-product/:id", (req, res) => {
  res.json({
    product: {
      id: req.params.id,
      title:
        "Best Sport Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ipsa assumenda. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: 900.0,
      images: [
        "http://localhost:4545/images/prod_1.png",
        "http://localhost:4545/images/prod_2.1.png",
        "http://localhost:4545/images/prod_3.1.png",
      ],
      features: [
        "Quality! The fiber used is an excellent absorber & just cleans better than other micro fibre.",
        "The fiber used is an excellent absorber & just cleans better than other micro fibre.",
        "An excellent absorber & just cleans better than other micro fibre.",
        "Used is an excellent absorber & just cleans better than other micro fibre.",
      ],
    },
  });
});

app.listen(4545, () => console.log("Port is listening!"));
