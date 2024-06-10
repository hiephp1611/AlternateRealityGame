import {settings} from "../../../../globalsettings"

function createEmojiString() {
  const emojiNumber = settings.EMOJI_NUMBER.toString().split("")
  let emojiString = ""

  for (const number of emojiNumber) {

    const getEmoji = (num: number) => {
      for (const key in settings.EMOJI_KEYMAP) {
        if (settings.EMOJI_KEYMAP[key] === num) return key
      }
      return ""
    }
    
    emojiString += getEmoji(parseInt(number)) 
  }

  return emojiString
}

export default function Emoji() {
  return (
    <div className="flex flex-col gap-12 items-center w-full mt-12">
      <div className="text-7xl tracking-widest break-normal">
        {createEmojiString()}
      </div>
      <div className="w-full text-center">
        <p className="break-words">
          QUJDLURYWCBYWCBYWCwgQUJDRCBhcmUgdGhlIGZpcnN0IGZvdXIgZGlnaXRzIGluIHRoZSBTSEEyNTYgaGFzaCBkaWdlc3QgZnJvbSBoYXNoaW5nIHRoZSBjbHVlIGFib3Zl
        </p>
      </div>
    </div>
  )
}