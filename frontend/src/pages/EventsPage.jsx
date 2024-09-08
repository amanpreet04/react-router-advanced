import EventsList from "../components/EventsList";

function EventsPage() {
  return <EventsList />;
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Some suitable error message" })
    );
  } else {
    return response;
  }
};

export default EventsPage;
