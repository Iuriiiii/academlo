--table todos {
--  id uuid [pk]
--  description varchar(3000)
--  is_completed bool
--}

CREATE TABLE IF NOT EXISTS "todos" (
  "id" uuid PRIMARY KEY,
  "description" varchar(3000),
  "is_completed" BOOLEAN
);

INSERT INTO todos (id, description, is_completed) VALUES ('49644ffe-498f-4b0b-974b-eb68c7f6db6f', 'Create a database', TRUE),
                                                                    ('b7cdc199-1ded-432c-96c2-eed9f49395fe', 'Create a todo', TRUE),
                                                                    ('b8914ae9-1869-40fc-b8cf-6b7b2d55b2c1', 'Finish the insert', FALSE);

SELECT * FROM todos;
SELECT * FROM todos WHERE is_completed = TRUE;