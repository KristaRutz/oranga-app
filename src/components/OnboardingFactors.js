/*
Burnout Factors
*/

const WORKLOAD = "workload";
const CONTROL = "control";
const REWARD = "reward";
const COMMUNITY = "community";
const FAIRNESS = "fairness";
const VALUES = "values";
const NOT_SURE = "not sure";
const OTHER = "other";

/*
Burnout Alleviation Strategies
*/

const REFLECTING = "Reflecting";
const TALKING_TO_MANAGER = "Talking to manager";
const DAILY_PLANNING = "Daily planning";
const UNPLUGGING_DIGITALLY = "Unplugging digitally";
const SETTING_INTENTIONAL_TIME = "Setting intentional time";
const JOURNALING = "Journaling";
const MEDITATION = "Meditation";
const EXERCISE = "Exercising";
const TAKING_INITIATIVE = "Taking initiative";
const GOAL_SETTING = "Goal setting";
const BENCHMARKING = "Benchmarking";
const DISCUSSING_WITH_COWORKERS = "Discussing with coworkers";
const SEEKING_OPPORTUNITIES = "Seeking opportunities";
const SPEAKING_UP = "Speaking up";
const SEEING_A_THERAPIST = "Seeing a therapist";
const PRACTICING_MINDFULNESS = "Practicing mindfulness";

export const strategies = [
  {
    id: 0,
    name: REFLECTING,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 1,
    name: TALKING_TO_MANAGER,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 2,
    name: DAILY_PLANNING,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 3,
    name: UNPLUGGING_DIGITALLY,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 4,
    name: SETTING_INTENTIONAL_TIME,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 5,
    name: JOURNALING,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 6,
    name: MEDITATION,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 7,
    name: EXERCISE,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 8,
    name: TAKING_INITIATIVE,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 9,
    name: GOAL_SETTING,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 10,
    name: BENCHMARKING,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 11,
    name: DISCUSSING_WITH_COWORKERS,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 12,
    name: SEEKING_OPPORTUNITIES,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 13,
    name: SPEAKING_UP,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 14,
    name: SEEING_A_THERAPIST,
    isUsing: false,
    isEffective: null,
  },
  {
    id: 15,
    name: PRACTICING_MINDFULNESS,
    isUsing: false,
    isEffective: null,
  },
];

export const factors = {
  0: {
    id: 0,
    name: WORKLOAD,
    strategies: [0, 1, 2, 3, 4, 6, 7, 9, 10],
    description: "I feel that my workload is too heavy",
    data:
      "52% of respondents in one study suggested that pressure at work, including too many priorities and targets, contributed to burnout (Deloitte, 2020)",
  },
  1: {
    id: 1,
    name: CONTROL,
    strategies: [0, 5, 8, 6, 7, 14, 15],
    description: "I feel that I don't have control over my work context",
    data:
      "Young professionals who feel they have a high level of control over their career are 56% happier than those who feel they are not in control (ZenithOptimedia 2015)",
  },
  2: {
    id: 2,
    name: REWARD,
    strategies: [0, 1, 9, 10, 6, 7, 12, 11],
    description: "I feel that am not appropiately rewarded for the work I do",
    data:
      "38% of millennials who are currently working said they were actively looking for a different role and 43% said they were open to offers (PwC 2019)",
  },
  3: {
    id: 3,
    name: COMMUNITY,
    strategies: [0, 1, 4, 11, 14, 15, 6, 7, 3],
    description: "I feel like my workplace culture encourages burnout",
    data:
      "Over 40% of 18 to 24-year-old employees admit to working more than their contracted hours and can be classified as “work martyrs”, i.e. those overworking to show dedication (HBR 2016, HR Review, UK Study)",
  },
  4: {
    id: 4,
    name: FAIRNESS,
    strategies: [0, 1, 11, 15, 6, 7, 10, 12],
    description: "I feel that I'm not treated fairly at work",
    data:
      "More than 53% of young professionals believe that fairness is “extremely influential or moderately influential” for engagement and motivation (WorldatWork 2019)",
  },
  5: {
    id: 5,
    name: VALUES,
    strategies: [0, 5, 12, 13, 15, 6, 7, 9],
    description: "I feel that my work doesn't align with my values",
    data:
      "38% of millennials who are currently working say they are actively looking for a different role and 43% say they are open to offers (PwC 2019)",
  },
  6: {
    id: 6,
    name: NOT_SURE,
    strategies: [0, 14, 15, 6, 7, 5],
    description: "I'm not sure",
    data:
      "Only 49% of employees feel comfortable talking to their line manager about their mental health (Deloitte 2020)",
  },
  7: {
    id: 7,
    name: OTHER,
    strategies: [0, 3, 14, 15, 6, 7, 11],
    description: "Other",
    data:
      "Only 49% of employees feel comfortable talking to their line manager about their mental health (Deloitte 2020)",
  },
};

// const strategiesObj = {
//   0: {
//     id: 0,
//     name: REFLECTING,
//     isUsing: false,
//     isEffective: null,
//   },
//   1: {
//     id: 1,
//     name: TALKING_TO_MANAGER,
//     isUsing: false,
//     isEffective: null,
//   },
//   2: {
//     id: 2,
//     name: DAILY_PLANNING,
//     isUsing: false,
//     isEffective: null,
//   },
//   3: {
//     id: 3,
//     name: UNPLUGGING_DIGITALLY,
//     isUsing: false,
//     isEffective: null,
//   },
//   4: {
//     id: 4,
//     name: SET_INTENTIONAL_TIME,
//     isUsing: false,
//     isEffective: null,
//   },
//   5: {
//     id: 5,
//     name: JOURNALING,
//     isUsing: false,
//     isEffective: null,
//   },
//   6: {
//     id: 6,
//     name: MEDITATION,
//     isUsing: false,
//     isEffective: null,
//   },
//   7: {
//     id: 7,
//     name: EXERCISE,
//     isUsing: false,
//     isEffective: null,
//   },
// };
