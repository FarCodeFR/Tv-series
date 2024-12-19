import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

type Programs = {
  id: number;
};

class programRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of categories
    return rows as Programs[];
  }
}

export default new programRepository();
