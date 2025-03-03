import { forbidden } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: Promise<{ isError: "true" | "false" }> }) {
  const { isError = "false" } = await searchParams;

  if (isError === "true") {
    forbidden();
  }

  return (
    <div>
      Page that can be able to use forbidden API. <br />
      If you test forbidden API, please add `?isError=true` to the URL.
    </div>
  );
}
