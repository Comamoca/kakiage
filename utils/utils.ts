import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
import { Err, Ok, Result } from "monads";

const comment = z.object({
  author: z.string(),
  // HACK: めんどいのでstring()で代用
  created_at: z.string(),
  body_markdown: z.string(),
}, {
  invalid_type_error: "コメントの形式が間違っています。",
});

const scrap = z.object(
  {
    title: z.string({
      invalid_type_error: "タイトルは文字列である必要があります。",
    }),
    closed: z.boolean(),
    archived: z.boolean(),
    // HACK: めんどいのでstring()で代用
    created_at: z.string(),
    comments: comment.array(),
  },
);

type Comment = z.infer<typeof comment>;
type Scrap = z.infer<typeof scrap>;

export function putMarkDown(
  json: Record<string, unknown>,
): Result<string, Err> {
  let valid_scrap: Scrap;
  try {
    valid_scrap = scrap.parse(json);
  } catch (e) {
    return Err(e);
  }

  console.log(valid_scrap.title);

  const title = `# ${valid_scrap.title}\n`;

  const comments: Comment[] = valid_scrap.comments;

  const raw_commnts = comments.map((c: Comment) => {
    return c.body_markdown;
  });

  raw_commnts.join("\n");

  return Ok(title + raw_commnts);
}

// console.log(putMarkDown({ author: "name" }).isErr());
