export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Username is required";
  } else if (!/([a-z])\w+/.test(input.name)) {
    errors.name = "Username is invalid";
  }
}
