function WardForm(props) {
  return (
    <div>
      <h1>Ward Form</h1>
      <form onSubmit={props.hangleForm}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="number"
            name="number"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="contact_no">Contact Number</label>
          <input
            id="contact_no"
            type="number"
            name="contact_no"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="population">Population</label>
          <input
            id="population"
            type="number"
            name="population"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_first_name_en">
            Chief First Name (English)
          </label>
          <input
            id="chief_first_name_en"
            type="text"
            name="chief_first_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_middle_name_en">
            Chief Middle Name (English)
          </label>
          <input
            id="chief_middle_name_en"
            type="text"
            name="chief_middle_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_last_name_en">Chief Last Name (English)</label>
          <input
            id="chief_last_name_en"
            type="text"
            name="chief_last_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_first_name_np">Chief First Name (Nepali)</label>
          <input
            id="chief_first_name_np"
            type="text"
            name="chief_first_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_middle_name_np">
            Chief Middle Name (Nepali)
          </label>
          <input
            id="chief_middle_name_np"
            type="text"
            name="chief_middle_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="chief_last_name_np">Chief Last Name (Nepali)</label>
          <input
            id="chief_last_name_np"
            type="text"
            name="chief_last_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default WardForm;
