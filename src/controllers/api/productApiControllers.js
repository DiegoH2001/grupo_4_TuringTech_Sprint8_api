const path = require('path')
const DB = require('../../database/models')

const sequelize = DB.sequelize

let productApiControllers = {
  listar: (req, res) => {
<<<<<<< HEAD
    /**  DB.Product.findAll().then((products) => {
=======
    DB.Product.findAll().then((products) => {
>>>>>>> 98609d3c9fd7feab8636094f314b4030689e14ec
      return res.status(200).json({
        total: products.length,
        data: products,
        status: 200,
<<<<<<< HEAD
      });
    });
*/
    let equipos = products.count({ where: { categorie_id: 1 } });
    let procesadoresCoolers = products.count({ where: { categorie_id: 2 } });
    let motherboard = products.count({ where: { categorie_id: 3 } });
    let memoriasRam = products.count({ where: { categorie_id: 4 } });
    let placasDeVideo = products.count({ where: { categorie_id: 5 } });
    let fuentesDeAlimentacion = products.count({ where: { categorie_id: 6 } });
    let gabinetes = products.count({ where: { categorie_id: 7 } });
    let perifericos = products.count({ where: { categorie_id: 8 } });
    let accesorios = products.count({ where: { categorie_id: 9 } });

    Promises.all[
      (equipos,
      procesadoresCoolers,
      motherboard,
      memoriasRam,
      placasDeVideo,
      fuentesDeAlimentacion,
      gabinetes,
      perifericos,
      accesorios).then((categorie) => {
        products
          .findAll({ include: ["brand", "categorie", "discount"] })
          .then((products) => {
            let productsDetail = [];
            products.forEach((product) => {
              let productWithDetail = {
                Product: product.name,
                Id: product.id,
                Description: product.product_description,
                Price: product.price,
                Image: product.sliced,
                detail: `/api/productApi/${product.id}`,
              };
              productsDetail.push(productWithDetail);
            });
            let response = {
              meta: { status: 200, url: "api/productApi/" },
              totalProducts: products.length,
              countByCategorie: [
                { equipos: categorie[0] },
                { procesadoresCoolers: categorie[1] },
                { motherboard: categorie[2] },
                { memoriasRam: categorie[3] },
                { placasDeVideo: categorie[4] },
                { fuentesDeAlimentacion: categorie[5] },
                { gabinetes: categorie[6] },
                { perifericos: categorie[7] },
                { accesorios: categorie[8] },
              ],
              products: productsDetail,
            };
            res.json(response);
          });
      })
    ];
=======
      })
    })
>>>>>>> 98609d3c9fd7feab8636094f314b4030689e14ec
  },
}

module.exports = productApiControllers
