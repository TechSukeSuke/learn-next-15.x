"use client";

import Form from "next/form";
import SearchButton from "./ui/search-button";
import { searchAction } from "./actions";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction] = useActionState(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (prevState: any, formData: FormData) => searchAction(formData),
    { error: "" }
  );
  
  return (
    <Form action={formAction}>
      <div>
        <input type="text" name="name" />
        <SearchButton />
      </div>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </Form>
  )
}

