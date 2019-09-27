import { Router, Request, Response } from "express";

const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "GET /mensajes :todo bien hasta aqui..."
  });
});

router.post("/mensajes", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de     = req.body.de;

  res.json({
    ok: true,
    mensaje: "POST /mensajes :todo bien hasta aqui...",
    cuerpo,
    de
  });
});

router.post("/mensajes/:id", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de     = req.body.de;
  const id     = req.params.id;

  res.json({
    ok: true,
    mensaje: "POST /mensajes :todo bien hasta aqui...",
    cuerpo,
    de,
    id
  });
});

export default router;
