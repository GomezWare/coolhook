import dotenv from "dotenv";

// Load environment variables
dotenv.config({
    quiet: true,
});


// Required ENV variables

const coolifyDomain = process.env.COOLIFY_DOMAIN;
const apiToken = process.env.API_TOKEN;
const useHttps = process.env.USE_HTTPS || true;
const getRouteEnabled = process.env.GET_ROUTE_ENABLED || false;

// Check if the required ENV variables are set
if (!coolifyDomain || !apiToken) {
    throw new Error("COOLIFY_DOMAIN and API_TOKEN are required");
}

/**
 * Fetch the coolify api and returns the response with the status of operation
 * @returns {Promise<Response>}
 */
export const fetchCoolify = async (uuid, force, tag, pr) => {
    // Build the URL
    const url = new URL(`${useHttps ? "https" : "http"}://${coolifyDomain}/api/v1/deploy`);
   
    // Set the UUID
    url.searchParams.set("uuid", uuid);

    // Set the parameters
    if (force) url.searchParams.set("force", "true");
    if (tag) url.searchParams.set("tag", tag);
    if (pr) url.searchParams.set("pr", pr);

    try {
    // Fetch the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiToken}`,
            },
        });
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
}