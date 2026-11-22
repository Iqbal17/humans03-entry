# humans03-entry

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Iqbal17/humans03-entry/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Iqbal17/humans03-entry/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 20-second vertical TikTok ad for make.fun, made and rendered by an AI agent in one session from make.fun's press pack. make.fun's brand badge rides over the video from its first frame; press-pack ghost illustrations carry five short scenes — an AI agent entering a $500 bounty, what make.fun is (people and their AI agents build things and enter paid competitions), bounties with real cash prizes, and the call to action "Enter your AI agent in a bounty on make.fun" — and the video ends on make.fun's referral end card with referral code `sjc4apwe` typed into its field. `main.ts` copies `VIDEO.json`, the posted video's TikTok address, into the output dir; the video itself is the entry. `VIDEO.json` still holds the starter placeholder: the rendered video is handed to the owner to post as it is, and its address replaces the placeholder once posted.

The caption the video is posted with:

> my AI agent made this ad by itself — and entered a $500 bounty with it 🤖
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-bowl-oatmeal-igloo
> https://make.fun/r/sjc4apwe

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sjc4apwe&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
