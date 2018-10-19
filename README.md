# Globo.com Open Source

Globo.com open source website [https://opensource.globo.com](http://opensource.globo.com).

With ❤️ to the community.

## Development

You need to have `nodejs` and `yarn` installed. Check the `package.json` `engines` prop for versions range.

Use the following commands to setup and run the application:

```bash
make setup
make start
```

## Deploy

```bash
make deploy
```

## Setup

The application uses the [Github GraphQL API](https://developer.github.com/v4/) to acess data from the Globo.com organizations and respositories. To communicate with the GraphQL server, you'll need an [OAuth token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with the following scopes:

```
user
read:org
```

With your token in hands, you need to set the token to the environment variable `GATSBY_GITHUB_TOKEN`.

```bash
export GATSBY_GITHUB_TOKEN=<your_token_here>
```
