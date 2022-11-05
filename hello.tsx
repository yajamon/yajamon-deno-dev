/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.162.0/http/server.ts";
import { h, renderSSR, Component } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";

class CounterClass extends Component {
  count = 0;

  render(){
    return (
      <div>
        「{this.count}」
      </div>
    );
  }
}

const content = "Hello World! Hello Deno! Hello JSX!";
const App = () => (
  <html>
    <head>
      <title>hello deno deploy</title>
    </head>
    <body>
      <div>{content}</div>
      <CounterClass />
    </body>
  </html>
);

serve((_req) => {
  const html = renderSSR(<App />);
  const response = new Response(html, {
    headers: { "content-type": "text/html" },
  });

  return response;
});
