import React from "react";

const Featured = () => (
  <div className="mb-10 border shadow p-6">
    <h2 className="text-xl font-bold">
      Featured: COVID-19 Solidarity Response Fund for WHO
    </h2>

    <p className="mt-4">
      Donations support WHO’s work to track and understand the spread of the
      virus; to ensure patients get the care they need and frontline workers get
      essential supplies and information; and to accelerate efforts to develop
      vaccines, tests, and treatments.
    </p>

    <p className="mt-4">
      <a
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate Here
      </a>
    </p>
  </div>
);

export default Featured;
