import type { APIRoute } from "astro";

// Get API Route (You can enable it via dotenv)
export const GET: APIRoute = async ({ request }) => {
  // Check if route is enabled
  if ((import.meta.env.GET_ROUTE_ENABLED = "false"))
    // Return 200 response
    return new Response(JSON.stringify("GET route is not enabled"), {
      status: 200,
    });
  try {
    // Build fetch headers (Get your apitoken from coolify API tokens)
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${import.meta.env.COOLIFY_API_TOKEN}` },
    };

    // Get the project uuid via url params
    const uuid = new URL(request.url).searchParams.get("uuid");

    // If not uuid suplied throw an error
    if (!uuid) throw new Error("no uuid");

    // Fetch to coolify Webhook triggers
    fetch(
      // Build the URL
      `https://${
        import.meta.env.COOLIFY_DOMAIN
      }/api/v1/deploy?uuid=${uuid}&force=false`,
      options
    )
      .then((response) => {
        // Check if response is good
        if (response.status != 200) throw new Error("Bad response");
      })
      .catch(() => {
        // Return a 500 response in case response wasnt good
        return new Response(JSON.stringify("server error"), {
          status: 500,
          statusText: "internal server error",
        });
      });

    // If all ok return 200 response
    return new Response(JSON.stringify("Webhook trigger sended, good luck!"));
  } catch (err) {
    // If there is an error in validation/petition send 400 response
    return new Response(JSON.stringify(err.message), {
      status: 400,
      statusText: "bad request",
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Build fetch headers (Get your apitoken from coolify API tokens)
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${import.meta.env.COOLIFY_API_TOKEN}` },
    };

    // Get the project uuid via url params
    const uuid = new URL(request.url).searchParams.get("uuid");

    // If not uuid suplied throw an error
    if (!uuid) throw new Error("no uuid");

    // Fetch to coolify Webhook triggers
    fetch(
      // Build the URL
      `https://${
        import.meta.env.COOLIFY_DOMAIN
      }/api/v1/deploy?uuid=${uuid}&force=false`,
      options
    )
      .then((response) => {
        // Check if response is good
        if (response.status != 200) throw new Error("Bad response");
      })
      .catch(() => {
        // Return a 500 response in case response wasnt good
        return new Response(JSON.stringify("server error"), {
          status: 500,
          statusText: "internal server error",
        });
      });

    // If all ok return 200 response
    return new Response(JSON.stringify("Webhook trigger sended, good luck!"));
  } catch (err) {
    // If there is an error in validation/petition send 400 response
    return new Response(JSON.stringify(err.message), {
      status: 400,
      statusText: "bad request",
    });
  }
};
