import { Router } from "express";
import PlayerManager from "../managers/players.manager.js";
import uploader from "../utils/multer.js";

const router = Router();

const playerManager = new PlayerManager();

router.get("/", async (req, res) => {
  const players = await playerManager.getAllPlayers();

  res.json({ message: "get all method", players });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  res.json({ message: "get all method" });
});

router.post("/", async (req, res) => {
  const bodyPlayer = req.body;
  console.log(
    "🚀 ~ file: players.routes.js:28 ~ router.post ~ bodyPlayer:",
    bodyPlayer
  );
  const newPlayer = await playerManager.createPlayer(bodyPlayer);

  res.json({ message: "get all method", player: newPlayer });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const bodyPlayer = req.body;

  const pUpdated = await playerManager.updatePlayer(id, bodyPlayer);
  res.json({ message: "get all method", playerUpdated: pUpdated });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const pDeleted = await playerManager.deletePlayerById(id);

  res.json({ message: "get all method", playerDeleted: pDeleted });
});

export default router;
