import { Router } from "express";

const router = Router();

router.get('/dashboard', (req, res) => {
    res.render('home');
});

export default router;