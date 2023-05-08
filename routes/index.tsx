import { Head } from "$fresh/runtime.ts";
import TextArea from "../islands/TextArea.tsx";
import Button from "../islands/Button.tsx";
import Toast from "../islands/Toast.tsx";
import Output from "../islands/Output.tsx";

// TODO:
// ScrapのAuthorと別のAuthorがしたコメントは引用形式に変換する
// 出力部分を整える(モーダルも良いかもしれない)
// Zodがthowしたエラーを通知として表示する

export default function Home() {
  return (
    <>
      <Head>
        <title>Kakiage</title>
      </Head>
      <h1 class="m-4 text-4xl">Zennのスクラップをまとめるやつ</h1>
      <div class="flex flex-row-reverse">
        <Toast text="Jsonの形式が正しくありません。" />
      </div>
      <div class="m-4">
        <TextArea placeholder={"ここにScrapのJSONを貼り付け"} rows={30} />
      </div>
      <div class="flex justify-center m-3">
        <Button text={"まとめる"} />
      </div>
      <div class={"flex justify-center m-3"}>
      </div>
      <div class="m-3">
        <Output />
      </div>
    </>
  );
}
