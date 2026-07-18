/** JSON-compatible primitive value. */
export type JsonPrimitive = string | number | boolean | null;

/** JSON-compatible value accepted by MailerMine metadata fields. */
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

/** JSON-compatible object accepted by MailerMine metadata and variables. */
export type JsonObject = { [key: string]: JsonValue };
