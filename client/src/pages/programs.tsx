import { useState } from "react";

function Programs() {
  interface dataI {
    id: number;
    title: string;
    synopsis: string;
    poster: string;
    country: string;
    year: number;
  }
  const [data, setData] = useState<dataI[] | null>(null);

  fetch("http://localhost:3310/api/programs")
    .then((response) => response.json())
    .then((data) => setData(data));

  return (
    <>
      {data?.map((program) => (
        <figure key={program.id}>
          <h1>{program.title}</h1>
          <p>{program.synopsis}</p>
          <img src={program.poster} alt={program.title} />
          <p>
            {program.country}, {program.year}
          </p>
        </figure>
      ))}
    </>
  );
}

export default Programs;
