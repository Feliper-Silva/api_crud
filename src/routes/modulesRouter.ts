import { Router } from 'express';

const router = Router();

router.get('/modules', async (request, response) => {
  response.json({ message: 'funcionando' });
});
router.get('/modules/:id', async (request, response) => {
  response.json({ message: 'module 1' });
});

export { router };
