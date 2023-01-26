type BadgeProps = {
  icon: JSX.Element;
  name: string;
};

const Badge = ({ icon, name }: BadgeProps) => {
  return (
    <span className="mr-2 mb-3 inline-flex items-center space-x-3 rounded bg-gray-300 px-4 py-2 font-medium text-gray-600">
      {icon} {name}
    </span>
  );
};

export default Badge;
