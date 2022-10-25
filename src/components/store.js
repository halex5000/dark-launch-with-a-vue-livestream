import { reactive } from "vue";

export const store = reactive({
  username: "anonymous",
  milestones: [],
  toggleLogin() {
    this.showLogin = !this.showLogin;
  },
  setUsername(username) {
    this.username = username;
  },
  prependItem(item) {
    this.items = [item, ...this.items];
  },
  resetStore() {
    this.items = ogItems;
  },
});
