import { connect } from "./db";

export default async function handler(req, res) {
  const connection = await connect();

  try {
    // Execute SQL queries here using connection.query()
    const [rows] = await connection.query("SELECT * FROM products WHERE id=2");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unexpected error occurred" });
  } finally {
    // Close the connection when you're done using it
    connection.end();
  }
}
