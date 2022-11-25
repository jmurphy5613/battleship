import { mutation } from "./_generated/server";

export default mutation(({ db }, playerOne, playerTwo, currentTurn, playerOneBoard, playerTwoBoard, isOver, code ) => {
  const message = { playerOne, playerTwo, currentTurn, playerOneBoard, playerTwoBoard, isOver, code  };
  db.insert("games", message);
});