import { treact } from "@treact";
import { App } from "./app";

const root = document.getElementById("root") || document.body;

document.addEventListener("DOMContentLoaded", () => {
	const app = App({});
	if (app) {
		treact.render(app, root);
	}
});
