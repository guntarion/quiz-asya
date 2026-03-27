---
description: Create a quiz from user-provided material (text, file, or topic)
argument-hint: <material-or-file-path>
---

# Create Quiz from Material

The user wants to create a quiz from the provided material: `$ARGUMENTS`

## Step 1: Gather Info

If it's a file path, read the file first. If it's raw text or a topic, use it directly.

Ask the user (if not already clear from the arguments):
1. **Which category?** (toons, twisted-toons, cookies-npc, gacha-treasures, stories-game-modes, misc, metal-cardbot)
2. **Quiz title?**
3. **How many questions?** (default: 15)

## Step 2: Delegate to quiz-creator agent

Once you have the material and the answers above, launch the `quiz-creator` agent with a prompt containing:
- The full source material (text content, not just a file path — read the file first if needed)
- The target category
- The quiz title
- The number of questions

The agent will generate the quiz data, write it to the correct data file, register it in the app, and verify the build.

## Step 3: Report

After the agent completes, summarize to the user:
- Quiz ID and title
- Number of questions with difficulty breakdown
- Files modified
- Playable URL: `/{category}/{quiz-id}`
