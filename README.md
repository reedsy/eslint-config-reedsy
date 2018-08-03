# eslint-config-reedsy

This is a set of common [`eslint`][1] rules for use across JavaScript projects. Using a common set of rules improves
consistent code style across the organisation; enforces best practices; and can help to avoid common pitfalls and
anti-patterns.

## Installation

Install this package like any other of our private packages, by updating `package.json` eg:

```json
{
  "devDependencies:" {
    "@reedsy/eslint-config-reedsy": "git+ssh://git@github.com/reedsy/eslint-config-reedsy#1.0.0"
  }
}
```

You'll also need to install the peer dependencies:

```bash
npm i eslint eslint-plugin-import --save-dev
```

## Usage

Install the package, and then update your `.eslintrc` like so:

```json
{
  "extends": "@reedsy/eslint-config-reedsy"
}
```

You can then run `eslint` like normal, for example:

```bash
eslint src/**/*.js
```

## Overriding rules

**Think carefully about overriding rules**. Overriding will cause our code style to drift between repositories. If a
genuine case can be made for changing a rule, it should probably be made in this repository, so that it is shared
between all of the other repos that use it.

If you **absolutely, positively, must** override rules, simply use the normal syntax:

```json
{
  "extends": "@reedsy/eslint-config-reedsy",
  "rules": {
    "no-underscore-dangle": "error"
  }
}
```


[1]: https://eslint.org/
