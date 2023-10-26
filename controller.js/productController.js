const productController = require('./controllers/product');

app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById);
app.post('/api/products', productController.addProduct);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.removeProduct);
app.delete('/api/products', productController.removeAllProducts);
app.get('/api/products/published', productController.findPublishedProducts);
app.get('/api/products', productController.findProductsByName);