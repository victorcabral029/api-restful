import ProductsRouter from '../../../modules/products/routes/Products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', ProductsRouter);

routes.get('/', (request, response) => {
	return response.json({ message: 'Hello Dev!' });
});

export default routes;
