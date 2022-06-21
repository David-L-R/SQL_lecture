<img src="https://www.dataquest.io/wp-content/uploads/2021/11/why-sql-consumes-so-much-memory-header.webp" alt="database" />

# SQL

## Setting Up

Set up a data server

```bash
> brew services start postgresql
```

Open an interactive postgres terminal

```bash
> psql postgres
```

Create a new database (if does not exist)

```
> postgres=# CREATE DATABASE <name_of_database>;
```

Connect to your database

```
> postgres=# \c <name_of_database>
```

Connect directly to database (if exists)

```
> psql <name_of_database>
```

Create new table

```SQL
> <database>=# CREATE TABLE <name_of_table> (col1 type_col1, col2 type_col2...);
```

For example

```SQL
> CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(30), isactive boolean, about text, birthday date, pets integer);
```

## Meta commands

```bash
# connect
> \c

# quit
> \q

# show all tables in database
> \dt

# show table schema
> \d+ <table_name>
```

## CRUD

Don't forget first to

```bash
> psql <name_of_database>
```

### **READ entry(ies)**

```SQL
> SELECT <filter> FROM <table>
```

For example

```SQL
> SELECT * FROM users
```

### **CREATE new entry**

```SQL
> INSERT INTO <table> (col1, col2, col3...) VALUES (col1_value, col2_value)
```

For example

```SQL
> INSERT INTO users (name, isactive, about, birthday, pets) VALUES ('david', true, 'I am a dad and a software developer', '1950-01-01', 3)
```

### **UPDATE entry**

```SQL
> UPDATE <table> SET col1=<new_value>, col2=<new_value> WHERE id=<id>
```

For example

```SQL
> UPDATE users SET name='David', pets=5 WHERE id=1
```

### **DELETE entry**

```SQL
> DELETE FROM <table> WHERE id=<id>
```

For example

```SQL
> DELETE FROM users WHERE id=1
```

## Queries

### LIMIT

```SQL
> SELECT * FROM users LIMIT 5;
```

### BETWEEN

```SQL
> SELECT name, birthday FROM users WHERE birthday BETWEEN '1950-01-01' and '2000-01-01';
```

### LIKE

```SQL
> SELECT name, birthday FROM users WHERE name LIKE '%om%';
```

### IS NULL & IS NOT NULL

This is great for finding "holes" in our database.

Returns all users (name & birthday fields) where the birthday col is empty.

```SQL
> SELECT name, birthday FROM users WHERE birthday IS NOT NULL;
```

Returns all users who pets field is empty.

```SQL
> SELECT name, birthday FROM users WHERE pets IS NULL;
```
