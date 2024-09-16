import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");
  return <EventItem event={data.event} />;
}

export async function loaderForEventDetails({ request, params }) {
  const eventId = params.eventId;
  const url = `http://localhost:8080/events/${eventId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch the requested event" })
    );
  } else {
    const data = await response.json();
    return data;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const url = `http://localhost:8080/events/${eventId}`;
  const response = await fetch(url, {
    method: request.method,
  });
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch the requested event" })
    );
  }

  return redirect("/events");
}
