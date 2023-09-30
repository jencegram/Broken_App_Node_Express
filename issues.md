# Broken App Issues

1. Middleware Missing - req.body is 'undefined' since there is no body-parser middleware

2. Async Operations - utilizing .map() with asynch/await caused the array of promises for API requests to not be awaited

3. Error Handling - 'err' was not defined in th e catch block, leading to a reference error

