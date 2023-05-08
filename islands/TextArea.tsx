import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";

export const text = signal("");

export default function TextArea(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <textarea
      id="message"
      rows={props.rows}
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
      placeholder={props.placeholder}
      onKeyUp={(e) => {
        text.value = e.target.value;
        // console.log(e.target.value);
      }}
    >
    </textarea>
  );
}
