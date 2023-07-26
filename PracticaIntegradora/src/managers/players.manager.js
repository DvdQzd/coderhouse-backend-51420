import playerModel from "../schemas/players.schema.js";

class PlayerManager {
  playersModel;

  constructor() {
    this.playersModel = playerModel;
  }

  async getAllPlayers() {
    try {
      const players = await this.playersModel.find({});

      return players;
    } catch (error) {
      console.log(
        "🚀 ~ file: players.manager.js:18 ~ PlayerManager ~ getAllPlayers ~ error:",
        error
      );
    }
  }

  async getPlayerById(id) {
    try {
      const playerData = await this.playersModel.findOne({ _id: id });
      // TODO: VALIADR SI EL JUGADOR BUSCADO EXISTE O NO

      return playerData;
    } catch (error) {
      console.log(
        "🚀 ~ file: players.manager.js:30 ~ PlayerManager ~ getPlayerById ~ error:",
        error
      );
    }
  }

  async createPlayer(bodyPlayer) {
    try {

      const newPlayer = await this.playersModel.create(bodyPlayer);

      return newPlayer;
    } catch (error) {
      console.log(
        "🚀 ~ file: players.manager.js:40 ~ PlayerManager ~ createPlayer ~ error:",
        error
      );
    }
  }

  async updatePlayer(id, updateBodyPlayer) {
    try {
      const updatedPlayer = await this.playersModel.updateOne({ _id: id}, updateBodyPlayer)
      // TODO: PROBAR MANDANDO 1 SOLO CAMPO DEL JUGADOR, VER Q PASA Y CORREGUIRLO

      return updatedPlayer
    } catch (error) {
      console.log(
        "🚀 ~ file: players.manager.js:47 ~ PlayerManager ~ updatePlayer ~ error:",
        error
      );
    }
  }

  async deletePlayerById(id) {
    try {
      const playerDeleted = this.playersModel.deleteOne({ _id: id });

      return playerDeleted;
    } catch (error) {
      console.log(
        "🚀 ~ file: players.manager.js:57 ~ PlayerManager ~ deletePlayerById ~ error:",
        error
      );
    }
  }
}

export default PlayerManager;
