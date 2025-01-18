import { headers } from "next/headers";

const AsyncRequestAPIsBreakinChangeHeaders = async () => {
  const headersList = await headers()
  return <div>Headers: {JSON.stringify(headersList)}</div>;
};

export default AsyncRequestAPIsBreakinChangeHeaders;
