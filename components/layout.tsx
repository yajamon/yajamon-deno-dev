import { h, Fragment, renderSSR, Component } from "https://deno.land/x/nano_jsx@v0.0.34/mod.ts";

const ENVKEY_REPO_URL = "GITHUB_REPO_URL";

export class Footer extends Component {
  render() {
    const repoUrl = Deno.env.get(ENVKEY_REPO_URL);
    const repoUrlContent = repoUrl ? (<Fragment>Repository URL: <a href={repoUrl}>{repoUrl}</a></Fragment>) : (<Fragment>!!環境変数からの読み込みに失敗!!</Fragment>);
    return (
      <div>{repoUrlContent}</div>
    )
  }
}
