## Github Discussion notifications url

When getting a notification from the github rest api and it is `Type: Discussion` - the `subject.url` is not populated (null)

This is an example on how to get the discussion link from the notification using GraphQL

### Testing

1. Clone the repo
2. Open project folder and run `yarn` to install dependencies (octokit)
3. generate a github token ([link](https://github.com/settings/tokens/new))
4. input the token in [secrets.js](secrets.js)
5. make sure you have unread discussion notifications (or the output will be empty)
6. run `node index.js` 
