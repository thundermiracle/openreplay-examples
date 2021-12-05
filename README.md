# OpenReplay-examples

Examples of how to use OpenReplay with Assist enabled.

## Install

This project is using [pnpm](https://pnpm.io/) instead of `yarn` or `npm`. So first of all, you need to install `pnpm` globally.

```shell
npm i -g pnpm
```

Then, install packages.

```shell
pnpm i
```

## Start

1. Start example of using OpenReplay in `create-react-app`:

    ```shell
    pnpm dev:cra
    ```
2. Start example of using OpenReplay in `Next.js` by normal client side useEffect hook import:

    ```shell
    pnpm dev:next
    ```
3. Start example of using OpenReplay in `Next.js` by [dynamic import](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr):

    ```shell
    pnpm dev:next:di
    ```
## License

This project is licensed under the terms of the [MIT license](/LICENSE).
