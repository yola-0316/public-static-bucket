import "./index.css";
import App from "./containers/App.svelte";

let app = new App({
  target: document.getElementById("root"),
});

export default app;

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
