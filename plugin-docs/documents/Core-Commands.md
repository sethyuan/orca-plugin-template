[**Orca API Documentation**](../README.md)

***

[Orca API Documentation](../modules.md) / Core Commands

# Core Commands

## Introduction

This document provides a comprehensive list of core commands available in Orca. These commands control various aspects of the application, including theme management, navigation, panel operations, layout, and more. Each command can be triggered through the command palette or keyboard shortcuts configured in the settings.

Commands are invoked by calling the `orca.commands.invokeCommand` function. Commands that operate inside an editor are documented in [Core Editor Commands](Core-Editor-Commands.md).

## Commands

### Global Commands

- `core.global.toggleWindow`

  - Description: Toggles the application window visibility
  - Parameters: None

- `core.global.quickNote`

  - Description: Shows window and takes a quick note in today's journal
  - Parameters: None

### Theme and UI Commands

- `core.toggleThemeMode`

  - Description: Toggles between light and dark theme modes
  - Parameters: None

### Sidebar Commands

- `core.openSidebar`

  - Description: Opens the sidebar
  - Parameters: None

- `core.closeSidebar`

  - Description: Closes the sidebar
  - Parameters: None

- `core.toggleSidebar`

  - Description: Toggles the sidebar's visibility
  - Parameters: None

- `core.sidebar.goFavorites`

  - Description: Navigates to the favorites tab in the sidebar
  - Parameters: None

- `core.sidebar.goTags`

  - Description: Navigates to the tags tab in the sidebar
  - Parameters: None

- `core.sidebar.goPages`

  - Description: Navigates to the pages tab in the sidebar
  - Parameters: None

### Panel Management

- `core.closePanel`

  - Description: Closes the current active panel
  - Parameters: None

- `core.closeOtherPanels`

  - Description: Closes all panels except the current one
  - Parameters: None

- `core.switchToNextPanel`

  - Description: Switches focus to the next panel
  - Parameters: None

- `core.switchToPreviousPanel`
  - Description: Switches focus to the previous panel
  - Parameters: None

### Navigation Commands

- `core.goBack`

  - Description: Navigates back in history
  - Parameters: None

- `core.goForward`

  - Description: Navigates forward in history
  - Parameters: None

- `core.goToday`

  - Description: Goes to today's journal
  - Parameters: None

- `core.goYesterday`

  - Description: Goes to yesterday's journal
  - Parameters:
    - `openAside`: boolean (optional) - If true, opens in a new panel

- `core.goTomorrow`

  - Description: Goes to tomorrow's journal
  - Parameters:
    - `openAside`: boolean (optional) - If true, opens in a new panel

- `core.openTodayInPanel`
  - Description: Opens today's journal in a new panel
  - Parameters: None

### Application Commands

- `core.closeWindow`

  - Description: Closes the current window
  - Parameters: None

- `core.quitApp`

  - Description: Quits the application
  - Parameters: None

- `core.openSettings`

  - Description: Opens the settings panel
  - Parameters: None

- `core.openSearch`

  - Description: Opens the global search
  - Parameters: None

- `core.openCommandPalette`

  - Description: Opens the command palette
  - Parameters: None

- `core.openWebViewModal`

  - Description: Opens the browser view modal
  - Parameters:
    - `url`: string (optional) - The URL to load in the WebView

- `core.checkForUpdates`

  - Description: Checks for application updates and shows the update dialog
  - Parameters: None

- `core.openPluginMarketplace`

  - Description: Opens the plugin marketplace
  - Parameters: None

- `core.openRepoSwitcher`

  - Description: Opens the repo switcher
  - Parameters: None

- `core.notify`

  - Description: Displays a notification
  - Parameters:
    - `type`: "info" | "success" | "warn" | "error" - The notification type
    - `message`: string - The notification message
    - `title`: string (optional) - The notification title
    - `actionCommand`: string (optional) - The command to invoke when the notification action is clicked

### Clipboard Commands

These commands copy the current editor selection into Orca's clipboard buffer so that a following paste command (for example `core.editor.pasteAsMove` or `core.editor.pasteAsCopy`) can reuse it. They are plain commands, not editor commands: they take no editor context argument, they operate on the active panel, and they are not undoable.

- `core.editor.copySelection`

  - Description: Copies the current selection (blocks, or the content of a single block) into Orca's clipboard buffer
  - Parameters: None

- `core.editor.copySelectionForMove`

  - Description: Copies the current selection into Orca's clipboard buffer and marks it for a later move (cut and paste)
  - Parameters: None

### Panel Operations

- `core.panel.showRecents`

  - Description: Shows recent editors in the current panel
  - Parameters: None

- `core.panel.toggleLock`

  - Description: Toggles panel locking
  - Parameters:
    - `id`: string (optional) - Panel ID, defaults to active panel

- `core.panel.toggleWideView`
  - Description: Toggles wide view mode for the panel
  - Parameters:
    - `id`: string (optional) - Panel ID, defaults to active panel

- `core.panel.toggleMaximize`

  - Description: Toggles whether the panel is maximized; does nothing when there is only one panel
  - Parameters:
    - `id`: string (optional) - Panel ID, defaults to active panel

- `core.panel.split`

  - Description: Splits the current panel and opens a new panel on its right, then switches focus to it
  - Parameters: None - it targets the panel of the editor context it is invoked from

### Asset Management

- `core.assets.cleanUnused`
  - Description: Cleans up unused assets
  - Parameters: None

### Search and Index

- `core.rebuildIndex`
  - Description: Rebuilds the search index
  - Parameters: None

- `core.rebuildAllBlocksIndexText`
  - Description: Rebuilds the index text for all blocks and then rebuilds the search index
  - Parameters: None

### S3 Sync Commands

- `core.s3.sync`
  - Description: Performs S3 synchronization
  - Parameters:
    - `interruptive`: boolean (default: true) - Shows interactive dialogs
    - `initial`: boolean (default: false) - Initial sync flag
    - `followMouse`: boolean (default: true) - Position dialogs near mouse cursor

### Layout Commands

- `core.layout._default`
  - Description: Applies the default layout
  - Parameters: None

Additional layout commands are dynamically registered based on saved layouts in settings.

### Preview Commands

- `core.enableInteractivePreview`
  - Description: Enables interactive preview mode
  - Parameters: None

### AI Commands

These commands are meant for AI agents (the in-app assistant's `call_commands` tool and the MCP `invoke_commands` tool). They take arguments, so they are not listed in the command palette, and they can return data to the caller.

- `core.ai.getBlocks`
  - Description: Reads blocks and returns a JSON view of them. It is a read-only wrapper around the `get-blocks` backend call: nothing is stored in the editor's state and no undo step is created.
  - Parameters:
    - `blockIds`: number | number[] (required) - The blocks to read.
    - `opts`: object (optional)
      - `maxBlocks`: number (default: 500, at most: 1000) - How many block IDs are read per call.
      - `includeContent`: boolean (default: false) - Also return the raw content fragments (debugging aid; far more verbose).
  - Returns:
    ```json
    {
      "success": true,
      "count": 1,
      "blocks": [
        {
          "id": 1000,
          "type": "heading",
          "text": "Title",
          "parent": 999,
          "children": [1001],
          "aliases": ["/pages/title"],
          "tags": ["Project"],
          "links": [1002],
          "properties": {
            "Status": "done",
            "_repr": { "type": "heading", "level": 2 }
          }
        }
      ],
      "missingIds": [123],
      "truncated": false
    }
    ```
  - Notes:
    - `properties` keeps `_repr` (the block's type and its type-specific fields). Values stay structured (`Date` → ISO string).
    - Empty fields are omitted, so `text`, `children`, `aliases`, `tags`, `links` and `properties` only appear when the block has them.
    - `text` is the block's own text plus its tag property values; a property that points at a block contributes the **target block ID**.
    - `links` are the targets of inline references.
    - `missingIds` lists requested IDs that have no block, `truncated` is set when the input was cut to `maxBlocks`.
    - Invalid input is answered with `{ "success": false, "error": "…" }` instead of a failed command.
    - Only `block` and `journal` panels have an editor, so run it in one of those (otherwise the caller gets `skipped` / `panel_has_no_editor`).
