import dotenv from "dotenv";

/**
 * Get the enabled methods via ENV variable
 * @returns {void}
 */

// Load environment variables
dotenv.config({
    quiet: true,
});

// Available methods
const AVAILABLE_METHODS = ["GET", "POST", "PUT", "DELETE"];

// Required ENV variables
const ENABLED_METHODS = process.env.ENABLED_METHODS;

if (!ENABLED_METHODS) {
    throw new Error("ENABLED_METHODS is not set");
}

// Get the enabled methods
const enabledMethods = ENABLED_METHODS.trim().split(",");

// Check if the enabled methods are valid
for (const method of enabledMethods) {
    if (!AVAILABLE_METHODS.includes(method)) {
        throw new Error(`Invalid method: ${method}`);
    }
}

export default enabledMethods;