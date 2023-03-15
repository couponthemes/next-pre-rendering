import { useRouter } from "next/router";
import { useState } from "react";

function EventList({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  const fetchAllEvents = () => {
    setEvents(eventList);
    router.push("/events", undefined, { shallow: true });
  };

  return (
    <>
      <h1>List of Events</h1>
      <div>
        <button onClick={fetchSportsEvents}>Sports Events</button>
        <button onClick={fetchAllEvents}>All Events</button>
      </div>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.category.toUpperCase()} | {event.id} {event.title}{" "}
              {event.date}{" "}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category${query.category}` : " ";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
