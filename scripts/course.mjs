// course.mjs
const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",
  sections: [
    { sectionNumber: 1, enrolled: 88, instructor: "Brother Bingham" },
    { sectionNumber: 2, enrolled: 81, instructor: "Sister Shultz" },
    { sectionNumber: 3, enrolled: 95, instructor: "Sister Smith" },
  ],
  changeEnrollment: function (sectionNumber, add = true) {
    // normalize the incoming sectionNumber (handles string or number)
    const sNum = Number(sectionNumber);
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNumber === sNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        // protect against negative enroll counts
        if (this.sections[sectionIndex].enrolled > 0) {
          this.sections[sectionIndex].enrolled--;
        }
      }
    }
  },
};

export default byuiCourse;