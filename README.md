# APISuite Status Page UI Extension

## About

This repo contains the APISuite Portal UI component of the [Status Page extension](https://github.com/Cloudoki/apisuite-extension-status).

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

or, to watch the projecto for changes and rebuilding it:

```
npm run build:watch
```

### Installing the UI Extension in your local dev environment

While developing the UI extension, you might want to test it in your local APISuite portal installation. You can install it there with

```
npm i --save ../../apisuite-extension-status-ui/dev-symlink-target
```

The reason for referencing the `dev-symlink-target` folder is because itself references only the `package.json` file and the `build` folder. It leaves the `node_modules` folder out which allows us to use the same React instance that is installed by the APISuite portal for both the portal and the extension.

### Release a new version

To release a new version use [npm's version command](https://docs.npmjs.com/cli/version).

For instance, to create a patch release, run:

    npm version patch

This will build the project, increment the version's patch field, commit these new changes and tag the commit.

Then, don't forget the push the repo and the tags:

    git push && git push origin --tags

## Production

### Hosting via GitHub

This project is hosted on GitHub at https://github.com/Cloudoki/apisuite-extension-status-ui.

To install the latest version of the extension, run:

```
npm i --save github:Cloudoki/apisuite-extension-status-ui
```
