# Figma MCP config reference

Use this snippet to register the Figma MCP server in Cursor as a project-level streamable HTTP MCP server with bearer auth pulled from your env.

## Project config file

Create or update `.cursor/mcp.json` in the project root.

## Configuration Example

```json
{
  "mcpServers": {
    "figma": {
      "type": "streamableHttp",
      "url": "https://mcp.figma.com/mcp",
      "headers": {
        "Authorization": "Bearer $FIGMA_OAUTH_TOKEN",
        "X-Figma-Region": "us-east-1"
      }
    }
  }
}
```

## Notes and options

- The bearer token must be available as `FIGMA_OAUTH_TOKEN` in the environment that launches Cursor.
- Keep the region header aligned with your Figma region. If your org uses another region, update `X-Figma-Region` consistently.
- If your Cursor version requires extra MCP feature flags, enable them before testing.
- You can also place the same config in a global `~/.cursor/mcp.json` if you want it available across all projects.

## Env var setup (if missing)

- One-time set for current shell: `export FIGMA_OAUTH_TOKEN="<token>"`
- Persist for future sessions: add the export line to your shell profile (e.g., `~/.zshrc` or `~/.bashrc`), then restart the shell or your IDE.
- Verify before launching your agent: `echo $FIGMA_OAUTH_TOKEN` should print a non-empty token.

## Setup + verification checklist

- Add the MCP server configuration to `.cursor/mcp.json`.
- Restart Cursor after updating the config or env vars.
- Ask the agent to list MCP tools or run a simple Figma call to confirm the server is reachable.

## Troubleshooting

- Token not picked up: Export `FIGMA_OAUTH_TOKEN` in the same environment that launches Cursor, or add it to your shell profile and restart Cursor.
- OAuth errors: Verify the bearer token is valid. Tokens copied from Figma should not include surrounding quotes.
- Network/headers: Keep the `X-Figma-Region` header; if your org uses another region, update the header consistently across config and requests.

## Usage reminders

- The server is link-based: copy the Figma frame or layer link, then ask the MCP client to implement that URL. The client will extract the node ID from the link (it does not browse the page).
- If output feels generic, restate the project-specific rules from the main skill and ensure you follow the required flow (`get_design_context` -> `get_metadata` if needed -> `get_screenshot`).
