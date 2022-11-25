import { mutation } from "./_generated/server";


export default mutation(({ db }, playerOne, playerTwo, currentTurn, playerOneBoard, playerTwoBoard, isOver, code, id ) => {
  const message = { playerOne, playerTwo, currentTurn, playerOneBoard, playerTwoBoard, isOver, code  };
  db.replace(id, message)
});