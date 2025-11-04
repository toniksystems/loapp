import LeaveBarChart from './LeaveBarChart';

const LeaveHistorySummary = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mt-5">
      <h2 className="text-lg font-medium text-nimasa-dark-text mb-5">Leave Taken Summary</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-row lg:flex-col gap-5">
          <div className="bg-nimasa-sky-blue text-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center w-full lg:w-36 h-28">
            <p className="text-xl font-bold">26</p>
            <p className="text-xs mt-1 text-center">Days Taken YTD</p>
          </div>
          <div className="bg-nimasa-sky-blue text-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center w-full lg:w-36 h-28">
            <p className="text-xl font-bold">64</p>
            <p className="text-xs mt-1 text-center">Days Taken Since Joining</p>
          </div>
        </div>
        <div className="flex-grow min-h-[220px]">
          <LeaveBarChart />
        </div>
      </div>
    </div>
  );
};

export default LeaveHistorySummary;
