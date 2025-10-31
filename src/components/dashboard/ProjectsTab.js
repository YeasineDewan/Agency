import React, { memo, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  FaProjectDiagram,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaFilter,
  FaSearch,
  FaPlus,
  FaUsers,
  FaChartBar
} from 'react-icons/fa';

const ProjectsTab = memo(({ projects, onNewProject }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [projects, searchTerm, filterStatus]);

  // Memoize project statistics
  const projectStats = useMemo(() => {
    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === 'completed').length;
    const activeProjects = projects.filter(p => p.status === 'active').length;
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);

    return {
      totalProjects,
      completedProjects,
      activeProjects,
      totalBudget
    };
  }, [projects]);

  const handleFilterChange = useCallback((e) => {
    setFilterStatus(e.target.value);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Projects Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Management</h1>
          <p className="text-gray-600">Manage your ongoing and completed projects</p>
        </div>
        <button
          onClick={onNewProject}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
        >
          <FaPlus className="text-sm" />
          New Project
        </button>
      </div>

      {/* Project Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <select
            value={filterStatus}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === 'completed' ? 'bg-green-100 text-green-700' :
                project.status === 'active' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget</span>
                <span className="font-semibold">${project.budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Spent</span>
                <span className="font-semibold text-green-600">${project.spent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Deadline</span>
                <span className="font-semibold">{project.deadline}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-600">{project.team.length} members</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaChartBar className="text-blue-500" />
          Project Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <FaProjectDiagram className="text-blue-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">{projectStats.totalProjects}</p>
            <p className="text-sm text-gray-600">Total Projects</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <FaCheckCircle className="text-green-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">{projectStats.completedProjects}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
            <FaClock className="text-purple-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">{projectStats.activeProjects}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
            <FaMoneyBillWave className="text-orange-600 text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">${projectStats.totalBudget.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Budget</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectsTab.displayName = 'ProjectsTab';

export default ProjectsTab;
