import enabledMethods from "../utils/methods.js";
import {fetchCoolify} from '../services/Coolify.js';

/**
 * Deploy the application
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @returns {void}
 */

export const deploy = async (req, res) => {
    // Get the method
    const method = req.method;

    // Check if the method is enabled
    if (!enabledMethods.includes(method)) return res.status(405).send("Method not allowed");

    // Get the uuid from the query params
    const uuid = req.query.uuid
    const force = req.query.force || false;
    const tag = req.query.tag || false;
    const pr = req.query.pr || false;

    if (!uuid) return res.status(400).send("UUID is required");

    // Fetch the coolify api
    const response = await fetchCoolify(uuid, force, tag, pr);

    // Check if the response is ok and status is 200
    if (!response.ok || response.status !== 200) return res.status(500).send("Failed to deploy");

    // Send the success response
    res.status(200).send("Deployed");
};