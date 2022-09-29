import "./bootstrap";

import { createApp } from "vue";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

const sApp = createApp({
    render: renderSpladeApp({ el })
})

sApp.use(SpladePlugin, { "max_keep_alive": 10, "transform_anchors": false, "progress_bar": true })
sApp.mount(el);
