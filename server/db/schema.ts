import { mysqlTable, serial, varchar, timestamp, int, decimal, text } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userTeams = mysqlTable("user_teams", {
  id: serial("id").primaryKey(),
  userId: int("user_id").notNull(),
  matchId: varchar("match_id", { length: 255 }).notNull(),
  teamName: varchar("team_name", { length: 255 }).notNull(),
  captainId: varchar("captain_id", { length: 255 }).notNull(),
  viceCaptainId: varchar("vice_captain_id", { length: 255 }).notNull(),
  totalPoints: decimal("total_points", { precision: 10, scale: 2 }).default("0.00"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const teamPlayers = mysqlTable("team_players", {
  id: serial("id").primaryKey(),
  userTeamId: int("user_team_id").notNull(),
  playerId: varchar("player_id", { length: 255 }).notNull(),
  playerName: varchar("player_name", { length: 255 }).notNull(),
  playerRole: varchar("player_role", { length: 50 }),
  playerTeam: varchar("player_team", { length: 100 }),
});

export const contests = mysqlTable("contests", {
  id: serial("id").primaryKey(),
  matchId: varchar("match_id", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  entryFee: decimal("entry_fee", { precision: 10, scale: 2 }).default("0.00"),
  prizePool: decimal("prize_pool", { precision: 10, scale: 2 }).default("0.00"),
  maxEntries: int("max_entries").default(100),
  currentEntries: int("current_entries").default(0),
  status: varchar("status", { length: 50 }).default("upcoming"),
});

export const contestEntries = mysqlTable("contest_entries", {
  id: serial("id").primaryKey(),
  contestId: int("contest_id").notNull(),
  userId: int("user_id").notNull(),
  userTeamId: int("user_team_id").notNull(),
  joinedAt: timestamp("joined_at").defaultNow(),
});
