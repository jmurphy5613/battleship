import { mutation } from "./_generated/server";


export default mutation(({ db }, playerOne, playerTwo, currentTurn, board, isOver, code, id ) => {
  const message = { playerOne, playerTwo, currentTurn, board, isOver, code  };
  db.replace(id, message)
});