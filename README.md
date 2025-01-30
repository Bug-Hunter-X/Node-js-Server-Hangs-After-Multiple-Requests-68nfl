# Node.js Server Hanging Issue

This repository demonstrates a common issue in Node.js servers where improper error handling can lead to hangs or crashes under heavy load.  The `server.js` file contains a vulnerable server implementation, while `server-solution.js` provides a corrected version.

## Problem

The original server code introduces a 5-second delay for each request.  Under high concurrency, this can quickly lead to a backlog of requests, resulting in the server becoming unresponsive or crashing.

## Solution

The `server-solution.js` file addresses this issue by incorporating robust error handling and improved request management.  This ensures that the server can gracefully handle unexpected errors and prevent hangs.