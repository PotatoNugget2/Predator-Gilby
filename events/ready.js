module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
    console.log(`Currently in ${client.guilds.cache.size} guild(s)`);
    // Client Vars
    // Ticket Vars
    client._ticketCategory = await client.channels.cache.get(config.ticket.category);
    client._ticketLogChannel = await client.channels.cache.get(config.ticket.log);
    client._ticketChannel = await client.channels.cache.get(config.ticket.channel);
    client._ticketMessage = await client._ticketChannel.messages.fetch(config.ticket.message);
    // Support Vars
    client._supportChannel = await client.channels.cache.get(config.support.channel);
    
    // Help topics
    topics = [];
    topics['website'] = { title: "Website Information:", response: "You can **visit** our **website** [**here**](https://predatornetwork.com/)." }
    topics['connect'] = { title: "FiveM Server Connection:", response: "To **connect** to our **FiveM server** press **F8** > ```connect fivem.predatornetwork.com```" }
    topics['teamspeak'] = { title: "TeamSpeak Information:", response: "You can **join** our **TeamSpeak** by **using** the following **address**: ```ts.predatornetwork.com```" }
    topics['discord'] = { title: "Discord Information:", response: "Our **official Discord Invite** is:\nhttps://discord.gg/DkmWSpG" }
    topics['apply'] = { title: "Staff Application Information:", response: "**Staff Applications are currently Open!** \n\n*Visit the* [**application page**](https://predatornetwork.com/apply/) *for more information!*" }
    topics['servers'] = { title: "Server List:", response: "\n**vMenu FiveM Server Address:** ```fivem.predatornetwork.com```" }
    topics['rules'] = { title: "Server Rules:", response: "**Discord Server Rules:** <#684510968490754116>\n\n**vMenu FiveM** [**Server Rules**](https://docs.google.com/document/d/1Ht16hM7iYQ8oyJ-z6pn5a04CUiHrOd93-Y39b0EkrNE/edit?usp=sharing)." }
    topics['report'] = { title: "Player Reports:", response: "You can **send** a **report in-game** by **issuing** the following **command**: ```/report [your report here]```\n\nIf there are **no staff** members **online** you can fill out a **player report** by **visiting** the <#720063974426804235> **channel**.\n\n*When* ***creating*** *a* ***report*** *make sure to* ***provide*** *as* ***much information as possible*** including ***details of the incident***, *the* ***player you're reporting***, *and what* ***rule*** *you believe they have* ***violated***." }
    topics['notifications'] = { title: "Notification Settings Information:", response: "You can **toggle** your **preferred** announcement **notification settings** by **visiting** <#722237116389654548>. \n\n*By default notifications are set to* **@mentions** *only*." }
    topics['feedback'] = { title: "Community Feedback:", response: "We take **pride** in being **community driven**. We **value** every bit of **feedback** - **positive**, or **negative**. \n\nIf you have any <#707367050519117875>, or find any <#707365718756163584> make sure to let us know!" }
    topics['donate'] = { title: "Donation Information:", response: "For more **information about** donation **perks visit** <#697313562972127302>. \n\n[Donation Link](https://donate.predatornetwork.com)." }
    topics['authorization'] = { title: "Discord Authorization Troubleshooting:", response: "> Was the **Discord Desktop App Open before launching FiveM**? \n> Did you **accept** the **authorization** **prompt** in **discord**? \n> Have you **rejoined** the **FiveM Server** after being **given** the **roles**? \n\n**Still having issues?** \nDiscord User Settings **>** Authorized Apps **>** FiveM **>** Deauthorize **>** Restart FiveM **>** Accept Authorization Prompt in Discord." }
    topics['statepatrol'] = { title: "State Patrol Application Information:", response: "**State Patrol Applications are currently Open!** \n\n*Visit the* [**application page**](https://predatornetwork.com/sasp/apply/) *for more information!* \n\n**Issue the command**: ```!publiccop``` for **information** about **becoming** a **Public Officer**!" }
    topics['publiccop'] = { title: "Public Cop Information:", response: "To become a **Public Officer issue** the **command**: ```@rank public cop``` **in** the <#618645881419202572> channel to **receive** the **Public Cop Whitelist Role**. \n\n**In-game** **issue** the **command:** ```/publiccop``` in chat to be **given** your **loadout**, **vehicle**, and **uniform**. \n\n**Join** the **RTO** in **TeamSpeak** using the following **address**: ```ts.predatornetwork.com```\nGive yourself a **3-digit callsign** as well as a **roleplay name** using the **following structure**:```[591] G. Sotto``` \n*For more information visit the* <#701278065715576883> *channel*. \n\n\n**NOTE:** *Your discord account must be authorized with FiveM*.\n **For more information about authorization, issue the command**:```!help authorization```" }
    topics['safrc'] = { title: "San Andreas Fire & Rescue Commission Application Information:", response: "**SAFRC Applications are currently Open!** \n\n*Visit the* [**application page**](https://predatornetwork.com/safrc/apply/) *for more information!*" }
    topics['asoc'] = { title: "aSoc Information:", response: "*aSoc is a custom bot created to unify the ranks within the community, and perform other various tasks within the discord*. \n\n**aSoc Commands:**\n\n**@mcount**\n*Retrieves the number of members in the server. ( Humans + Robots )*\n\n*More Information Soon...*" }
    topics['gilby'] = { title: "Gilby Information:", response: "*More information soon...*" }
    topics['curl'] = { title: "cURL Error Help", response: "**Offical response from cfx.re** \n > You are having an issue with your network. Make sure you disable any web filters, anti-virus, and firewall software. If that doesn't work, use a VPN.\n\n There is sadly nothing we can do on our end to help you out with this error."}
    topics['forums'] = { title: "Forums Information", response: "You can **visit** our **forums** [**here**](https://predatornetwork.com/forums)." }
    
    // Random status function
    const topicsKeys = Object.keys(topics);
    // Set our activity on start
    client.user.setActivity(`!help ${topicsKeys[Math.floor(topicsKeys.length * Math.random())]}`);
    setInterval(() => {
        client.user.setActivity(`!help ${topicsKeys[Math.floor(topicsKeys.length * Math.random())]}`)
    }, 60000);

    // Run our custom events
    client.emit('ticketCheck');
    client.emit('supportHelp');
    setInterval(() => {
        client.emit('supportHelp');
    }, 300000)
}
