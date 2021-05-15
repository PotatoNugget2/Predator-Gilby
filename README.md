# Predator Gilby

Predator Gilby was the fun/misc bot for Predator Network. The bot can be ran instantly after package installation, there is no database for this bot; all games data is stored in json.

## Features
* Command System ([Commando](https://github.com/discordjs/Commando))
* Nick Blacklist System
* Games System
* Role Divider System (**Ex.** Removing dividers if it is highest role)
* Reply System (**Ex.** replying to people saying Hi) 

## Installation

Gilby uses NPM to handle all the packages

```bash
npm install
```

## Config
```
"token": "", -- Discord bot token,
"response_reaction": "", -- Bot reply reaction,
"disabled_cat": {
    "CATEGORYID": true
}, -- Gilby will NOT respond to messages in category supplied here
"divider": [], -- Divider role ids,
"supporter": {
    "channel": "", -- Channel to thank in for supporting
    "roles": {
        "ROLEID": true
    }, -- Roles that trigger event, this could be array but I didn't set it up that way apparently
},
"games": {
    "counting": {
        "channel": ""
    },
    "main": {
        "channel": ""
    },
} -- Exclusive games and main games channel config
```

## Deployment
```bash
node index.js
```

## Credits
[Dr.Pepper](https://github.com/DrPepperG)

## License
[MIT](https://choosealicense.com/licenses/mit/)
