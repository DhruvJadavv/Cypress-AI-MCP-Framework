# Main AI Agent - QA Workflow Orchestrator

## Overview
This repository contains an intelligent QA Workflow Orchestrator designed to streamline and automate the end-to-end QA process for Cypress-based test automation. The Main AI Agent guides users through a clear, step-by-step workflow, handling test case generation, automation script creation, test execution, and result updates.

## Features
- **Interactive Workflow Selection:** Prompts the user to choose from four main QA actions.
- **Test Case Generation:** Uses `TestCaseGenerator.txt` to generate 2–4 test cases based on user requirements.
- **Automation Script Generation:** Uses `AutomationAgent.txt` to convert generated test cases into Cypress automation scripts.
- **Cypress Test Execution:** Runs generated Cypress test scripts in headless mode.
- **Test Results Update:** Updates `saucedemo_test_cases.csv` with Pass/Fail status based on execution results.

## Workflow Steps
1. **Execute Test Case Generation**
   - Generates test cases using the provided prompt file.
2. **Generate Automation Script**
   - Creates Cypress scripts from generated test cases.
3. **Run Cypress Tests**
   - Executes Cypress tests in headless mode.
4. **Update Test Results**
   - Updates the test case CSV file with results.

Each step is performed only when selected by the user, ensuring a clear and controlled workflow.

## Repository Structure
```
cypress.config.js
Main-AI-Agent.txt
package.json
saucedemo_test_cases.csv
cypress/
  downloads/
  e2e/
    TC_01_login_logout.cy.js
    api-tests/
  fixtures/
  support/
    commands.js
    e2e.js
prompt-repo/
  APIAgent.txt
  AutomationAgent.txt
  TestCaseGenerator.txt
temp_codegen/
  tc_01_*.spec.ts
```

## How to Use
1. Open `Main-AI-Agent.txt` and follow the prompt to select your desired action (1–4).
2. The agent will automatically perform the selected step, handling all required files and logic internally.
3. Results and updates are managed as per the workflow.

## Important Notes
- Each step must be executed separately and sequentially.
- Do not skip steps or assume input.
- All prompts, files, and results are handled internally by the agent.

## Requirements
- Node.js
- Cypress

