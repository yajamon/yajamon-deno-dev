import { h, Component } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";

export class CounterClass extends Component {
  count = 0;
  countUp() {
    this.count += 1;
    this.update();
  }

  render(){
    return (
      <div>
        「{this.count}」
        <button onClick={()=>this.countUp()} >Count Up</button>
      </div>
    );
  }
}
