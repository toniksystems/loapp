import React from 'react';

const NumberCircle = ({ number }: { number: number }) => (
  <div className="flex-shrink-0 h-9 w-9 bg-nimasa-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
    {number}
  </div>
);

const ApprovalStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex items-start gap-6">
    <NumberCircle number={number} />
    <div>
      <h4 className="font-bold text-nimasa-dark-text text-xl">{title}</h4>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  </div>
);

const ApprovalProcess = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-medium text-nimasa-dark-text mb-10 text-center">Approval Process</h3>
      <div className="space-y-8">
        <ApprovalStep
          number={1}
          title="Submit Application"
          description="Complete and submit your leave request"
        />
        <ApprovalStep
          number={2}
          title="Head of Unit Review"
          description="Your direct supervisor reviews, approving or rejecting your request."
        />
        <ApprovalStep
          number={3}
          title="Admin Approval"
          description="HR/Admin provides final approval"
        />
      </div>
    </div>
  );
};

export default ApprovalProcess;
