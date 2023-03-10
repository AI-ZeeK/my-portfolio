import { createSlice } from "@reduxjs/toolkit";
import { NavData, TechStack } from "../data/AppData";

// Getting Last used theme from local storage
if (typeof window !== "undefined") {
  // i used var because at the time i felt like i had no choice but do declare my variable globally
  var item =
    localStorage.getItem("currentTheme") !== null
      ? JSON.parse(`${localStorage.getItem("currentTheme")}`)
      : [];
}

export interface CounterState {
  navToggle: boolean;
  themeToggle: boolean;
  navData: any[];
  currentTheme: string;
  isChecked: boolean;
  skillshead: any[];
  stackhead: any[];
  formData: object;
  formSent: boolean;
  formBtnAble: boolean;
}

const initialState: CounterState = {
  navToggle: false,
  themeToggle: false,
  navData: NavData,
  currentTheme: item,
  isChecked: false,
  skillshead: TechStack,
  stackhead: [],
  formData: {
    name: "",
    email: "",
    message: "",
  },
  formSent: false,
  formBtnAble: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavToggle: (state) => {
      state.navToggle = !state.navToggle;
      console.log(state.navToggle);
    },
    setThemeToggle: (state) => {
      state.themeToggle = !state.themeToggle;

      console.log(state.themeToggle);
    },
    setIsChecked: (state) => {
      state.themeToggle = true;

      console.log(state.themeToggle);
    },
    setCloseThemeBar: (state) => {
      state.themeToggle = false;

      console.log(state.themeToggle);
    },
    setNavSelect: (state, { payload }) => {
      // const navItem = state.navData.find((item) => item.id === payload);
      // navItem.state = navItem ? !navItem.state : false;

      const X = state.navData.map((item) => {
        console.log(item.id, "green");
        return item.id === payload
          ? { ...item, state: true }
          : { ...item, state: false };
      });
      state.navData = X;
    },
    setNavObserveSelect: (state, { payload }) => {
      // const navItem = state.navData.find((item) => item.id === payload);
      // navItem.state = navItem ? !navItem.state : false;

      const X = state.navData.map((item) => {
        return item.head.toLowerCase() === payload.toLowerCase()
          ? { ...item, state: true }
          : { ...item, state: false };
      });
      state.navData = X;
      console.log("greeen", payload);
    },
    toggleSkillsBox: (state, { payload }) => {
      // const navItem = state.navData.find((item) => item.id === payload);
      // navItem.state = navItem ? !navItem.state : false;

      const X = state.skillshead.map((item) => {
        console.log(item.id, "green");
        return item.id === payload ? { ...item, state: !item.state } : item;
      });
      state.skillshead = X;
      console.log("greeen", state.navData, payload, X);
    },
    setTheme: (state, { payload }) => {
      const Toggle = document.body;
      switch (payload) {
        case "dim":
          Toggle.classList.add("dim");
          Toggle.classList.remove("black");
          Toggle.classList.remove("coffee");
          break;
        case "black":
          Toggle.classList.add("black");
          Toggle.classList.remove("dim");
          Toggle.classList.remove("coffee");
          break;
        case "coffee":
          Toggle.classList.add("coffee");
          Toggle.classList.remove("dim");
          Toggle.classList.remove("black");
          break;
        default:
          Toggle.classList.remove("dim");
          Toggle.classList.remove("black");
          Toggle.classList.remove("coffee");
          break;
      }
      // Saving last clicked theme to localstorage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "currentTheme",
          JSON.stringify((state.currentTheme = payload))
        );
      }
    },
    setFormData: (state, { payload }) => {
      state.formData = payload;
    },
    setFormSend: (state) => {
      state.formSent = true;
    },
    setFormSent: (state) => {
      state.formSent = false;
    },
    setFormBtnAble: (state) => {
      state.formBtnAble = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNavToggle,
  setThemeToggle,
  setNavSelect,
  setCloseThemeBar,
  setTheme,
  setIsChecked,
  toggleSkillsBox,
  setFormData,
  setFormBtnAble,
  setFormSent,
  setFormSend,
  setNavObserveSelect,
} = appSlice.actions;

export default appSlice.reducer;
