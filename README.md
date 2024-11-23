> [!WARNING]  
> Please use 1.20.1

# NadGreg

GregTech Community Pack Modern, but *more interesting*, and **ported to NeoForge 1.21.1**.

## TODO

- [ ] Good season system, information on screen ([in progress](https://github.com/Nadwey/SereneWeather))
- [x] More Nature!11!
- [ ] More quests or something
- [ ] Gregify mods 
- [ ] Finish rebranding (Authors of GregTech Community Pack Modern will obviously be credited)
    - [ ] Name
    - [ ] Logo
    - [ ] Title Screen?
- [ ] Finish porting to 1.21.1
    - [x] Port serverpack script to 1.21.1
    - [ ] Mods
        - [ ] Architect's Palette (1.21.1 version available [here](https://github.com/theendercore/Architects-Palette), but not on curseforge)
        - [x] ~~Better Tag NBT Tips~~, temporarily replaced with Cucumber (this is probably an overkill, but it's useful)
        - [x] ~~Crafting Station: JEI Edition~~, replaced with Crafting Station: JEI Edition Updated
        - [x] ~~Curios~~, replaced with Curios API Continuation
        - [ ] Ender Storage 1.8.+
        - [x] ~~Item Filters~~, replaced with FTB Filter System
        - [ ] Modern AE2 Additions
        - [ ] Travel Anchors
    - [x] Quests
    - [ ] Fix quests with missing mods
        - [ ] MV - Medium Voltage - contains quests with missing mods
            - [ ] Travel Anchors
        - [ ] HV - High Voltage - contains quests with missing mods
            - [ ] Check if task `The End of an Era` works
            - [ ] Dense Compressors
        - [ ] EV - Extreme Voltage - contains quests with missing mods
            - [ ] EU P2P Tunnels
            - [ ] Pattern P2P Tunnels
            - [ ] Ender Fluid Linking
            - [ ] Me Hatches - ME Input Bus missing name?

## Playing

Playing is not recommended yet, since the modpack is still in pre-alpha.

However, you can download unstable builds from [GitHub Actions](https://github.com/Nadwey/GregTech-Modern-Community-Pack/actions/workflows/build.yml), or [nightly.link](https://nightly.link/Nadwey/GregTech-Modern-Community-Pack/workflows/build/main?preview).

## Building

[packwiz](https://packwiz.infra.link/) will allow you to build either a server or client pack.
Please refer to their tutorials page for more info.

## Server

Install [Bun](https://bun.sh/).

Run `build.bat` or `build.sh` in `serverpack/`.

Your server pack will be created in `serverpack/pack/`.
