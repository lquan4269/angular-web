const express = require('express');
const cors = require('cors');
Product = [{  id:'id1',name: 'iphone', price :100000, sl:5, status:"còn hàng" }, { id:'id2',name: 'ipad', price :20000, sl:5, status:"còn hàng" }]
var corsOptions = {
    origin: 'http://localhost:4200',
    //domain được phép gọi request mà server chấp nhận (vd: request đến từ http://localhost:4200  được server cho phép), 
    //giả sử node server là http://localhost:8000
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  };
  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  
  
  app.listen(8000, () => {
      console.log('Server started!');
    });
  app.route('/api/items').get((req, res) => {
    console.log('items', Product);
      res.send(Product)
      
  });

  app.route('/api/insert').post((req, res) => {
    const insertPr = req.body;
    Product.push(insertPr);
    //res.send(201, req.body);
    res.status(201).send(req.body);
    });

  app.route('/api/delete').delete((req, res) => {
      const id = req.query.id;
      Product.splice(Product.findIndex(x => x.id === id), 1)

      res.send(id)
      res.status(201)
      });