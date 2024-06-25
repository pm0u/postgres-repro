import postgres from "postgres";

const sql = postgres("");

sql`select a from b where c`;

sql`select a from ${sql("table_name")}`;
