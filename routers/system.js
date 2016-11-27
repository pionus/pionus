import Router from "koa-router";

import admin from "./admin.js";

const router = new Router();

router.get("/", ctx => {
    return ctx.render("index");
});

router.use("/admin", admin.routes());

export default router;
