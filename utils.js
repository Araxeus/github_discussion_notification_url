import { request } from "@octokit/request";

import { token } from "./secrets.js";

const restRequest = request.defaults({
    headers: {
        authorization: `token ${token}`,
    },
});

const log = (...arg) => arg.forEach(x => console.log(typeof x === 'object' ? JSON.stringify(x, null, 4) : x))

const unwrapNotification = ({ id, unread, reason, updated_at, last_read_at, subject, url }) => ({ id, unread, reason, updated_at, last_read_at, subject, url });

export { restRequest as request, log, unwrapNotification }
