import { mutation } from "./_generated/server";

export default mutation(({ db }, playerOne, playerTwo, currentTurn) => {
  const message = { playerOne, playerTwo, currentTurn };
  db.insert("games", message);
});