
-- 1er CREATION tables sans clé étrangère :Profils,Tarifs,publics,genres,
-- CREATE SCHEMA cinema;
-- CREATE TABLE profils(
-- typeProfil VARCHAR(50) UNIQUE PRIMARY key,
-- visualisationSeance BOOLEAN  NOT NULL,
-- visualisationComptes BOOLEAN  NOT NULL,
-- modificationSeances	BOOLEAN  NOT NULL,
-- creationSeances BOOLEAN NOT NULL
--   );
-- CREATE TABLE tarifs(
-- id serial PRIMARY key,
-- designation VARCHAR(60),
-- prix int
--   );
-- CREATE TABLE publics(
-- id serial PRIMARY key,
-- designation VARCHAR(60) NOT NULL unique,
-- ageMinimum int
--   );
-- CREATE TABLE genres(
-- designation VARCHAR(60) PRIMARY KEY unique,
-- ageMinimum int
--   );
--   2 création tables avec clé étrangères avec tables asociées san clé étrangère
  
  -- CREATE TABLE utilisateurs(
  --   id serial PRIMARY key,
  --   prenom VARCHAR(60) NOT NULL,
  --   nom VARCHAR(60) NOT NULL,
  --   adressemail VARCHAR(60) NOT NULL unique,
  --   datenaissance DATE,
  --   motdepasse VARCHAR(60)
  -- ); 
  -- ALTER TABLE utilisateurs 
  -- ADD profil VARCHAR(50) not null
  -- ;
 --ALTER TABLE utilisateurs ADD FOREIGN KEY (profil) REFERENCES profils(typeProfil);
ALTER TABLE utilisateurs ALTER COLUMN datenaissance SET NOT NULL;
  