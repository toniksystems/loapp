import FormInput from './FormInput';

const AddNewStaffForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-10">
      <form>
        <section>
          <h2 className="text-xl font-semibold text-nimasa-dark-text mb-8">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <FormInput label="First Name" id="firstName" defaultValue="Sanusi" />
            <FormInput label="Last Name" id="lastName" defaultValue="Kadri" />
            <FormInput label="Employee ID" id="employeeId" defaultValue="MS/HR/2010 - 121" />
            <FormInput label="Job Title" id="jobTitle" defaultValue="Head of Marine Environment Management" />
            <FormInput label="Department" id="department" defaultValue="Marine Environment Management" />
            <FormInput label="Supervisor" id="supervisor" defaultValue="Usman Mohammed" />
            <FormInput label="Email" id="email" type="email" defaultValue="sanusi.k@nimasa.gov.ng" />
            <FormInput label="Phone Number" id="phone" type="tel" defaultValue="+23481000001234" />
            <FormInput label="Date of Birth" id="dob" defaultValue="18-10-1980" />
            <FormInput label="Date of Employment" id="employmentDate" defaultValue="24-04-2010" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-nimasa-dark-text mb-8">Role and Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <FormInput label="User Role" id="userRole" defaultValue="Employee" />
            <FormInput label="Reporting Manager" id="reportingManager" defaultValue="Shade Morgan" />
            <FormInput label="Initial Password" id="initialPassword" type="password" placeholder="Temporary Password" />
          </div>
        </section>

        <div className="mt-14 flex justify-center">
          <button
            type="submit"
            className="bg-nimasa-blue text-white font-bold py-3 px-16 rounded-xl text-xl shadow-lg hover:bg-blue-700 transition-colors"
          >
            Save Staff
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStaffForm;
