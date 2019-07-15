# happo-demo-backbone

This repository is a POC demo of using backbone.js with happo.

## Running locally

If you want to try things out, you first need a happo.io account. Sign up for
a trial at happo.io/signup. Once you have that, clone this repo and run the following commands:

```
npm install
```
to install the happo.io module, backbone.js plus some other dependencies.

Run happo with the following command:

```
HAPPO_API_KEY=<your api key> HAPPO_API_SECRET=<your api secret> npm run happo run
```

where `HAPPO_API_KEY` and `HAPPO_API_SECRET` are API tokens you get from your
happo account at https://happo.io/account.
