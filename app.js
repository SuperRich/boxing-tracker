const SESSION_KEY = "corner.sessions.v1";
const MOVEMENT_KEY = "corner.movements.v1";
const PRESETS = {
  boxing: ["jab", "cross", "hook", "uppercut", "stance", "shadow boxing"],
  conditioning: ["burpees", "red zone", "mountain climbers", "bodyweight squats", "push-ups"]
};
const LEARN = {
  "beginner": {
    "number": "01",
    "title": "Build the base",
    "copy": "Stance, punches and the training guide. Tap a clip to play it here.",
    "topics": [
      {
        "title": "How to wrap your hands",
        "type": "BOX",
        "clips": [
          {
            "title": "How to wrap your hands for boxing",
            "id": "158anKFzqVxBib5Trqw25sQ2aJsg9j9SK"
          }
        ]
      },
      {
        "title": "Stance and movement",
        "type": "BOX",
        "clips": [
          {
            "title": "Moving backwards",
            "id": "1dZCHz0C70HaoJN1wUBusHPWZblKmufI-"
          },
          {
            "title": "Moving in stance",
            "id": "1EXSljV9wFaksxq4F4R-i4SNPyPPy-1eT"
          },
          {
            "title": "Moving to the left",
            "id": "1tKpTqPIFyp6m7IIUReC_BupXH0Jt9g_L"
          },
          {
            "title": "Moving to the right",
            "id": "1vNQ0DUprzFZEIB4QobPGahk2nbdMC_yI"
          },
          {
            "title": "Shuffling",
            "id": "1mfpWzOfTvaGkI-tjbygrbMredWKX7nzH"
          },
          {
            "title": "Stance",
            "id": "1VBlVL-odKLLgpfTEWF5kWu3fTrrwG5cT"
          }
        ]
      },
      {
        "title": "Basic punches",
        "type": "BOX",
        "clips": [
          {
            "title": "Cross",
            "id": "1rfFYvCfPI-XfkP2Adf73Dihv2H9X23b9"
          },
          {
            "title": "Cross to the body",
            "id": "1hsP-bmMmsv3zYPSb3bm1BYQ7QyuaxKJr"
          },
          {
            "title": "Jab",
            "id": "1L4Zy-GhIvglAjAsy4Mh08Dqgh8sMxc9I"
          },
          {
            "title": "Jab to the body",
            "id": "1Vc8qKXot3Lsu5ohVwusNEcFQju2NaSdb"
          },
          {
            "title": "Lead hook",
            "id": "15UFs943y92v_UjeaJp41qwJ11VhcfiFM"
          },
          {
            "title": "Lead hook to the body",
            "id": "1HkR4dJFop5ZY2RIZ3MHxPlWoc0gcFt-1"
          },
          {
            "title": "Lead uppercut",
            "id": "1W2Nn9rOcxbUvLSaW0iGWkr-t1j4cBfEQ"
          },
          {
            "title": "Rear hook",
            "id": "1C4RtpWY2A-qLEFVo3TdChN2OcJ6vkQ6o"
          },
          {
            "title": "Rear hook to the body",
            "id": "1vGmJEbzg-1YLhp7nL9-2PECDZGaV5Ouo"
          },
          {
            "title": "Rear uppercut",
            "id": "1Sn2B_V8aYIbXAN9F3PNu1XxaVghPRFnV"
          }
        ]
      },
      {
        "title": "Training guide",
        "type": "LEARN",
        "clips": [
          {
            "title": "The ultimate training guide",
            "id": "1RB4Ah8YdGFnez2XF-Ga3Ynwc38j4U6m8"
          }
        ]
      },
      {
        "title": "First follow along",
        "type": "BOX",
        "clips": [
          {
            "title": "Shadowbox warmup 3x3",
            "id": "101ZDBEJU7rFpSBmsbDy4NrEkSj_nMG5T"
          },
          {
            "title": "Your first 3x3 on the heavy bag",
            "id": "1G2akgRkU0otbvKvZXzW_cOW0eSwj3EZ4"
          }
        ]
      },
      {
        "title": "Lower body",
        "type": "BUILD",
        "clips": [
          {
            "title": "Barbell (BB) box squat",
            "id": "1H9Otlnan3TJdMebmmolVkpx-zp_-lvHz"
          },
          {
            "title": "Barbell (BB) squat",
            "id": "1RpzOod9pC2YXKUqPmjlir1t2sNMh0Y9I"
          },
          {
            "title": "Barbell Romanian deadlift (BB RDL)",
            "id": "1xLkV_277ZaGflWqjSmTCm5bsdU6tImpM"
          },
          {
            "title": "DB front foot elevated split squat",
            "id": "15dck0d6I649KlH687aeG6GSV7sl3nmuN"
          },
          {
            "title": "DB RDL",
            "id": "10U1Ap3UtrIuaPNWiD9CcmMIXqtiSc1Zu"
          },
          {
            "title": "DB side lunge",
            "id": "1y8kpFRRknPSI1znv_dS4YPybrx2knbeo"
          },
          {
            "title": "DB split squat",
            "id": "1Acd3hAXczMsgOF297VJyW9DIv2CRLiYX"
          },
          {
            "title": "Goblet squat",
            "id": "1Xa4w45D98CHioEcLADgaf9jQno-6Lozp"
          },
          {
            "title": "Leg extension",
            "id": "1mW8jKr0wn0q1JN_yZZE5cv6euqB6FopN"
          },
          {
            "title": "Leg press",
            "id": "1WEcyjd7Q3C0X-ZbDNNmvv68bJjPxRRzN"
          },
          {
            "title": "Prone hamstring curl",
            "id": "1Gd6axFwhOr8KrC1N7Ymy_oxAduvczaQY"
          },
          {
            "title": "Trap bar deadlift",
            "id": "1KB754L7MyIE5-Zbp0f2MQhF3fpAn9s7k"
          },
          {
            "title": "Walking lunges",
            "id": "1PBnA2Nz9VKyY9qfvj8_MLywpkI5eUyac"
          }
        ]
      },
      {
        "title": "Upper push",
        "type": "BUILD",
        "clips": [
          {
            "title": "Banded press up_push up",
            "id": "16h6IFoGv-W0PJy625SqjJHffY4SQFnZN"
          },
          {
            "title": "BB close grip bench press",
            "id": "1IIHBWwetgrzR0I51lMwxwVJqUJKVwnxI"
          },
          {
            "title": "DB banded bench press",
            "id": "1HPzuUxbHFdEp-Zp0LrFIWfJLOpH9YJWn"
          },
          {
            "title": "DB bench press",
            "id": "1ivyB8i2IkxTgBmJRfcTfuwBHkV6KYqlg"
          },
          {
            "title": "DB incline bench press",
            "id": "1OMFbRU-otIUU8EmU47QuW62Ak05HkBHc"
          },
          {
            "title": "DB seated overhead press",
            "id": "1nfVEiIHYzlMghJiqk5VA7Uz1vtU4lPE9"
          },
          {
            "title": "DB standing overhead press",
            "id": "1rt2a5AOjD1NJfb3oVjnFPQl9WviGfpRX"
          },
          {
            "title": "Landmine banded single arm punch press",
            "id": "1ra3TRRl60049Y2H6eD66tAWFteCKmB_F"
          },
          {
            "title": "Machine chest press",
            "id": "1QItSJ6qZ8zj5PcsjcLUr5j5Cq3a4ULnW"
          },
          {
            "title": "Press up",
            "id": "1FSzvInA6HDT-WC8D-J75f1CWV5CEWeJz"
          }
        ]
      }
    ]
  },
  "intermediate": {
    "number": "02",
    "title": "Move with intent",
    "copy": "Link punches to footwork, then hit the bag and build power.",
    "topics": [
      {
        "title": "Punch then move",
        "type": "BOX",
        "clips": [
          {
            "title": "1-2 then move",
            "id": "1IMU91sZ0z1Ky1yKE-yJisiksf7M37zRE"
          },
          {
            "title": "1-2-3 then move",
            "id": "1mx0FEXuC9vBDjA-BCYrlpjKk5eecNkeC"
          },
          {
            "title": "1-2-3-4 then move",
            "id": "1EiTPK4WPuVOcaPe_Mr-X-yrwiuLWS96s"
          },
          {
            "title": "Freestyle then move",
            "id": "1ZT3NDlxVlPzm-SXtRXv2w8j1wWiwCEXm"
          },
          {
            "title": "Jab then move",
            "id": "1iEKLg9W45NhgbqyRq-MMsxuyrHKYA2gW"
          }
        ]
      },
      {
        "title": "Punch while moving",
        "type": "BOX",
        "clips": [
          {
            "title": "1-2 while moving",
            "id": "1gGhPcQwYHXjLfP0JTwTt7lKzo-i1rN1b"
          },
          {
            "title": "1-2-3 while moving",
            "id": "1g2DySd_F8SQNZJ8QNoLB7RUm2wsJtozO"
          },
          {
            "title": "1-2-3-4 while moving",
            "id": "1Gy6rjg02MT5-RyrVtEZdq591tX6AmMlY"
          },
          {
            "title": "Double jab while moving",
            "id": "1TpZUcO4EO8sDazWVHdWANkCOZIs-rE7H"
          },
          {
            "title": "Jab while moving",
            "id": "1jyBDeaUiKr3K1UN7Htcl5UK8YsYIVL2a"
          },
          {
            "title": "Jab while moving (half step)",
            "id": "1bE_NdbNBpwPO6XUprHHu0HLuJPN71A4W"
          }
        ]
      },
      {
        "title": "Heavy bag",
        "type": "BOX",
        "clips": [
          {
            "title": "heavy bag intro",
            "id": "1Tc8RxgxKnvkLEF8S_yRSIoC1ly8FSJkc"
          },
          {
            "title": "Heavy bag: 1-2",
            "id": "1PaTtWvjCNu1i_0IeglqXnuehMcjN9iRm"
          },
          {
            "title": "Heavy bag: Jab",
            "id": "1UDdafGUwjACoDiYFBZDKCoEZCEhvOlMg"
          },
          {
            "title": "Heavy bag: Lead hook",
            "id": "18ECSk_iWjdraTn3t97kzJnOy98GpJEBb"
          }
        ]
      },
      {
        "title": "Guided shadowbox",
        "type": "BOX",
        "clips": [
          {
            "title": "3x3 Guided shadowbox. Blocks/catches",
            "id": "1fwY9aqJwucOO2Kdt_do79b4CAltipmIy"
          },
          {
            "title": "3x3 Guided shadowbox. Parry & counter",
            "id": "1fxLtYjkRaOSEULnyyAM1za0yT31JOfZE"
          },
          {
            "title": "3x3 guided shadowbox. Slipping",
            "id": "1izEdmkEK-rQfSEs_L6LV34VmmAy7-ctL"
          },
          {
            "title": "3x3 Shadowbox: Lead hook & rear uppercut",
            "id": "1c6o80KJlsz53u6x6_QbSCKLtA8qkz2d8"
          }
        ]
      },
      {
        "title": "Explosive",
        "type": "BUILD",
        "clips": [
          {
            "title": "Banded palloff press",
            "id": "12gg6yRoUcsRVU5i11yEVzdAlM1ZLJul9"
          },
          {
            "title": "Banded palloff rotation",
            "id": "1Rb4LA1UARh9-XFXq3ThsxuUdfaRSdWhY"
          },
          {
            "title": "Counter movement jump (CMJ)",
            "id": "1zeQ-ZnuTzSEHwNRKC8jO_Pq1qEZ7cWWP"
          },
          {
            "title": "Half kneeling rotational Medball throw",
            "id": "1dSsHKXYNGqFEx8_4liRxSI21HfzbyFgh"
          },
          {
            "title": "Landmine punch throw",
            "id": "1WNvRRL4OgsD4vteRBPFGJocj8JGvOpnD"
          },
          {
            "title": "Lateral Medball slam",
            "id": "1gXXLi1l5RGNIjgLjcE5QKi9jrD1_WYS6"
          },
          {
            "title": "Medball slam",
            "id": "1PTtxuc-iVE5dskX_h_bAchyvbj2poXpP"
          },
          {
            "title": "Medball supine throw",
            "id": "1HKkMNGzrNE40F5AT8uzYxQLGB2FJph8A"
          },
          {
            "title": "Plyometric (plyo) push up _ press up",
            "id": "15zrtCBCw4s07cMEjRH5Epg4SDarPH5cU"
          },
          {
            "title": "Split stance CMJ",
            "id": "1zM222nzzHAWl4fe2Lt83uZqoWqh8_h52"
          },
          {
            "title": "Trap bar CMJ",
            "id": "16sQpvOvks27GyRDZ9cjrTDUVvjON5y7I"
          }
        ]
      },
      {
        "title": "Core",
        "type": "BUILD",
        "clips": [
          {
            "title": "4 way plank",
            "id": "1GLuvUYzAOGR1WlRF4TdzaApJB3mJ4VKV"
          },
          {
            "title": "Ab wheel roll out",
            "id": "1PrthDf3240rRhUEA52yEIKfqs85fdrYH"
          },
          {
            "title": "Bench leg raises",
            "id": "1duv99IfKo285QGBQx6THc61MNvdwbF6T"
          },
          {
            "title": "Flutter kicks",
            "id": "1BIe7GYqAmAEdaC6v8dlbq_N7K6rEIb81"
          },
          {
            "title": "Hanging knee tucks",
            "id": "1honz4b6RvOVzPaNu8V0R7S_GKQLx_duR"
          },
          {
            "title": "Heel taps",
            "id": "1r3CFdhe1muDX4szorG0bVg_3KkpKeasD"
          },
          {
            "title": "Jack knife",
            "id": "1c-E3Q1YijYcrZVHbYl55GyvYHwW2WkQO"
          },
          {
            "title": "Leg raises",
            "id": "1FoVOpgSYrVXRarRxcrdfugzMvDlLFgvc"
          },
          {
            "title": "Long lever plank",
            "id": "1WF_-8Zth3IJA9DszOHf41vXl8CUTX8HC"
          },
          {
            "title": "Plank clockface",
            "id": "1BVNT-yCpp0vPwvUgpIpdoT8iU5lsWYaR"
          },
          {
            "title": "Plank moving hands & feet",
            "id": "10FftDm1cFKmisWqI0Wwz-YUQl927hEQU"
          },
          {
            "title": "Plank pull through",
            "id": "11MFrkX3J05iGzdOaJGflK_dTw7Dg_JR1"
          },
          {
            "title": "Plank",
            "id": "1tu-Do6QJZ2Pdhh4DPnK0K6V7l1d9gEzA"
          },
          {
            "title": "Russian twist",
            "id": "1QzjCkKU5LrBFfCePBXT3CFIxA0Bl09WM"
          },
          {
            "title": "Scissor kicks",
            "id": "11FzVAkTRdK9NWNaX7q-1F6gmSZxCOb4_"
          },
          {
            "title": "Shoulder taps",
            "id": "1glqaoYp4wsRzqy3wd1oASeo7DEaw6WPr"
          },
          {
            "title": "Swiss ball Jack knife",
            "id": "1DJX3tYgVG-1DRzHGLPPea0Jw7gpDwV2H"
          },
          {
            "title": "Swiss ball leg raise",
            "id": "1ToWdK7nxJgFowpu8paOM6Q5E08-xabV9"
          },
          {
            "title": "Swiss ball plank",
            "id": "1jHrzlt_Vifz8r06xCt0pCYho0A4_YLR4"
          },
          {
            "title": "V-sit",
            "id": "1bw9k6sCdxz6T-zx9egXhtxhQjnuIJQxc"
          }
        ]
      }
    ]
  },
  "advanced": {
    "number": "03",
    "title": "Perform under pressure",
    "copy": "Defence, isometric strength and the extra BUILD work.",
    "topics": [
      {
        "title": "Defence",
        "type": "BOX",
        "clips": [
          {
            "title": "Block straight punches to the body",
            "id": "1mgCsx-x252hXKHyH13D1pDZ9U-8BqPnj"
          },
          {
            "title": "Block the lead hook",
            "id": "1WM4B3RlIN8isACLI-cw8CExuM_ijMW8_"
          },
          {
            "title": "Block the left body hook",
            "id": "18wweogXtZ1itIFMp2J114YDtI7wYeoeF"
          },
          {
            "title": "Block the rear hook",
            "id": "1zYxwjW6DnWrZtM5SMmL3stZqohkntAhX"
          },
          {
            "title": "Block the right body hook",
            "id": "1Eyz9iMWVev1TJKaxltQNEV9GTkRR_kV2"
          },
          {
            "title": "Lean back",
            "id": "1KLWijxrPpFy6c8UZrNcD7Ykzeb_kHHrz"
          },
          {
            "title": "Parry the jab",
            "id": "1KLzs2Oe1FW3H7gbhUrxn2-l6Qvs0GwI5"
          },
          {
            "title": "Parry the right hand",
            "id": "1NVWr-9scNz5pw-G1i1OtF2Oie6ca8A4r"
          },
          {
            "title": "Roll to the left",
            "id": "1VN69MFtBYYrnpRp2N1QfbY6AIaN0GqQd"
          },
          {
            "title": "Roll to the right",
            "id": "1yVF3Sy1lN-YBDAyDQbiNJz3r020ApA3c"
          },
          {
            "title": "Slip to the left",
            "id": "1QP7NvBCGqa1y3z_kBNMreHno30BTqLwc"
          },
          {
            "title": "Slip to the right",
            "id": "15Km7597LUiyKJhybtqFsPAZBofvh4UN1"
          },
          {
            "title": "Stepping back",
            "id": "1U_TPly156o1MnxUkb9j7zzNHyN0UBnKH"
          }
        ]
      },
      {
        "title": "Mindset",
        "type": "LEARN",
        "clips": [
          {
            "title": "Achieving results_ Balancing Work, Fitness & Well-being",
            "id": "1uwecKCGpPe61Lh7E6F_ROeeRoAYHF1Fg"
          },
          {
            "title": "Master planning your goals!",
            "id": "1F4eg-nof8bWkSuV-C4QGewYbYindmkPu"
          },
          {
            "title": "The mindset needed to transform your body & life",
            "id": "1Wx3b-6zbXMDldTKgjZtx-uP1tBnzvKz9"
          }
        ]
      },
      {
        "title": "Isometric",
        "type": "BUILD",
        "clips": [
          {
            "title": "BB floor press isometric",
            "id": "1dA19AY7EM3ZzM7xG6vqKYtMfCNrgDIpm"
          },
          {
            "title": "Isometric palloff rotation",
            "id": "1YRc1yfkFbjtdvCgtrTKSuLCCu9QNk5zp"
          },
          {
            "title": "Isometric punch hold",
            "id": "156djlLsvfKwmkmJE2wLnwDyHE39T7Y2B"
          },
          {
            "title": "Trap bar split stance isometric",
            "id": "1v5jDlZ0ze-FwX664eYjo5feB-Xp8Pd-J"
          }
        ]
      },
      {
        "title": "Upper pull",
        "type": "BUILD",
        "clips": [
          {
            "title": "Assisted pull up machine",
            "id": "1UKskynZdy10avXprdYuwcd3QZbYSemCR"
          },
          {
            "title": "DB bent over row",
            "id": "1zF5WbfvroPVary4uYEeaRPzA74hT6gQY"
          },
          {
            "title": "DB Prone row",
            "id": "1u0xZntv4lzsjDUNixBMPnwmZRC5IDY7t"
          },
          {
            "title": "DB single arm row",
            "id": "1MbCUYXMnCszWekYt8_pIF-YithHS7pIR"
          },
          {
            "title": "Machine row",
            "id": "1W1jP_dG7R4xXrxALBH01k0fm-kgxyat1"
          },
          {
            "title": "Pull up_Lat pull-down",
            "id": "1GqfvpzIU6v80l0jzu5HSD8VFQlC9VWza"
          },
          {
            "title": "Seated cable row",
            "id": "1CLkPbgSImoukknRkkgziEEvddqQiZ6fg"
          }
        ]
      },
      {
        "title": "Accessory",
        "type": "BUILD",
        "clips": [
          {
            "title": "4-way neck",
            "id": "1x12ZOEkemM4HQvhmp48TU-TxZP6cqmNB"
          },
          {
            "title": "Banded face pull",
            "id": "1MEYeP9nitMc4oPGUQXBXzyIdFPS0xOAm"
          },
          {
            "title": "DB suitcase carry",
            "id": "1NaTHapTA8kIPlB585AuO_JcQmg6lOgCB"
          },
          {
            "title": "Deadhang",
            "id": "1hvgiIORGgrXzPL0xDqUCm1DqwEJW-zYI"
          },
          {
            "title": "Farmer\u2019s carry",
            "id": "1uy7MUzH8qwR2tNOfFD374LBLfZrAYE4D"
          },
          {
            "title": "Swiss ball neck_4way neck",
            "id": "19UGq1g2n2XrbHb-6J8gBBSviPIpYh_6V"
          }
        ]
      },
      {
        "title": "Full sessions",
        "type": "BUILD",
        "clips": [
          {
            "title": "October Full session 1",
            "id": "1xxuQXUTkfgQWQ8ajb3s6OAJP1XlO9SzH"
          },
          {
            "title": "October full session 2",
            "id": "1oB6wdj3jIiazz1eAMnx45DXZHHakxLVP"
          }
        ]
      }
    ]
  }
};

const state = { selected: new Set(), metric: "rounds", amount: 6, level: "beginner", topic: 0, playing: "" };
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const titleCase = value => value.replace(/\b\w/g, letter => letter.toUpperCase());
const today = new Date();

$("#todayBadge").innerHTML = `${today.toLocaleDateString(undefined, { weekday: "short" }).toUpperCase()} ${today.getDate()}<span>${today.toLocaleDateString(undefined, { month: "long", year: "numeric" }).toUpperCase()}</span>`;

function load(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function escapeHtml(value = "") { const div = document.createElement("div"); div.textContent = value; return div.innerHTML; }
function sessionMovements(session) { return session.movements || [session.stance, ...(session.punches || [])].filter(Boolean).map(name => ({ name, category: "boxing" })); }
function sessionAmount(session) { return session.metric === "time" ? `${session.amount} MIN` : `${session.amount || session.rounds || 0} ROUNDS`; }

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function movementButton(movement, category) {
  const name = typeof movement === "string" ? movement : movement.name;
  const customCategory = typeof movement === "object" ? movement.category : "";
  const key = `${category}:${name}`;
  return `<button class="movement-card ${state.selected.has(key) ? "selected" : ""}" data-name="${escapeHtml(name)}" data-category="${category}" aria-pressed="${state.selected.has(key)}"><span>${escapeHtml(titleCase(name))}</span>${customCategory ? `<small>${escapeHtml(customCategory)}</small>` : `<small>${category === "boxing" ? "BOX" : category === "conditioning" ? "BUILD" : "CUSTOM"}</small>`}<i></i></button>`;
}

function renderMovements() {
  $("#boxingPresets").innerHTML = PRESETS.boxing.map(item => movementButton(item, "boxing")).join("");
  $("#conditioningPresets").innerHTML = PRESETS.conditioning.map(item => movementButton(item, "conditioning")).join("");
  const custom = load(MOVEMENT_KEY);
  $("#customMovements").innerHTML = custom.map(item => movementButton(item, "custom")).join("");
  $("#customSection").classList.toggle("has-custom", custom.length > 0);
  $$(".movement-card").forEach(button => button.addEventListener("click", () => {
    const key = `${button.dataset.category}:${button.dataset.name}`;
    state.selected.has(key) ? state.selected.delete(key) : state.selected.add(key);
    renderMovements(); updateSelection();
  }));
}

function updateSelection() {
  const count = state.selected.size;
  $("#selectionCount").textContent = `${count} movement${count === 1 ? "" : "s"} selected`;
}

$("#showMovementForm").addEventListener("click", () => { $("#movementForm").hidden = false; $("#showMovementForm").hidden = true; $("#movementName").focus(); });
$("#cancelMovement").addEventListener("click", () => { $("#movementForm").hidden = true; $("#showMovementForm").hidden = false; });
$("#movementForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#movementName").value.trim();
  if (!name) return;
  const movements = load(MOVEMENT_KEY);
  if (!movements.some(item => item.name.toLowerCase() === name.toLowerCase())) movements.push({ name, category: $("#movementCategory").value.trim() });
  save(MOVEMENT_KEY, movements); event.target.reset(); event.target.hidden = true; $("#showMovementForm").hidden = false; renderMovements(); showToast("Movement added");
});

$$(".metric-toggle button").forEach(button => button.addEventListener("click", () => {
  state.metric = button.dataset.metric;
  state.amount = state.metric === "rounds" ? 6 : 20;
  $$(".metric-toggle button").forEach(item => item.classList.toggle("active", item === button));
  $("#amountValue").textContent = state.amount; $("#amountUnit").textContent = state.metric === "rounds" ? "ROUNDS" : "MINUTES";
}));
function updateAmount(delta) { const max = state.metric === "rounds" ? 30 : 180; state.amount = Math.max(1, Math.min(max, state.amount + delta)); $("#amountValue").textContent = state.amount; }
$("#amountMinus").addEventListener("click", () => updateAmount(-1));
$("#amountPlus").addEventListener("click", () => updateAmount(1));
$("#note").addEventListener("input", event => $("#noteCount").textContent = `${event.target.value.length}/120`);

$("#saveSession").addEventListener("click", () => {
  if (!state.selected.size) { showToast("Choose at least one movement"); return; }
  const movements = [...state.selected].map(key => { const separator = key.indexOf(":"); return { category: key.slice(0, separator), name: key.slice(separator + 1) }; });
  const sessions = load(SESSION_KEY);
  sessions.unshift({ id: Date.now(), date: new Date().toISOString(), metric: state.metric, amount: state.amount, rounds: state.metric === "rounds" ? state.amount : 0, movements, note: $("#note").value.trim() });
  save(SESSION_KEY, sessions); state.selected.clear(); $("#note").value = ""; $("#noteCount").textContent = "0/120"; renderMovements(); updateSelection(); renderDashboard(); renderHistory(); showToast("Session logged — nice work");
});

function renderDashboard() {
  const sessions = load(SESSION_KEY);
  const weekStart = new Date(); weekStart.setHours(0, 0, 0, 0); weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const week = sessions.filter(item => new Date(item.date) >= weekStart);
  $("#weekSessions").textContent = week.length;
  $("#weekRounds").textContent = week.reduce((sum, item) => sum + (item.metric === "time" ? 0 : (item.amount || item.rounds || 0)), 0);
  $("#allSessions").textContent = sessions.length;
  if (!sessions.length) { $("#recentSession").innerHTML = '<div class="empty-card"><strong>THE BELL IS WAITING</strong><p>Your latest workout will show here.</p></div>'; return; }
  const item = sessions[0];
  $("#recentSession").innerHTML = `<article class="recent-card"><div><span>${new Date(item.date).toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</span><strong>${sessionAmount(item)}</strong></div><div class="tags">${sessionMovements(item).slice(0, 5).map(m => `<span class="tag">${escapeHtml(titleCase(m.name || m))}</span>`).join("")}</div></article>`;
}

function renderLearn() {
  const level = LEARN[state.level];
  const topics = (level.topics || []).map((topic, index) => {
    const open = state.topic === index;
    const clips = topic.clips.map(clip => {
      const playing = state.playing === clip.id;
      return `<article class="clip-card ${playing ? "playing" : ""}">
        <button class="clip-row" data-id="${clip.id}" aria-pressed="${playing}">
          <span>${escapeHtml(clip.title)}</span>
          <small>${playing ? "PLAYING" : "PLAY"}</small>
        </button>
        ${playing ? `<div class="video-frame drive-preview"><iframe class="drive-preview-player" title="${escapeHtml(clip.title)}" src="https://drive.google.com/file/d/${clip.id}/preview" allow="autoplay; fullscreen" allowfullscreen></iframe></div>` : ""}
      </article>`;
    }).join("");
    return `<section class="topic-card ${open ? "open" : ""}">
      <button class="topic-toggle" data-topic="${index}">
        <span class="folder-type">${topic.type}</span>
        <strong>${escapeHtml(topic.title)}</strong>
        <em>${topic.clips.length} CLIP${topic.clips.length === 1 ? "" : "S"}</em>
      </button>
      ${open ? `<div class="clip-list">${clips}</div>` : ""}
    </section>`;
  }).join("");
  $("#learnContent").innerHTML = `<div class="level-intro"><span>${level.number}</span><div><small>${state.level.toUpperCase()}</small><h3>${level.title}</h3><p>${level.copy}</p></div></div>${topics}`;
  $$(".topic-toggle").forEach(button => button.addEventListener("click", () => {
    const index = Number(button.dataset.topic);
    state.topic = state.topic === index ? -1 : index;
    state.playing = "";
    renderLearn();
  }));
  $$(".clip-row").forEach(button => button.addEventListener("click", () => {
    state.playing = state.playing === button.dataset.id ? "" : button.dataset.id;
    renderLearn();
  }));
}
$$(".level-tabs button").forEach(button => button.addEventListener("click", () => {
  state.level = button.dataset.level;
  state.topic = 0;
  state.playing = "";
  $$(".level-tabs button").forEach(item => item.classList.toggle("active", item === button));
  renderLearn();
}));

function renderHistory() {
  const sessions = load(SESSION_KEY);
  $("#totalSessions").textContent = sessions.length;
  if (!sessions.length) { $("#historyList").innerHTML = '<div class="empty"><strong>NO WORK YET</strong><p>Log a workout and your sessions will stack up here by day.</p></div>'; return; }
  const days = new Map();
  sessions.forEach(session => { const date = new Date(session.date); const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`; if (!days.has(key)) days.set(key, { date, sessions: [] }); days.get(key).sessions.push(session); });
  $("#historyList").innerHTML = [...days.values()].map(day => `<section class="day-group"><header class="day-header"><div><div class="history-date">${day.date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</div><span>${day.sessions.length} ${day.sessions.length === 1 ? "SESSION" : "SESSIONS"}</span></div></header>${day.sessions.map(session => `<article class="history-card"><header><div class="history-time">${new Date(session.date).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}</div><div class="history-rounds">${sessionAmount(session)}</div></header><div class="tags">${sessionMovements(session).map(item => `<span class="tag ${item.category || ""}">${escapeHtml(titleCase(item.name || item))}</span>`).join("")}</div>${session.note ? `<p class="history-note">${escapeHtml(session.note)}</p>` : ""}<button class="delete-session" data-id="${session.id}" aria-label="Delete this session">DELETE</button></article>`).join("")}</section>`).join("");
  $$(".delete-session").forEach(button => button.addEventListener("click", () => { save(SESSION_KEY, load(SESSION_KEY).filter(item => String(item.id) !== button.dataset.id)); renderHistory(); renderDashboard(); showToast("Session deleted"); }));
}

function showView(viewId) {
  $$(".nav-button").forEach(item => item.classList.toggle("active", item.dataset.view === viewId));
  $$(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
  if (viewId === "historyView") renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$$(".nav-button").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => showView(button.dataset.go)));

renderMovements(); updateSelection(); renderLearn(); renderDashboard(); renderHistory();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
