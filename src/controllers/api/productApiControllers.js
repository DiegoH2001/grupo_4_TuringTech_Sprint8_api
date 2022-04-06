const path = require('path')
const DB = require('../../database/models')

const sequelize = DB.sequelize

const products = DB.Product

let productApiControllers = {
  listarProductos: (req, res) => {

    let equipos = products.count({ where: { categorie_id: 1 } })
    let procesadoresCoolers = products.count({ where: { categorie_id: 2 } })
    let motherboard = products.count({ where: { categorie_id: 3 } })
    let memoriasRam = products.count({ where: { categorie_id: 4 } })
    let placasDeVideo = products.count({ where: { categorie_id: 5 } })
    let fuentesDeAlimentacion = products.count({ where: { categorie_id: 6 } })
    let gabinetes = products.count({ where: { categorie_id: 7 } })
    let perifericos = products.count({ where: { categorie_id: 8 } })
    let accesorios = products.count({ where: { categorie_id: 9 } })

    Promise.all([
      equipos,
      procesadoresCoolers,
      motherboard,
      memoriasRam,
      placasDeVideo,
      fuentesDeAlimentacion,
      gabinetes,
      perifericos,
      accesorios,
    ]).then((categorie) => {
      DB.Product.findAll({ include: ['brand', 'categorie', 'discount'] }).then(
        (products) => {
          let productsDetail = []

          products.forEach((product) => {
            let productWithDetail = {
              Product: product.name,
              Id: product.id,
              Description: product.product_description,
              Price: product.price,
              Image: product.sliced,
              detail: `/api/productApi/${product.id}`,
            }

            productsDetail.push(productWithDetail)
          })

          let response = {
            meta: { status: 200, url: 'api/productApi/' },
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
          }
          res.json(response)
        },
      )
    })
  },
  detailProductos: (req, res) => {
    DB.Product.findByPk(req.params.id, {
      include: ['brand', 'categorie', 'discount'],
    }).then((product) => {
      let response = {
        meta: {
          status: 200,
          url: `/api/detalleproducto/:${product.id}`,
        },
        data: {
          id: product.id,
          name: product.product_name,
          description: product.product_description,
          descriptionplus: product.product_descriptionplus,
          price: product.price,
          stock: product.stock,
          visibility: product.visibility,
          sliced: product.sliced,
          fees: product.product_fees,
          main: product.product_main,
          idcategory: product.categorie_id,
          idbrand: product.brand_id,
          iddiscount: product.discount_id
        },
      }

      res.json(response)
    })
  },
}
module.exports = productApiControllers