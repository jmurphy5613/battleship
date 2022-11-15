import { mutation } from "./_generated/server";

export default mutation(({ db }, playerOne, playerTwo, currentTurn, board, isOver, code ) => {
  const message = { playerOne, playerTwo, currentTurn, board, isOver, code  };
  db.insert("games", message);
});