---
"@deepprediction/rrweb": patch
---

Ensure we don't attempt to replay media events (.play()/.pause()) against elements which aren't media events - e.g. squarespace does this
