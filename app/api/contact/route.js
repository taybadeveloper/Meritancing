export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    if (!firstName || !lastName || !email || !phone) {
      return Response.json(
        { status: "error", message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const res = await fetch("https://meridianc-au.com/homeMailAction.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, phone }),
    });

    const data = await res.json().catch(() => ({}));

    return Response.json({
      status: data.status || (res.ok ? "success" : "error"),
      message: data.message || "",
    });
  } catch {
    return Response.json(
      { status: "error", message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
