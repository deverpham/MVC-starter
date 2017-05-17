let express = require('express');
import {helper} from '../core/helper.service';
var router =express.Router();
import {productController} from '../controller/product.controller';
router.post('/search', async (req:any,res:any)  => {

    let products = await productController.findProductByTag(req.body.tag);
    res.send(helper.response('success',products))

})

router.post('/admin/add',(req:any,res:any) => {

    productController.addProduct(req.body.product)
      .then((object:any) => {
        res.send(helper.response('success',object))
      })
      .catch((err:any) => {
        res.status(500).send(helper.response('error',err))
      })
})

router.get('/listall', async (req:any,res:any) => {
    let products = await productController.listProduct()
    res.send(helper.response('success',products))
})

router.post('/delete',(req:any,res:any) => {
    productController.deleteProduct(req.body.productid)
      .then(() => {
          res.send(helper.response('success','delete successfull'))
      })
      .catch((err:any) => {
        res.status(500).send(helper.response('error',err))
      })
})


export default router;
