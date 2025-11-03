import { allApplications } from '../../data/allApplicationsData';
import AllApplicationsListItem from './AllApplicationsListItem';
import AllApplicationsPagination from './AllApplicationsPagination';

const AllApplicationsList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl md:text-3xl font-medium text-nimasa-dark-text mb-8">Full Application List</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-lg font-medium text-nimasa-dark-text">
            <div className="col-span-1 flex items-center">
                <input type="checkbox" className="h-5 w-5 rounded border-gray-400" />
            </div>
            <div className="col-span-3">EMPLOYEE NAME AND ID</div>
            <div className="col-span-2">TYPE</div>
            <div className="col-span-2">DATES</div>
            <div className="col-span-2">HOD STATUS</div>
            <div className="col-span-2">HR STATUS</div>
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
