import { legacy_createStore as createStore } from "redux";

export const initialValue = {
  profile: {
    // name: null,
    photo_url: "",
    first_name: "",
    last_name: "",
    role: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    phone_number: "",
    website: "",
    email: "",
  },
  objective: "",
  color: {
    backGroundColor: "rgb(255, 255, 255)",
    textColor: "rgb(1,1,1)",
  },
  hobbies: [],
  languages: [],
  skills: [],
  honor: [],
  work_experience: [],
  project: [],
  education: [],
};

const reducer = (state = initialValue, action) => {
  console.log(action);
  switch (action.type) {
    case "PROFILE": {
      return { ...state, profile: action["values"] };
    }

    case "OBJECTIVE": {
      return { ...state, objective: action["values"] };
    }
    case "COLOR": {
      return { ...state, color: action["values"] };
    }
    case "HOBBIES": {
      return { ...state, hobbies: action["values"] };
    }
    case "LANGUAGES": {
      return { ...state, languages: action["values"] };
    }
    case "SKILLS": {
      return { ...state, skills: action["values"] };
    }
    case "HONOR": {
      return { ...state, honor: action["values"] };
    }
    case "WORK_EXPERIENCE": {
      return { ...state, work_experience: action["values"] };
    }
    case "PROJECT": {
      return { ...state, project: action["values"] };
    }
    case "EDUCATION": {
      return { ...state, education: action["values"] };
    }
    default:
      return { ...state };
  }
};

export default reducer;

export const updateProfile = (values) => {
  return {
    type: "PROFILE",
    values,
  };
};

export const updateColor = (values) => {
  return {
    type: "COLOR",
    values,
  };
};

export const updateObjective = (values) => {
  return { type: "OBJECTIVE", values };
};

export const updateHobbies = (values) => {
  return { type: "HOBBIES", values };
};

export const updateLanguages = (values) => {
  return { type: "LANGUAGES", values };
};

export const updateSkills = (values) => {
  return { type: "SKILLS", values };
};

export const updateHonor = (values) => {
  return { type: "HONOR", values };
};

export const updateWorkExperience = (values) => {
  return { type: "WORK_EXPERIENCE", values };
};

export const updateProject = (values) => {
  return { type: "PROJECT", values };
};

export const updateEducation = (values) => {
  return { type: "EDUCATION", values };
};

export const store = createStore(reducer);
