const controller = {
  index: (req, res) => {
    res.render("products", {
      products: [
        {
          imgSource: "/images/product/SMART-TV-1.jpg",
          name: "QLED TV",
          price: 5000,
        },
      ],
    });
  },
  add: (req, res) => {
    res.render("editAddProduct");
  },
  edit: (req, res) => {
    console.log(req.params.id);
    res.render("editAddProduct", { id: req.params.id });
  },
  productDetail: (req, res) => {
    res.render("productDetail");
  },
  store: (req, res) => {
    if (req.file) {
      console.log(req.file);
    }
    console.log(req.body);
    res.redirect("/products", {
      products: [
        {
          imgSource: "/images/product/SMART-TV-1.jpg",
          name: "QLED TV",
          price: 5000,
        },
      ],
    });
  },
  put: (req, res) => {
    console.log(req.body);
    res.redirect("/products", {
      products: [
        {
          imgSource: "/images/product/SMART-TV-1.jpg",
          name: "QLED TV",
          price: 5000,
        },
      ],
    });
  },
  delete: (req, res) => {
    console.log("req delete", req);
    res.redirect("/products", {
      products: [
        {
          imgSource: "/images/product/SMART-TV-1.jpg",
          name: "QLED TV",
          price: 5000,
        },
      ],
    });
  },
};

module.exports = controller;
