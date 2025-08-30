import React from 'react';

const LevelDropdown = () => {
  return (
    <div className="mb-4">
      <label htmlFor="level" className="block text-sm font-medium text-gray-700">
        Select Course Level
      </label>
      <select
        id="level"
        name="level"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">All Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default LevelDropdown;