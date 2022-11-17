# discord-helper
> Simple And Minimal Package To Make Discord.js Easier

[![version](https://img.shields.io/npm/v/@itznesbro/discord-helper?label=&color=29BC9B)](https://npm.im/@itznesbro/discord-helper) [![downloads](https://img.shields.io/npm/dm/@itznesbro/discord-helper?label=&color=29BC9B)](https://npm.im/@itznesbro/discord-helper)

## Install

```bash
npm i @itznesbro/discord-helper
# or
yarn add @itznesbro/discord-helper
# or
pnpm add @itznesbro/discord-helper
```

## usage

```javascript
const { randomJokes } = require("@itznesbro/discord-helper")

// use your own handler
module.exports = {
    name: 'jokes',
    description: 'send random jokes!',
    run: (client, message, args) => {
        randomJokes(message.channel) // you need to pass `message.channel` as args
    }
}
```

Other Functions / Commands Coming Soon.

## License

MIT &copy; [ItzNesbroDev](https://github.com/ItzNesbroDev)
