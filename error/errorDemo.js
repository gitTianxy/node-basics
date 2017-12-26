/**
 * 1. Error(msg)
 * 2. throw
 * 3. try-catch-finally
 */
try {
    console.log("in try-block");
    throw new Error("Error happens(in try-block)");
} catch (e) {
    console.log("in error-block");
    console.log("Error caught: ", e.message);
} finally {
    console.log("in finally-block");
}