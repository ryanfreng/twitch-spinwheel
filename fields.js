{
  "testButton": {
    "type": "button",
    "label": "LOAD TEST DATA",
    "group": "Testing"
  },
  "showWheelOnLoadFD": {
    "type": "dropdown",
    "label": "Show Wheel On Load",
    "value": "yes",
    "options": {
      "yes": "Yes",
      "no": "No"
    },
    "group": "Testing"
  },
  "showTestDataOnLoadFD": {
    "type": "checkbox",
    "label": "Show Test Data On Load",
    "group": "Testing"
  },
  "spinCommandFD": {
    "type": "text",
    "label": "Broadcaster Spin Command",
    "value": "!spin",
    "group": "Chat Commands"
  },
  "wheelShowCommandFD": {
    "type": "text",
    "label": "Broadcaster Show Wheel Command",
    "value": "!showwheel",
    "group": "Chat Commands"
  },
  "wheelHideCommandFD": {
    "type": "text",
    "label": "Broadcaster Hide Wheel Command",
    "value": "!hidewheel",
    "group": "Chat Commands"
  },
  "wheelClearCommandFD": {
    "type": "text",
    "label": "Broadcaster Clear Wheel Command",
    "value": "!clearwheel",
    "group": "Chat Commands"
  },
  "foregroundVideo": {
    "type": "dropdown",
    "label": "Overlay Video",
    "value": "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/JayniusGamingTV_demo.webm",
    "options": {
      "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/JayniusGamingTV_demo.webm": "Wheel Of Kappa",
      "https://github.com/ryanfreng/pjTestBot/blob/master/modules/.SE_Overlays/chatterWheel/assets/bit-life-chatter-wheel.webm?raw=true": "Bit Life Wheel",
      "none": "None"
    },
    "group": "Visual Set Up"
  },
  "foregroundImage": {
    "type": "dropdown",
    "label": "Overlay Image",
    "value": "none",
    "options": {
      "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/streamElementsLogo.gif": "StreamElements Logo",
      "none": "None"
    },
    "group": "Visual Set Up"
  },
  "fontNameFD": {
    "type": "googleFont",
    "label": "Select a font:",
    "value": "Open Sans",
    "group": "Visual Set Up"
  },
  "textSize": {
    "type": "number",
    "label": "Text Size",
    "value": 20,
    "max": 100,
    "group": "Visual Set Up"
  },
  "maxChattersFD": {
    "type": "slider",
    "label": "Max Chatters",
    "value": 50,
    "min": 3,
    "max": 100,
    "steps": 1,
    "group": "Visual Set Up"
  },
  "spins": {
    "type": "slider",
    "label": "Spin speed",
    "value": 10,
    "min": 3,
    "max": 50,
    "steps": 1,
    "group": "Visual Set Up"
  },
  "duration": {
    "type": "slider",
    "label": "Duration (s)",
    "value": 10,
    "min": 5,
    "max": 20,
    "steps": 1,
    "group": "Visual Set Up"
  },

  "removeSelectedItemsFD": {
    "type": "dropdown",
    "label": "Ignore Previous Items From Future Spins",
    "value": "yes",
    "options": {
      "yes": "Yes",
      "no": "No"
    },
    "group": "Game Set Up"
  },
  "ignoredChattersFD": {
    "type": "text",
    "label": "Ignored Chatters (comma separated)",
    "value": "streamelements,commanderroot",
    "group": "Game Set Up"
  },
  "privileges": {
    "type": "dropdown",
    "label": "Who is added",
    "value": "everybody",
    "options": {
      "everybody": "Everybody",
      "subs": "Subs",
      "vips": "VIPS",
      "mods": "Mods"
    },
    "group": "Game Set Up"
  },
  "listener": {
    "type": "dropdown",
    "label": "Trigger Goal Event",
    "value": "tip-latest",
    "options": {
      "tip-latest": "Tips",
      "cheer-latest": "Cheers",
      "chatCommandOnly": "Chat Command Only"
    },
    "group": "Game Set Up"
  },
  "minAmountFD": {
    "type": "number",
    "label": "Goal Amount",
    "step": 1,
    "value": 10,
    "group": "Game Set Up"
  },
  "multipleSpinsFD": {
    "type": "dropdown",
    "label": "Allow Multiple Spins On Large Donations",
    "value": "yes",
    "options": {
      "yes": "Yes",
      "no": "No"
    },
    "group": "Game Set Up"
  },
  "playSoundFD": {
    "type": "dropdown",
    "label": "Play Sound On Ticks",
    "value": "yes",
    "options": {
      "yes": "Yes",
      "no": "No"
    },
    "group": "Game Set Up"
  },
  "soundEffectFD": {
    "type": "sound-input",
    "label": "Sound Effect",
    "value": "https://raw.githubusercontent.com/zarocknz/javascript-winwheel/master/examples/wheel_of_fortune/tick.mp3",
    "group": "Game Set Up"
  },

  "triggerToJoinCommandFDInfo1": {
    "type": "hidden",
    "label": "Require a 'raffle' word to join",
    "group": "Raffle Mode"
  },
  "triggerToJoinCommandFDInfo2": {
    "type": "hidden",
    "label": "e.g. !wheelword join",
    "group": "Raffle Mode"
  },
  "triggerToJoinCommandFD": {
    "type": "text",
    "label": "Command to Enable/Set Raffle Word",
    "value": "!wheelword",
    "group": "Raffle Mode"
  },

  "middleware1": {
    "type": "hidden",
    "label": "Middleware provided by lx",
    "group": "Middleware Setup"
  },
  "jebaitedAPITokenInfoFD": {
    "type": "hidden",
    "label": "https://jebaited.net/tokens/ ->",
    "group": "Middleware Setup"
  },
  "jebaitedAPITokenFD": {
    "type": "text",
    "label": "Token",
    "value": "need: botMsg",
    "group": "Middleware Setup"
  },
  "sayToChatFD": {
    "type": "dropdown",
    "label": "Announce winner to chat",
    "value": "no",
    "options": {
      "yes": "Yes",
      "no": "No"
    },
    "group": "Middleware Setup"
  },
  "chatResponseFD": {
    "type": "text",
    "label": "Chat Winner Text",
    "value": "{chatter} it is, get to it!",
    "group": "Middleware Setup"
  },
  "chatResponseDelayFD": {
    "type": "slider",
    "label": "Chat Response (stream) Delay (s)",
    "value": 5,
    "min": 0,
    "max": 10,
    "steps": 1,
    "group": "Middleware Setup"
  },

  "frame1": {
    "type": "hidden",
    "label": "Animated gradient webcam frame",
    "group": "Animated Gradient Frame"
  },
  "frame2": {
    "type": "hidden",
    "label": "by Kagrayz",
    "group": "Animated Gradient Frame"
  },
  "mask": {
    "type": "dropdown",
    "label": "Mask Image",
    "value": "none",
    "options": {
      "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/demo1.png": "Solid Border",
      "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/demo2.png": "Faded Border",
      "https://raw.githubusercontent.com/pjonp/pjTestBot/master/modules/.SE_Overlays/chatterWheel/assets/demo3.png": "Faded Border With Center Plug",
      "none": "None"
    },
    "group": "Animated Gradient Frame"
  },
  "firstColor": {
    "type": "colorpicker",
    "label": "First color",
    "value": "#00abff",
    "group": "Animated Gradient Frame"
  },
  "secondColor": {
    "type": "colorpicker",
    "label": "Second color",
    "value": "#6701a5",
    "group": "Animated Gradient Frame"
  },
  "frameDuration": {
    "type": "number",
    "label": "Rotating duration, sec",
    "value": 2.5,
    "group": "Animated Gradient Frame"
  },
  "cacheMask": {
    "type": "checkbox",
    "label": "Cache mask",
    "group": "Animated Gradient Frame"
  },
  "gradientOverrideFD": {
    "type": "hidden",
    "value": 40,
    "group": "Animated Gradient Frame"
  },

  "wheelSize": {
    "type": "hidden",
    "value": 900,
    "group": "Animated Gradient Frame"
  },
  "wheelStartingPositionX": {
    "type": "hidden",
    "value": 50,
    "group": "Animated Gradient Frame"
  },
  "wheelStartingPositionY": {
    "type": "hidden",
    "value": 50,
    "group": "Animated Gradient Frame"
  },
  "foregroundVideoSizeFD": {
    "type": "hidden",
    "value": 110,
    "group": "Animated Gradient Frame"
  },
  "foregroundImageSizeFD": {
    "type": "hidden",
    "value": 25,
    "group": "Animated Gradient Frame"
  },
  "foregroundImageRadiusFD": {
    "type": "hidden",
    "value": 50,
    "group": "Animated Gradient Frame"
  }
}
