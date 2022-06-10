CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "allViewers"  INT NOT NULL,
  "password" TEXT NOT NULL 
);

CREATE TABLE "links" (
  "id" SERIAL PRIMARY KEY,
  "fullLin" TEXT NOT NULL,
  "smallLink" TEXT NOT NULL,
  "viewers"  INT NOT NULL,
  "createdAt" DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE "linksDoUser" (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER REFERENCES users(id),
  "linksId" INTEGER REFERENCES links(id)
);