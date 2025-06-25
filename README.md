# Experimental Playwright Test Suite

This repository contains automated end-to-end tests using [Playwright](https://playwright.dev/).  
Test scenarios are organized in the following files:

- `1-financial-services.spec.ts` — Scenario 1: [
    - verify if every element of section is visible
    - verify redirection from card and button perspective
]
- `2-audit-redirect.spec.ts` — Scenario 2: [
    - verify redirection from Products -> Finance & ESG -> ESG KPI Engine
]
- `3-redirect-work-email.spec.ts` — Scenario 3: [
    - verify `Get in touch` flow
    - verify email input FE validation
]

Made for recruitment process as well as exploring some ideas:
- page composition from sections
- diving classes as soon as possible
- check all elements per page method
- one export (utils, test data) -> all necessary methods and data inside
- seeking to minimize redundancy and boilerplate code at the very beginning

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Slawcio/playwright-tests.git
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

### Running Tests

To run all tests:
```sh
npx playwright test
# or
npm run test
```

To run with tags
```sh
npx playwright test --grep @my_tag
#or
npm run test --grep @my_tag
```

To run a specific scenario:
```sh
npx playwright test 1-financial-services.spec.ts
npx playwright test 2-audit-redirect.spec.ts
npx playwright test 3-redirect-work-email.spec.ts
#or
npm run test ...
```

### Test Structure

- All test scenarios are located in the root or `tests/e2e` directory.
- Each `.spec.ts` file contains one or more related test cases.

### TS Linting and Formatting

...in progress