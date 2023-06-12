function MunicipalityForm(props) {
  return (
    <div>
      <h1>Municipality Form</h1>
      <form onSubmit={props.hangleForm}>
        <div>
          <label htmlFor="name_en">Name (English)</label>
          <input
            id="name_en"
            type="text"
            name="name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="name_np">Name (Nepali)</label>
          <input
            id="name_np"
            type="text"
            name="name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="municipality_type">Municipality Type</label>
          <input
            id="municipality_type"
            type="text"
            name="municipality_type"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="population">Population</label>
          <input
            id="population"
            type="number"
            name="population"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="annual_income">Annual Income</label>
          <input
            id="annual_income"
            type="number"
            name="annual_income"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            name="website"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_first_name_en">
            Mayor First Name (English)
          </label>
          <input
            id="mayor_first_name_en"
            type="text"
            name="mayor_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_last_name_en">Mayor Last Name (English)</label>
          <input
            id="mayor_last_name_en"
            type="text"
            name="mayor_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_middle_name_en">
            Mayor Middle Name (English)
          </label>
          <input
            id="mayor_middle_name_en"
            type="text"
            name="mayor_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_first_name_np">Mayor First Name (Nepali)</label>
          <input
            id="mayor_first_name_np"
            type="text"
            name="mayor_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_last_name_np">Mayor Last Name (Nepali)</label>
          <input
            id="mayor_last_name_np"
            type="text"
            name="mayor_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_middle_name_np">
            Mayor Middle Name (Nepali)
          </label>
          <input
            id="mayor_middle_name_np"
            type="text"
            name="mayor_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="mayor_phone">Mayor Phone</label>
          <input
            id="mayor_phone"
            type="number"
            name="mayor_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_first_name_en">
            Deputy Mayor First Name (English)
          </label>
          <input
            id="deputy_mayor_first_name_en"
            type="text"
            name="deputy_mayor_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_last_name_en">
            Deputy Mayor Last Name (English)
          </label>
          <input
            id="deputy_mayor_last_name_en"
            type="text"
            name="deputy_mayor_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_middle_name_en">
            Deputy Mayor Middle Name (English)
          </label>
          <input
            id="deputy_mayor_middle_name_en"
            type="text"
            name="deputy_mayor_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_first_name_np">
            Deputy Mayor First Name (Nepali)
          </label>
          <input
            id="deputy_mayor_first_name_np"
            type="text"
            name="deputy_mayor_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_last_name_np">
            Deputy Mayor Last Name (Nepali)
          </label>
          <input
            id="deputy_mayor_last_name_np"
            type="text"
            name="deputy_mayor_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_middle_name_np">
            Deputy Mayor Middle Name (Nepali)
          </label>
          <input
            id="deputy_mayor_middle_name_np"
            type="text"
            name="deputy_mayor_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="deputy_mayor_phone">Deputy Mayor Phone</label>
          <input
            id="deputy_mayor_phone"
            type="number"
            name="deputy_mayor_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_first_name_en">CAO First Name (English)</label>
          <input
            id="CAO_first_name_en"
            type="text"
            name="CAO_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_middle_name_en">CAO Middle Name (English)</label>
          <input
            id="CAO_middle_name_en"
            type="text"
            name="CAO_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_last_name_en">CAO Last Name (English)</label>
          <input
            id="CAO_last_name_en"
            type="text"
            name="CAO_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_first_name_np">CAO First Name (Nepali)</label>
          <input
            id="CAO_first_name_np"
            type="text"
            name="CAO_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_middle_name_np">CAO Middle Name (Nepali)</label>
          <input
            id="CAO_middle_name_np"
            type="text"
            name="CAO_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_last_name_np">CAO Last Name (Nepali)</label>
          <input
            id="CAO_last_name_np"
            type="text"
            name="CAO_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="CAO_phone">CAO Phone</label>
          <input
            id="CAO_phone"
            type="number"
            name="CAO_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="total_ward_no">Total Ward No</label>
          <input
            id="total_ward_no"
            type="number"
            name="total_ward_no"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="total_area">Total Area</label>
          <input
            id="total_area"
            type="number"
            name="total_area"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="contact_no">Contact No</label>
          <input
            id="contact_no"
            type="number"
            name="contact_no"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="district">District</label>
          <input
            id="district"
            type="text"
            name="district"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default MunicipalityForm;
