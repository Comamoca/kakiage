// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/index.tsx";
import * as $$0 from "./islands/Button.tsx";
import * as $$1 from "./islands/Counter.tsx";
import * as $$2 from "./islands/Output.tsx";
import * as $$3 from "./islands/TextArea.tsx";
import * as $$4 from "./islands/Toast.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/index.tsx": $1,
  },
  islands: {
    "./islands/Button.tsx": $$0,
    "./islands/Counter.tsx": $$1,
    "./islands/Output.tsx": $$2,
    "./islands/TextArea.tsx": $$3,
    "./islands/Toast.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
