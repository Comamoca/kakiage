import { JSX } from "preact";
import { markdown } from "./Button.tsx";
import { text } from "./TextArea.tsx";

// トーストのコンポーネント
// markdownの解析結果が入っているmarkdown変数を参照し、
// その結果に応じてエラーを表示する

// invisibleを有効にすると要素が非表示になる
// それを利用して、Preactでクラスを制御することで表示・非表示を切り替える事ができる
export default function Toast(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  // トーストの可視性を制御する変数
  // 通常はfalse
  let isVisible = false;

  // Result型を保持しているmaekdown変数から結果を取り出す
  try {
    console.log(markdown.value.isOk());
    if (markdown.value.isOk()) {
      isVisible = false;
    } else if (text.value == "") {
      // ただし空白の場合は表示させない(初期値も含むため)
      console.log("toast", text.value);
      isVisible = false;
    }
  } catch {
    // HACK: エラーを潰す
    // もっと良い方法を考える
    isVisible = true;
  }

  // isVisibleがfalseのときトーストを非表示にする
  const visible_style = (() => {
    if (isVisible) {
      // 表示する
      return "";
    } else {
      // 表示しない
      return " invisible ";
    }
  })();

  return (
    <div
      id="toast-danger"
      class={"flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow m-3" +
        visible_style}
      role="alert"
    >
      <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg">
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          >
          </path>
        </svg>
        <span class="sr-only">Error icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">{props.text}</div>
    </div>
  );
}
