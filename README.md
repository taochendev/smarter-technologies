# Package Sort Function

Simple JavaScript function to classify packages:

- `bulky` if volume (`width * height * length`) is `>= 1000000` or any dimension is `>= 150`
- `heavy` if mass is `>= 20`

Return values:

- `REJECTED` if both bulky and heavy
- `SPECIAL` if either bulky or heavy
- `STANDARD` if neither

## File

- `robertic-arm.js` - function implementation plus basic `console.log` tests

## Run

Use Node.js:

```bash
node robertic-arm.js
```

You will see outputs for:

- standard package
- bulky only
- heavy only
- both bulky and heavy
- exact threshold case
- very small values
