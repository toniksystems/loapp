import React from 'react';

interface LeaveProgressProps {
  label: string;
  used: number;
  total: number;
}

const LeaveProgressBar: React.FC<LeaveProgressProps> = ({ label, used, total }) => {
  const percentage = total > 0 ? (used / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xl font-ubuntu text-black">{label}</span>
        <span className="text-xl font-ubuntu text-black">{`${used}/${total}`}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-5">
        <div
          className="bg-nimasa-green h-5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const LeaveSummaryCard = () => {
  const profileIconUrl = "https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__";

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 h-full flex flex-col justify-between min-w-[450px]">
        <div className="flex justify-between items-start">
            <h3 className="text-3xl font-medium text-black">Akin Adebola</h3>
            <img src={profileIconUrl} alt="Akin Adebola" className="h-24 w-24 rounded-full border-2 border-nimasa-blue" />
        </div>
        <div className="space-y-6 mt-4">
            <LeaveProgressBar label="Annual Leave" used={9} total={21} />
            <LeaveProgressBar label="Casual Leave" used={0} total={12} />
            <LeaveProgressBar label="Sick Leave" used={3} total={12} />
        </div>
    </div>
  );
};

export default LeaveSummaryCard;
