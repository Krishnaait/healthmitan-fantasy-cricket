# Professional Cricket Data API Endpoints

## API Key (Paid)
- **Key**: `1a822521-d7e0-46ff-98d3-3e51020863f3`
- **Provider**: Cricket Data (cricketdata.org)
- **Status**: Active & Paid

## Core Endpoints to Implement

### 1. Current Matches (Live & Upcoming)
- **Endpoint**: `/v1/currentMatches`
- **Purpose**: Fetch all live and upcoming matches
- **Parameters**: `apikey`, `offset`
- **Response**: Array of matches with current status

### 2. eCricScore (Live Scores)
- **Endpoint**: `/v1/eCricScore`
- **Purpose**: Fetch live score updates for ongoing matches
- **Parameters**: `apikey`, `matchId`
- **Response**: Real-time score data

### 3. Matches List (All Matches)
- **Endpoint**: `/v1/matches`
- **Purpose**: Fetch all matches (past, present, future)
- **Parameters**: `apikey`, `offset`
- **Response**: Comprehensive match list

### 4. Fantasy Squad
- **Endpoint**: `/v1/fantasySquad`
- **Purpose**: Fetch player squad for team building
- **Parameters**: `apikey`, `matchId`
- **Response**: Player list with fantasy points

### 5. Fantasy Scorecard
- **Endpoint**: `/v1/fantasyScorecard`
- **Purpose**: Fetch live fantasy points for players
- **Parameters**: `apikey`, `matchId`
- **Response**: Real-time player points

### 6. Series Squads
- **Endpoint**: `/v1/seriesSquads`
- **Purpose**: Fetch squad for a series
- **Parameters**: `apikey`, `seriesId`
- **Response**: Series player list

### 7. Match Info
- **Endpoint**: `/v1/matchInfo`
- **Purpose**: Fetch detailed match information
- **Parameters**: `apikey`, `matchId`
- **Response**: Complete match details

### 8. Series Info
- **Endpoint**: `/v1/seriesInfo`
- **Purpose**: Fetch series details
- **Parameters**: `apikey`, `seriesId`
- **Response**: Series information

## Data Structure

### Match Object
```json
{
  "id": "string",
  "name": "string",
  "matchStarted": boolean,
  "matchEnded": boolean,
  "status": "string",
  "team1": { "name": "string", "shortname": "string" },
  "team2": { "name": "string", "shortname": "string" },
  "date": "string (ISO 8601)",
  "venue": "string",
  "series_id": "string",
  "series": "string"
}
```

### Match Categorization Logic
- **Live**: `matchStarted === true && matchEnded === false`
- **Upcoming**: `matchStarted === false && matchEnded === false`
- **Completed**: `matchEnded === true`

## Implementation Priority
1. ✅ Current Matches (Live & Upcoming)
2. ✅ Matches List (All Matches)
3. ⏳ Fantasy Squad (For Team Builder)
4. ⏳ Fantasy Scorecard (For Live Points)
5. ⏳ Match Info (For Detailed View)
6. ⏳ Series Info (For Context)

## Notes
- All timestamps should be converted to IST (Indian Standard Time)
- Use 15-second auto-refresh for live data
- Never display mock data - always use real API responses
- Implement proper error handling for API failures
