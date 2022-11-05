import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  const content = "Hello World! Hello Deno!";
  const response = new Response(content, {
    headers: { "content-type": "text/plain" },
  });

  return response;
});
