import { allApplications } from '../../data/allApplicationsData';
import AllApplicationsListItem from './AllApplicationsListItem';
import AllApplicationsPagination from './AllApplicationsPagination';

const AllApplicationsList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h2 className="text-base font-semibold text-nimasa-dark-text mb-4">Full Application List</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-3 text-xs font-medium text-gray-500 uppercase">
            <div className="col-span-1 flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-400" />
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
