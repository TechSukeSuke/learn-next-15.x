import { headers } from "next/headers";

const AsyncRequestAPIsBreakinChangeHeadersPage = async () => {
  const headersList = await headers()
  return <div>Headers: {JSON.stringify(headersList)}</div>;
};

export default AsyncRequestAPIsBreakinChangeHeadersPage;
