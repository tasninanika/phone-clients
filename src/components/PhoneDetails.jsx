import { useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h2>{phone.name}</h2>
    </div>
  );
};

export default PhoneDetails;
