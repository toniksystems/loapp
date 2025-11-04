import { TriangleAlert, CheckCircle, AlertTriangle } from 'lucide-react';

interface RiskBadgeProps {
  risk: 'High' | 'Medium' | 'Low';
}

const RiskBadge = ({ risk }: RiskBadgeProps) => {
  const config = {
    High: {
      bgColor: 'bg-risk-high-bg',
      textColor: 'text-risk-high-text',
      borderColor: 'border-risk-high-text',
      icon: <TriangleAlert size={12} />,
      text: 'High Risk',
    },
    Medium: {
      bgColor: 'bg-risk-medium-bg',
      textColor: 'text-risk-medium-text',
      borderColor: 'border-risk-medium-text',
      icon: <AlertTriangle size={12} />,
      text: 'Medium Risk',
    },
    Low: {
      bgColor: 'bg-risk-low-bg',
      textColor: 'text-risk-low-text',
      borderColor: 'border-risk-low-text',
      icon: <CheckCircle size={12} />,
      text: 'Low Risk',
    },
  };

  const { bgColor, textColor, borderColor, icon, text } = config[risk];

  return (
    <div
      className={`flex items-center gap-1 self-start rounded-full border px-1.5 py-0.5 ${bgColor} ${textColor} ${borderColor}`}
    >
      {icon}
      <span className="font-bold text-[10px]">{text}</span>
    </div>
  );
};

export default RiskBadge;
