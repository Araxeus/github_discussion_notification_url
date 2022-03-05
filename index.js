import { log, unwrapNotification, request } from "./utils.js";
import { getDiscussionUrl } from "./graphql.js";

const result = await request("GET /notifications");

for (const notification of result.data) {
    if (notification.subject.type === 'Discussion') {
        log('\n', '----- Rest Notification -----', unwrapNotification(notification),
        '----- GraphQL URL -----', await getDiscussionUrl(notification));
    }
}
