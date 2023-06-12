import "./App.css";
function CustomerForm(props) {
  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={props.hangleForm}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={props.customerData.username}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={props.customerData.email}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="phone_no">Phone Number</label>
          <input
            id="phone_no"
            type="tel"
            name="phone_no"
            value={props.customerData.phone_no}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="first_name_en">First Name (English)</label>
          <input
            id="first_name_en"
            type="text"
            name="first_name_en"
            value={props.customerData.first_name_en}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="middle_name_en">Middle Name (English)</label>
          <input
            id="middle_name_en"
            type="text"
            name="middle_name_en"
            value={props.customerData.middle_name_en}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="last_name_en">Last Name (English)</label>
          <input
            id="last_name_en"
            type="text"
            name="last_name_en"
            value={props.customerData.last_name_en}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="first_name_np">First Name (Nepali)</label>
          <input
            id="first_name_np"
            type="text"
            name="first_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="middle_name_np">Middle Name (Nepali)</label>
          <input
            id="middle_name_np"
            type="text"
            name="middle_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="last_name_np">Last Name (Nepali)</label>
          <input
            id="last_name_np"
            type="text"
            name="last_name_np"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="post">Post</label>
          <input
            id="post"
            type="text"
            name="post"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            type="text"
            name="role"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            id="gender"
            type="text"
            name="gender"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="ward_no">Ward Number</label>
          <input
            id="ward_no"
            type="text"
            name="ward_no"
            value={props.customerData}
            onChange={props.toggle}
          />
        </div>
        <div>
          <label htmlFor="municipality_name">Municipality Name</label>
          <input
            id="municipality_name"
            type="text"
            name="municipality_name"
            value={props.customerData.municipality_name}
            onChange={props.toggle}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CustomerForm;
