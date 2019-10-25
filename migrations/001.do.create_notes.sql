CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    content TEXT,
    date_created TIMESTAMP NOT NULL DEFAULT now()
);
