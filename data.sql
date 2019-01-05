-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" SERIAL PRIMARY KEY,
  "feeling" VARCHAR(20) NOT NULL,
  "understanding" VARCHAR(20) NOT NULL,
  "support" VARCHAR(20) NOT NULL,
  "comments" VARCHAR(200) NOT NULL,
  "flagged" BOOLEAN DEFAULT FALSE,
  "date" DATE DEFAULT CURRENT_DATE
);
