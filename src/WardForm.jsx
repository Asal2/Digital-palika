import "./App.css";
function WardForm(props) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <div className=" w-auto h-24 bg-blue-950 text-white rounded-t-lg">
        <div className="pt-5">
          <h1 className="text-2xl">Ward</h1>
        </div>
      </div>
      <form
        onSubmit={props.hangleForm} 
        className="border rounded w-full py-2 px-3 mt-1"
      >
        <div className="my-2 mx-5 flex">
          <label htmlFor="description">Description</label>
          <input
            className="ml-auto border border-gray-500 text-right"
            id="description"
            type="text"
            name="description"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="number">Number</label>
          <input
            className="ml-auto border border-gray-500"
            id="number"
            type="number"
            name="number"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="address">Address</label>
          <input
            className="ml-auto border border-gray-500"
            id="address"
            type="text"
            name="address"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="contact_no">Contact Number</label>
          <input
            className="ml-auto border border-gray-500"
            id="contact_no"
            type="number"
            name="contact_no"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="email">Email</label>
          <input
            className="ml-auto border border-gray-500"
            id="email"
            type="email"
            name="email"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="population">Population</label>
          <input
            className="ml-auto border border-gray-500"
            id="population"
            type="number"
            name="population"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_first_name_en">Chief First Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="chief_first_name_en"
            type="text"
            name="chief_first_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_middle_name_en">Chief Middle Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="chief_middle_name_en"
            type="text"
            name="chief_middle_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_last_name_en">Chief Last Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="chief_last_name_en"
            type="text"
            name="chief_last_name_en"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_first_name_np">Chief First Name</label>
          <input
            className="ml-auto border border-gray-500"
            placeholder="Nepali"
            id="chief_first_name_np"
            type="text"
            name="chief_first_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_middle_name_np">Chief Middle Name</label>
          <input
            className="ml-auto border border-gray-500"
            placeholder="Nepali"
            id="chief_middle_name_np"
            type="text"
            name="chief_middle_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="chief_last_name_np">Chief Last Name</label>
          <input
            className="ml-auto border border-gray-500"
            placeholder="Nepali"
            id="chief_last_name_np"
            type="text"
            name="chief_last_name_np"
            value={props.wardData}
            onChange={props.toggle}
          />
        </div>
        <button type="submit" className="mt-3 bg-green-500 w-80 h-9 rounded-t-lg rounded-b-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
export default WardForm;
