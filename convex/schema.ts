import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
    games: defineTable({
        playerOne: s.string(),
        playerTwo: s.string(),
        board: s.string(),
        currentTurn: s.string(),
        isOver: s.boolean(),
        code: s.string()
    })
})