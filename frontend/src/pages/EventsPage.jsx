import EventsList from "../components/EventsList";

function EventsPage() {
  return <>{<EventsList />}</>;
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export default EventsPage;
