import { useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2>Phones here: {phones.length}</h2>
    </div>
  );
};

export default Phones;
