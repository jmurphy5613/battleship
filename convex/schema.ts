import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
    games: defineTable({
        playerOne: s.string(),
        playerTwo: s.string(),
        playerOneBoard: s.array(s.string()),
        playerTwoBoard: s.array(s.string()),
        currentTurn: s.string(),
        isOver: s.boolean(),
        code: s.string()
    })
})