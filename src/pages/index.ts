import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  if ((import.meta.env.GET_ROUTE_ENABLED = "true"))
    return new Response(JSON.stringify("GET route is not enebled"), {
      status: 200,
    });
  try {
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${import.meta.env.COOLIFY_API_TOKEN}` },
    };
    const uuid = new URL(request.url).searchParams.get("uuid");

    if (!uuid) throw new Error("no uuid");

    fetch(
      `https://${
        import.meta.env.COOLIFY_DOMAIN
      }/api/v1/deploy?uuid=${uuid}&force=false`,
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error("Bad response");
      })
      .catch(() => {
        return new Response(JSON.stringify("server error"), {
          status: 500,
          statusText: "internal server error",
        });
      });
    return new Response(JSON.stringify("Success, build in queue"));
  } catch (err) {
    return new Response(JSON.stringify(err.message), {
      status: 400,
      statusText: "bad request",
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const options = {
      method: "GET",
      headers: { Authorization: `Bearer ${import.meta.env.COOLIFY_API_TOKEN}` },
    };
    const uuid = new URL(request.url).searchParams.get("uuid");

    if (!uuid) throw new Error("no uuid");

    fetch(
      `https://${
        import.meta.env.COOLIFY_DOMAIN
      }/api/v1/deploy?uuid=${uuid}&force=false`,
      options
    )
      .then((response) => {
        if (response.status != 200) throw new Error("Bad response");
      })
      .catch(() => {
        return new Response(JSON.stringify("server error"), {
          status: 500,
          statusText: "internal server error",
        });
      });
    return new Response(JSON.stringify("Success, build in queue"));
  } catch (err) {
    return new Response(JSON.stringify(err.message), {
      status: 400,
      statusText: "bad request",
    });
  }
};
