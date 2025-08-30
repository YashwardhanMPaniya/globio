const SectionHeader = ({icon, title, description}) => (
  <div className="flex items-start gap-3 mb-4">
    {icon && <div className="mt-1">{icon}</div>}
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      {description && <div className="text-xs text-gray-500">{description}</div>}
    </div>
  </div>
);

export default SectionHeader;