Purpose: 
Simulates an AI expense categorization API without needing real backend or API keys.

How it works:
- Takes expense description and amount
- Uses keyword matching (e.g., "food" → "Food")
- Returns category + confidence score
- 600ms delay to mimic real API
- Callback-based (asynchronous)

Categories Supported:
- Food
- Transport
- Entertainment
- Bills
- Other (default)

Used in SpendSmart to auto-tag expenses.
