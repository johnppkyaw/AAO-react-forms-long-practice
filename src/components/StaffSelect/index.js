const StaffSelect = ({setStaff, staff}) => {
  return (
    <div id="staff">
        <fieldset onChange={(e) => setStaff(prev => e.target.value)} value={staff}>
          <legend>Staff: </legend>

        <label htmlFor="instructor">Instructor</label>
        <input
          type="radio"
          name="staff"
          id="instructor"
          value="instructor"
        ></input>

        <label htmlFor="student">Student</label>
        <input
          type="radio"
          name="staff"
          id="student"
          value="student"
        ></input>

        </fieldset>
    </div>
  )
};

export default StaffSelect;
