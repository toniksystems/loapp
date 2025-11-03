import ProfileInputField from './ProfileInputField';

const PersonalInformation = () => {
    const personalInfo = {
        firstName: 'Akin',
        lastName: 'Adebola',
        employeeId: 'MS/HR/2015-331',
        jobTitle: 'Maritime Safety Officer',
        department: 'Marine Environment Management',
        supervisor: 'Sanusi Kadri',
        email: 'Akin.A@nimasa.gov.ng',
        phone: '+23481000000009',
        emergencyContactName: 'Tolulope',
        emergencyContactPhone: '+2348123456799',
        dob: '18-10-1983',
        employmentDate: '24-04-2015',
        address: 'Plot 10, Billings Way, Victoria Island Lagos',
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-4">
            <h3 className="text-base font-semibold text-nimasa-dark-text mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <ProfileInputField label="First Name" value={personalInfo.firstName} />
                <ProfileInputField label="Last Name" value={personalInfo.lastName} />
                <ProfileInputField label="Employee ID" value={personalInfo.employeeId} />
                <ProfileInputField label="Job Title" value={personalInfo.jobTitle} />
                <ProfileInputField label="Department" value={personalInfo.department} />
                <ProfileInputField label="Supervisor" value={personalInfo.supervisor} />
                <ProfileInputField label="Email" value={personalInfo.email} />
                <ProfileInputField label="Phone Number" value={personalInfo.phone} />
                <ProfileInputField label="Emergency Contact Name" value={personalInfo.emergencyContactName} />
                <ProfileInputField label="Emergency Contact Phone" value={personalInfo.emergencyContactPhone} />
                <ProfileInputField label="Date of Birth" value={personalInfo.dob} />
                <ProfileInputField label="Date of Employment" value={personalInfo.employmentDate} />
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-nimasa-dark-text mb-1.5">Home Address</label>
                    <div className="w-full px-4 py-2 bg-input-bg rounded-lg border border-gray-300 text-nimasa-dark-text text-sm flex items-center">
                        {personalInfo.address}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
