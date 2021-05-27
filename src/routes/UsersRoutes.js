import {Router} from 'express';
import  UsersController from '../controllers/UsersController'

const router = Router();

router.get('/', UsersController.index);

router.get('/paginate', UsersController.paginate);

router.post('/', UsersController.store);

router.get('/filter', UsersController.filterUser);

router.get('/:id', UsersController.findUser);

router.put('/:id', UsersController.updateUser);

router.delete('/:id', UsersController.deleteUser);

export default router;