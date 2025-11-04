import { allApplications } from '../../data/allApplicationsData';
import AllApplicationsListItem from './AllApplicationsListItem';
import AllApplicationsPagination from './AllApplicationsPagination';

const AllApplicationsList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-nimasa-dark-text mb-6">Full Application List</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-5 px-5 pb-5 text-base font-medium text-gray-500 uppercase">
            <div className="col-span-1 flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-400" />
            </div>
            <div className="col-span-3">Employee Name and ID</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Dates</div>
            <div className="col-span-2">HOD Status</div>
            <div className="col-span-2">HR Status</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {allApplications.map((application) => (
              <AllApplicationsListItem key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>
      <AllApplicationsPagination />
    </div>
  );
};

export default AllApplicationsList;
