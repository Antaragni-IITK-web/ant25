'use client';

import React from 'react';

const TeamHierarchy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-16 mb-24 text-gray-400">
      <hr className="border-gray-700/50 mb-6" />
      <div className="text-center text-sm md:text-base tracking-wide flex items-center justify-center flex-wrap gap-2">
        <span className="italic text-gray-500">Team Hierarchy:</span>
        <span className="font-medium text-gray-300">Festival Coordinators</span>
        <span className="text-gray-600">→</span>
        <span className="font-medium text-gray-300">Organizers</span>
        <span className="text-gray-600">→</span>
        <span className="font-medium text-gray-300">Secretaries</span>
        <span className="text-gray-600">→</span>
        <span className="font-medium text-gray-300">Junior Executives</span>
      </div>
    </div>
  );
};

export default TeamHierarchy;
