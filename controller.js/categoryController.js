const categoryController = require('./controllers/category');

// Routes for Categories
app.get('/api/categories', categoryController.getAllCategories);
app.get('/api/categories/:id', categoryController.getCategoryById);
app.post('/api/categories', categoryController.addCategory);
app.put('/api/categories/:id', categoryController.updateCategory);
app.delete('/api/categories/:id', categoryController.removeCategory);
app.delete('/api/categories', categoryController.removeAllCategories);
