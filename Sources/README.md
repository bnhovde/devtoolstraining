# Sources tab

The sources tab is incredibly useful for debugging JS.

- Finding bugs
- Following the application execution
- Observing variables
- Finding memory leaks

### Contents

- Terminology
- Finding your code
    - CMD + P
    - Source maps
    - Unminify
- Debugging
    - Stepping
    - DEBUGGER
    - Watch
    - Call stack
    - XHR breakpoints
    - DOM breakpoints
    - Event listener breakpoints
    - Copy variable to clipboard
- Debugging on devices
- Snippets
- Useful tips


## Terminology

- Synchronous code: JavaScript runs on a single thread, synchronously, line by like from top to bottom.
- Call stack: The call stack illustrates the order of execution.
- Breakpoints: Pause code execution at a certain point/line.

#### Suggested reading:
- https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

## Finding your code

- Open the sources tab
- Browse files in the sidebar
- CMD + P, enter file name (req sourcemaps)
- Format brackets

## Debugging

- Add breakpoint and refresh
- Step into, step over
- Watch a variable
- Inspect closure contents
- Restart Frame

#### Suggested reading:
- https://developers.google.com/web/tools/chrome-devtools/javascript/

## Debugging on devices

- Connect an android phone via chrome://devices
- Port forwarding
- Inspect on device

## Snippets

- Create and run useful code snippets on any website

## Tips

- Use console.table to print out array/object contents
- Use "make global variable" to copy the contents of a variable to the clipboard