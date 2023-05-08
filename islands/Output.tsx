import { JSX } from "preact";
import { markdown } from "../islands/Button.tsx";
import { Result } from "monads";

export default function Output(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const md = markdown.value;

  // HACK: Resultかどうか確認するもっと良い方法がある気がする
  try {
    md.isOk();
  } catch (e) {
    return (
      <pre>
				{md}
      </pre>
    );
  }

  return (
    <pre>
			{md.unwrap()}
    </pre>
  );
}
