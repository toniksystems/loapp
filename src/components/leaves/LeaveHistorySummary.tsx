import LeaveBarChart from './LeaveBarChart';

const LeaveHistorySummary = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-medium text-nimasa-dark-text mb-8">Leave Taken Summary</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-row lg:flex-col gap-8">
          <div className="bg-nimasa-sky-blue text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center w-full lg:w-64 h-48">
            <p className="text-5xl font-bold">26</p>
            <p className="text-lg mt-1 text-center">Days Taken YTD</p>
          </div>
          <div className="bg-nimasa-sky-blue text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center w-full lg:w-64 h-48">
            <p className="text-5xl font-bold">64</p>
            <p className="text-lg mt-1 text-center">Days Taken Since Joining</p>
          </div>
        </div>
        <div className="flex-grow min-h-[300px]">
          <LeaveBarChart />
        </div>
      </div>
    </div>
  );
};

export default LeaveHistorySummary;
