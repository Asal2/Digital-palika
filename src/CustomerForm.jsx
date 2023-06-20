import "./App.css";
function CustomerForm(props) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <div className=" w-auto h-24 bg-blue-950 text-white rounded-t-lg">
        <div className="pt-5">
          <h1 className="text-2xl">Customer</h1>
        </div>
      </div>
      <form
        onSubmit={props.hangleForm}
        className="border rounded w-full py-2 px-3 mt-1"
      >
        <div className="my-2 mx-5 flex">
          <label htmlFor="username">Username</label>
          <input
            className="ml-auto border border-gray-500"
            id="username"
            type="text"
            name="username"
            value={props.customerData}
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
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="phone_no">Phone Number</label>
          <input
            className="ml-auto border border-gray-500"
            id="phone_no"
            type="tel"
            name="phone_no"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="first_name_en">First Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="first_name_en"
            type="text"
            placeholder="English"
            name="first_name_en"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="middle_name_en">Middle Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="middle_name_en"
            placeholder="English"
            type="text"
            name="middle_name_en"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="last_name_en">Last Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="last_name_en"
            type="text"
            placeholder="English"
            name="last_name_en"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="first_name_np">First Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="first_name_np"
            type="text"
            placeholder="Nepali"
            name="first_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="middle_name_np">Middle Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="middle_name_np"
            type="text"
            placeholder="Nepali"
            name="middle_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="last_name_np">Last Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="last_name_np"
            type="text"
            placeholder="Nepali"
            name="last_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="post">Post</label>
          <input
            className="ml-auto border border-gray-500"
            id="post"
            type="text"
            placeholder="English"
            name="post"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="role">Role</label>
          <input
            className="ml-auto border border-gray-500"
            id="role"
            type="text"
            placeholder="English"
            name="role"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="gender">Gender</label>
          <input
            className="ml-auto border border-gray-500"
            id="gender"
            type="text"
            placeholder="English"
            name="gender"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="ward_no">Ward Number</label>
          <input
            className="ml-auto border border-gray-500"
            id="ward_no"
            type="text"
            placeholder="English"
            name="ward_no"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div className="my-2 mx-5 flex">
          <label htmlFor="municipality_name">Municipality Name</label>
          <input
            className="ml-auto border border-gray-500"
            id="municipality_name"
            type="text"
            placeholder="English"
            name="municipality_name"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <button
          type="submit"
          className="mt-3 bg-green-500 w-80 h-9 rounded-t-lg rounded-b-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default CustomerForm;
