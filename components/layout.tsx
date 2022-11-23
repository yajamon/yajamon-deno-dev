import { h, renderSSR, Component } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";

const ENVKEY_REPO_URL = "GITHUB_REPO_URL";

export class Footer extends Component {
  render() {
    const repoUrl = Deno.env.get(ENVKEY_REPO_URL) || "!!環境変数からの読み込みに失敗!!"
    return (
      <div>Repository URL: {repoUrl}</div>
    )
  }
}
