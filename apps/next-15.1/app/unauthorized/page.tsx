import { unauthorized } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: Promise<{ isError: "true" | "false" }> }) {
  const { isError = "false" } = await searchParams;

  if (isError === "true") {
    unauthorized();
  }

  return (
    <div>
      Page that can be able to use unauthorized API. <br />
      If you test unauthorized API, please add `?isError=true` to the URL.
    </div>
  );
}
