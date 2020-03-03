const db = require("./conn");

class ClassInfo {
  constructor(id, name, rank) {
    this.id = id;
    this.name = name;
    this.rank = rank;
  }

  static async getAllTopicData() {
    try {
      const response = await db.any(`SELECT * FROM topics
      INNER JOIN class_status
      ON topics.status_id = class_status.id
      ORDER BY topics.id;`);
      console.log(response);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }

  static async getAllStatuses() {
    try {
      const response = await db.any(`SELECT * FROM class_status;`);
      //console.log(response);
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = ClassInfo;
