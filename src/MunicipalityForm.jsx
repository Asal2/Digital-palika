import "./App.css";
function MunicipalityForm(props) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Municipality Form</h1>
      <form
        onSubmit={props.hangleForm}
        className="border rounded w-full py-2 px-3 mt-1 text-justify"
      >
        <div className="my-2 mx-5">
          <label htmlFor="name_en">Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="name_en"
            placeholder="English"
            type="text"
            name="name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="name_np">Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="name_np"
            placeholder="Nepali"
            type="text"
            name="name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="municipality_type">Municipality Type</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="municipality_type"
            type="text"
            name="municipality_type"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="population">Population</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="population"
            type="number"
            name="population"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5"> 
          <label htmlFor="annual_income">Annual Income</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="annual_income"
            type="number"
            name="annual_income"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="website">Website</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="website"
            type="text"
            name="website"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_first_name_en">
            Mayor First Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_first_name_en"
            placeholder="English"
            type="text"
            name="mayor_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_last_name_en">Mayor Last Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_last_name_en"
            placeholder="English"
            type="text"
            name="mayor_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_middle_name_en">
            Mayor Middle Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_middle_name_en"
            placeholder="English"
            type="text"
            name="mayor_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_first_name_np">Mayor First Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_first_name_np"
            placeholder="Nepali"
            type="text"
            name="mayor_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_last_name_np">Mayor Last Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_last_name_np"
            placeholder="Nepali"
            type="text"
            name="mayor_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_middle_name_np">
            Mayor Middle Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_middle_name_np"
            placeholder="Nepali"
            type="text"
            name="mayor_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="mayor_phone">Mayor Phone</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="mayor_phone"
            type="number"
            name="mayor_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_first_name_en">
            Deputy Mayor First Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_first_name_en"
            placeholder="English"
            type="text"
            name="deputy_mayor_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_last_name_en">
            Deputy Mayor Last Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_last_name_en"
            placeholder="English"
            type="text"
            name="deputy_mayor_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_middle_name_en">
            Deputy Mayor Middle Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_middle_name_en"
            placeholder="English"
            type="text"
            name="deputy_mayor_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_first_name_np">
            Deputy Mayor First Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_first_name_np"
            placeholder="Nepali"
            type="text"
            name="deputy_mayor_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_last_name_np">
            Deputy Mayor Last Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_last_name_np"
            placeholder="Nepali"
            type="text"
            name="deputy_mayor_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_middle_name_np">
            Deputy Mayor Middle Name
          </label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_middle_name_np"
            placeholder="Nepali"
            type="text"
            name="deputy_mayor_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="deputy_mayor_phone">Deputy Mayor Phone</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="deputy_mayor_phone"
            type="number"
            name="deputy_mayor_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_first_name_en">CAO First Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_first_name_en"
            placeholder="English"
            type="text"
            name="CAO_first_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_middle_name_en">CAO Middle Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_middle_name_en"
            placeholder="English"
            type="text"
            name="CAO_middle_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_last_name_en">CAO Last Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_last_name_en"
            placeholder="English"
            type="text"
            name="CAO_last_name_en"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_first_name_np">CAO First Name</label>
          <input    
            className="ml-10 border border-gray-500 text-right"
            id="CAO_first_name_np"
            placeholder="Nepali"
            type="text"
            name="CAO_first_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_middle_name_np">CAO Middle Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_middle_name_np"
            placeholder="Nepali"
            type="text"
            name="CAO_middle_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_last_name_np">CAO Last Name</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_last_name_np"
            placeholder="Nepali"
            type="text"
            name="CAO_last_name_np"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="CAO_phone">CAO Phone</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="CAO_phone"
            type="number"
            name="CAO_phone"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="total_ward_no">Total Ward No</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="total_ward_no"
            type="number"
            name="total_ward_no"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="total_area">Total Area</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="total_area"
            type="number"
            name="total_area"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="contact_no">Contact No</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="contact_no"
            type="number"
            name="contact_no"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="email">Email</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="email"
            type="email"
            name="email"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5">
          <label htmlFor="district">District</label>
          <input
            className="ml-10 border border-gray-500 text-right"
            id="district"
            type="text"
            name="district"
            value={props.municipalityData}
            onChange={props.toggle}
          />
        </div>
        <button type="submit" className="mt-3 bg-green-500 w-80 h-9 rounded-t-lg rounded-b-lg">Submit</button>
      </form>
    </div>
  );
}
export default MunicipalityForm;
