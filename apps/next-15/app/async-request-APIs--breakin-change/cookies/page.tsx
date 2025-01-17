import { cookies } from "next/headers";
import { DeleteCookieButton, SetCookieButton } from "./button";

const AsyncRequestAPIsBreakinChangeCookies = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <div>
      <div>Cookies: {JSON.stringify(token)}</div>
      <SetCookieButton />
      <DeleteCookieButton />
    </div>
  );
};

export default AsyncRequestAPIsBreakinChangeCookies;