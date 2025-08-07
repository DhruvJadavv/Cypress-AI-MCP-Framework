
# Main AI Agent - QA Workflow Orchestrator

## Overview
This repository contains an intelligent QA Workflow Orchestrator designed to streamline and automate the end-to-end QA process for Cypress-based test automation. The Main AI Agent guides users through a clear, step-by-step workflow, handling test case generation, automation script creation, test execution, and result updates.

## What do the AI agent prompts do and how do they work?

- **Main-AI-Agent.txt:** The orchestrator prompt. It presents a menu of QA actions (generate test cases, generate automation scripts, run tests, update results, or generate API scripts). When you select an action, the agent immediately performs the corresponding step, handling all files and logic internally. Each step is performed only when requested, ensuring a controlled and automated workflow.

- **TestCaseGenerator.txt:** Generates 2–4 automation test cases in CSV format based on user requirements or feature descriptions. Each test case includes fields like ID, title, preconditions, steps, expected result, priority, type, and status. All test cases are logged into `saucedemo_test_cases.csv`.

- **AutomationAgent.txt:** Integrates Playwright MCP Server with Cypress. It:
  1. Starts a Playwright MCP codegen session (not headless).
  2. Reads each test case from `saucedemo_test_cases.csv`.
  3. Executes each test case using the Playwright MCP Server, validating scenarios as they run.
  4. Finalizes codegen, then uses the generated Playwright code (in `temp_codegen`) as a reference.
  5. Transpiles the Playwright code into Cypress test scripts (JavaScript) and plugs them into the existing Cypress framework.
  All browser automation must go through the MCP Server—no simulation or bypassing.

- **APIAgent.txt:** Handles API-based automation using Playwright MCP and Cypress. It:
  1. Parses a user-provided cURL command to extract method, URL, headers, and body.
  2. Executes the API request using Playwright MCP tools and logs the request/response.
  3. Generates a Cypress API test (using `cy.request`) based on the actual MCP response, with assertions for status and key fields.
  4. Saves the generated Cypress test in `/api-tests` with a filename based on the endpoint.
  No API test is generated until the MCP API execution returns valid data—no guessing or fabricating responses.

Each agent prompt is designed to handle a specific part of the QA workflow. The Main-AI-Agent coordinates the process, while the sub-prompts (TestCaseGenerator, AutomationAgent, APIAgent) focus on their specialized tasks, including Playwright MCP integration. All prompts work together to automate and streamline the QA process from test case creation to execution and result tracking.

## How does the workflow work?
When you start the Main-AI-Agent, it asks you to choose one of several QA actions:

1. **Execute Test Case Generation:** Runs the TestCaseGenerator prompt to create 2–4 test cases from your requirements.
2. **Generate Automation Script:** Uses the AutomationAgent prompt to turn those test cases into Cypress automation scripts.
3. **Run Cypress Tests:** Executes the generated Cypress test scripts in headless mode and checks the results.
4. **Update Test Results:** Updates the `saucedemo_test_cases.csv` file with Pass/Fail status for each test case based on the test execution.
5. **Generate API Automation Script:** Uses the APIAgent prompt to generate API automation scripts from a user-provided Curl command.

After you select an action, the agent immediately performs that step—handling all files, prompts, and results internally. Each step is done only when you request it, and the agent does not skip steps or assume input. This ensures a clear, controlled, and automated QA workflow.

## Features
- **Interactive Workflow Selection:** Prompts the user to choose from main QA actions.
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
***

