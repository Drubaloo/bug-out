import axios from "axios";

export default {
  // Gets all bugs
  getBugs: function() {
    return axios.get("/api");
  },
  // Gets the bug with the given id
  getBug: function(id) {
    return axios.get("/api/bugs/" + id);
  },
  // Deletes the bug with the given id
  deleteBug: function(id) {
    return axios.delete("/api/bugs/" + id);
  },
  // Saves a bug to the database
  saveBug: function(bugData) {
    return axios.post("/api/bugs", bugData);
  }
};
