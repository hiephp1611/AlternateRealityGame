import {settings} from "../../../globalsettings"

let emojiList: string[] = [...Array(10)]
for (const key in settings.EMOJI_KEYMAP) {
  emojiList.splice(settings.EMOJI_KEYMAP[key]-1, 1, settings.EMOJI_KEYMAP[key] + ": " + key + "\n")
}
export const emojiString = emojiList.join("")

let numberArray = settings.SCRIPT_PUZZLE_NUMBER.split("")
for (let i = 0; i < numberArray.length; i+=15) {
  numberArray = numberArray.splice(i, 0, "&shy;")
}
export const programmingChallengeLargeNumber = numberArray.join("") 

export const CURRENT_YEAR = settings.CURRENT_YEAR

export const DISCORD_URL = settings.DISCORD_URL
