import { h, hydrate } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";
import { CounterClass } from "../components/counter.tsx";

const el = document.getElementById("counter");
const component = (<CounterClass />);

if (el) {
  hydrate(component, el);
}
