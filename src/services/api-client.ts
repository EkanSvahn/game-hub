import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ec73e4d1adf4e69a031afc2a48ad1b2",
  },
});
