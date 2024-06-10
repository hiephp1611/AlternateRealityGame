import {settings} from "./globalsettings"
import {main} from "./scripts/programmingchallenge"
import * as crypto from "crypto"

test("No field is empty", () => {
  expect(settings.SLIDING_TILE_PASSCODE).not.toBe("")
  expect(settings.PHONE_NUMBER).not.toBe("")
  expect(settings.DOMAIN_BLOG).not.toBe("")
  expect(settings.DOMAIN_EVILCORP).not.toBe("")
  expect(settings.SCRIPT_PUZZLE_NUMBER).not.toBe("")
  expect(settings.EMOJI_KEYMAP).not.toBe("")
  expect(settings.EMOJI_NUMBER).not.toBe("")
  expect(settings.COORDINATE_LAT).not.toBe("")
  expect(settings.COORDINATE_LONG).not.toBe("")
  expect(settings.LOCKER_CODE).not.toBe("")
})

test("Test that there are ten emojis in the emoji map" , () => {
  expect(Object.keys(settings.EMOJI_KEYMAP).length).toBe(10)
})

test("Test that there are no duplicate emojis in the emoji map" , () => {
  let emojiSet = new Set()
  for (let emoji in settings.EMOJI_KEYMAP) {
    expect(emojiSet.has(emoji)).toBe(false)
    emojiSet.add(emoji)
  }
})

test("Test that the emoji map has the the values 1 to 10" , () => {
  let emojiSet = new Set()
  for (let emoji in settings.EMOJI_KEYMAP) {
    emojiSet.add(settings.EMOJI_KEYMAP[emoji])
  }
  for (let i = 1; i <= 10; i++) {
    expect(emojiSet.has(i)).toBe(true)
  }
})

test("Test that each key in the emoji map is a single emoji" , () => {
  for (let key in settings.EMOJI_KEYMAP) {
    expect(key.match(/[0-9]/g)).toBe(null) // no numbers
    key = key.replace(/[0-9]/g, "") // remove numbers
    expect(key.replace(/[^\p{Emoji}]/gu, "")).toBe(key) // no non-emoji characters
    expect(key.match(/\p{Emoji}/gu)?.length === 1).toBe(true) // only one emoji
  }
})

test("Test that each digit in the emoji number is not a 0" , () => {
  expect(settings.EMOJI_NUMBER.toString().match(/0/g)).toBe(null)
})

test("Test that the phone number is 10 numerical digits long", () => {
  expect(settings.PHONE_NUMBER.length).toBe(10)
  expect(settings.PHONE_NUMBER).toMatch(/^[0-9]+$/)
})

test("Test that the programming challenge does return a valid sum, if not, check that no rules are invalid. Ex: Having a 0 at the end does not work since the swap isn't possible", () => {
  const sum = main(settings.SCRIPT_PUZZLE_NUMBER.split(""))
  expect(sum).not.toBeNaN()
})

test("Test that the programming challenge number evaluates to the last three numbers of the phone number", () => {
  const sum = main(settings.SCRIPT_PUZZLE_NUMBER.split(""))
  expect(sum).toBe(parseInt(settings.PHONE_NUMBER.slice(-3)))
})

test("The first four digits of the hash digest of the emoji number should be the first four digits of the phone number", () => {
  const emojiNumber = settings.EMOJI_NUMBER.toString()
  const emojiNumberHash = crypto.createHash("sha256").update(emojiNumber).digest("hex")
  expect(emojiNumberHash.slice(0, 4)).toBe(settings.PHONE_NUMBER.slice(0, 4))
})