### Close PORT properly
```sh
sudo lsof -i :portNumber
kill -9 PID
```

### Install Deps
```sh
npm install
```

### Start Server
```sh
DATABASE_URL=postgresql://postgres:POSTGRES_PASSWORD@localhost:5432/study-sync PORT=4567 npm start
```

### Rum Postgres Server
```sh
docker compose up
```

### Install postgres client
```sh
brew install postgresql@16
brew install pgcli
```

### Create initial database
```sh
createdb study-sync -h localhost -U postgres
```

### Connect to Postgres Client
```sh
psql postgresql://postgres:POSTGRES_PASSWORD@localhost:5432/study-sync
```

### Create Schema
```sh
psql study-sync < sql/schema.sql -h localhost -U postgres
```

### Import data
```sh
psql study-sync < sql/seed.sql -h localhost -U postgres
```

### Verify data
```sh
psql postgresql://postgres:POSTGRES_PASSWORD@localhost:5432/study-sync
```

```sql
SELECT * FROM questions;
```
