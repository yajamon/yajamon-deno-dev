import { serve } from "https://deno.land/std@0.162.0/http/server.ts";
import { h, renderSSR, Component } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";
import { CounterClass } from "./components/counter.tsx"

const content = "Hello World! Hello Deno! Hello JSX!";
const App = (props: {bundle: string}) => (
  <html>
    <head>
      <title>hello deno deploy</title>
    </head>
    <body>
      <div>{content}</div>
      <CounterClass />
      <script>
        {props.bundle}
      </script>
    </body>
  </html>
);

async function loadBundle() {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile("./dynamically/bundle.js");
  return decoder.decode(data);
}

serve(async (_req) => {
  const bundle = await loadBundle();
  const html = renderSSR(<App bundle={bundle}/>);
  const response = new Response(html, {
    headers: { "content-type": "text/html" },
  });

  return response;
});
