# Simple repro for a Cypress bug

### Steps:

- Run `yarn` to install dependencies
- Run `yarn test` to open Cypress
- Run `inputs.spec.js`

### Misc. Details

The `index.html` file contains a simplified version of what I do in my app. When you click the button, an input field (with an existing value) is created and focused. The test is then supposed to type into this input field. I expect the typed characters to be appended to the input's value.

Here are a few observations:

- The `input` field must be a `number` for the test to fail
- If I do not "force focus" the input upon creation, then the test behaves as expected, and passes.
