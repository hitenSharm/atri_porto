import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Navbar": {
      "callbacks": {}
    },
    "Div2": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {
        "onClick": []
      }
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "TextBox9": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Hiten Sharma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "hiten",
        "src": "/app-assets/me.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "I build apps"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div6": {
      "callbacks": {}
    },
    "TextBox7": {
      "custom": {
        "text": "That help people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Hi, I am Hiten Sharma."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "Download Resume",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Trust": {
      "custom": {
        "text": "Trusted By"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/images.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/images.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/images.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/images.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "What can you expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "I design products!"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Clean and functional!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "What I can do for you?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Faster, better products!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Design startegy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Apps I am fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Every designer needs the right tools!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div17": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Button5": {
      "custom": {
        "text": "View All Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div19": {
      "callbacks": {}
    },
    "TextBox23": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div24": {
      "callbacks": {}
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/52706500_802713876729241_4073798745366462464_n-scaled.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Soulful redesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/52706500_802713876729241_4073798745366462464_n-scaled.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "📚 Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion1": {
      "custom": {
        "title": [
          "IIIT Gwalior"
        ],
        "description": [
          "Integrated masters and bachelors IT"
        ],
        "open": [
          true
        ]
      },
      "callbacks": {
        "onTitleClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion2": {
      "custom": {
        "title": [
          "St. Pauls School"
        ],
        "description": [
          "10th: 9.4/10 12th: CBSE 86.4%"
        ],
        "open": [
          true
        ]
      },
      "callbacks": {}
    },
    "TextBox40": {
      "custom": {
        "text": "💼 Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion4": {
      "custom": {
        "title": [
          "Qualyvyal"
        ],
        "description": [
          "SWE Intern at Qualyvyal"
        ],
        "open": [
          true
        ]
      },
      "callbacks": {}
    },
    "Accordion3": {
      "custom": {
        "title": [
          "Cloutflow"
        ],
        "description": [
          "SWE Intern at Cloutflow"
        ],
        "open": [
          true
        ]
      },
      "callbacks": {}
    },
    "TextBox41": {
      "custom": {
        "text": "📲 Contact me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "Email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "custom": {
        "value": "",
        "placeholder": "Email ID"
      },
      "callbacks": {}
    },
    "TextBox44": {
      "custom": {
        "text": "Message"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "custom": {
        "value": "",
        "placeholder": "Message"
      },
      "callbacks": {}
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
