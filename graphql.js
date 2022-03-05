import { graphql } from "@octokit/graphql";
import { token } from "./secrets.js";

const graphqlRequest = graphql.defaults({
    headers: {
        authorization: `token ${token}`,
    },
})

const addHours = (date, hours) => new Date(new Date(date).getTime() + (hours * 36e5)).toISOString();

const queryString = (repo, title, lastUpdated) => `${title} in:title repo:${repo} -updated:<${addHours(lastUpdated, -2)}`;

export async function getDiscussionUrl(notification) {
    const graphqlResults = await graphqlRequest(`{
        search(query:"${queryString(notification.repository.full_name, notification.subject.title, notification.updated_at)}", type: DISCUSSION, first: 10) {
            edges {
                node {
                    ... on Discussion {
                        title
                        url
                    }
                }
            }
        }
    }`)
    return graphqlResults.search.edges.find(edge => edge.node.title === notification.subject.title)?.node.url;
}
