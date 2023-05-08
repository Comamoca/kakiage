import { JSX } from "preact";
import { text } from "./TextArea.tsx";
import { putMarkDown } from "../utils/utils.ts";
import { computed, signal } from "@preact/signals";
import { type Result } from "monads";

export const toMarkDown: Result = computed(() =>
  putMarkDown(JSON.parse(text.value))
);
// signalsの初期値をResultにする
export const markdown: Result = signal("");

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
        onClick={() => {
          // console.log(putMarkDown(JSON.parse(text.value)));
          markdown.value = toMarkDown.value;
          // 変換に失敗(Zodのバリデーションエラー)が発生した際にsignalsでエラーを伝搬する
          // ただし、signalsは単純な値しか伝搬する事が出来ないので可能かどうか不透明
          // もしエラーの格納が不可能だった場合は、(かなりバギーだけど)特定文字列をsignalsに格納し、それを受信側で判定することにより判断させる
          console.log("button", toMarkDown.value);
        }}
      >
        {props.text}
      </button>
    </>
  );
}
