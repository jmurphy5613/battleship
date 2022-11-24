import { query } from "./_generated/server";

export default query(async ({ db }, code) => {
  return await db
    .query("games")
    .filter(q => q.eq(q.field("code"), code))
    .collect()
});