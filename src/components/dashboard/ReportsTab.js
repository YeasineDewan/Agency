import React, { memo, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaDownload,
  FaCalendarAlt,
  FaFilter,
  FaSearch,
  FaEye,
  FaPrint,
  FaShareAlt,
  FaChartBar,
  FaFilePdf,
  FaFileExcel,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlus
} from 'react-icons/fa';

const ReportsTab = memo(({ stats, onGenerateReport }) => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('last30days');

  // Memoize reports data to prevent unnecessary recalculations
  const reports = useMemo(() => [
    {
      id: 1,
      title: 'Monthly Performance Report',
      type: 'performance',
      date: '2024-01-15',
      status: 'completed',
      size: '2.4 MB',
      downloads: 45,
      description: 'Comprehensive overview of monthly business performance metrics'
    },
    {
      id: 2,
      title: 'Q4 2023 Financial Summary',
      type: 'financial',
      date: '2024-01-10',
      status: 'completed',
      size: '1.8 MB',
      downloads: 32,
      description: 'Quarterly financial analysis and revenue breakdown'
    },
    {
      id: 3,
      title: 'Client Satisfaction Survey',
      type: 'analytics',
      date: '2024-01-08',
      status: 'completed',
      size: '956 KB',
      downloads: 28,
      description: 'Detailed analysis of client feedback and satisfaction ratings'
    },
    {
      id: 4,
      title: 'Marketing Campaign Analysis',
      type: 'marketing',
      date: '2024-01-05',
      status: 'processing',
      size: '3.2 MB',
      downloads: 0,
      description: 'In-depth analysis of recent marketing campaign performance'
    },
    {
      id: 5,
      title: 'Service Delivery Report',
      type: 'operations',
      date: '2024-01-03',
      status: 'completed',
      size: '1.5 MB',
      downloads: 67,
      description: 'Analysis of service delivery times and quality metrics'
    },
    {
      id: 6,
      title: 'Content Creation Summary',
      type: 'content',
      date: '2024-01-01',
      status: 'completed',
      size: '1.2 MB',
      downloads: 23,
      description: 'Monthly summary of content creation and delivery statistics'
    }
  ], []);

  // Memoize filtered reports
  const filteredReports = useMemo(() => {
    return reports.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           report.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || report.type === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [reports, searchTerm, filterType]);

  // Memoize report statistics
  const reportStats = useMemo(() => {
    const totalReports = reports.length;
    const completedReports = reports.filter(r => r.status === 'completed').length;
    const processingReports = reports.filter(r => r.status === 'processing').length;
    const totalDownloads = reports.reduce((sum, r) => sum + r.downloads, 0);

    return {
      totalReports,
      completedReports,
      processingReports,
      totalDownloads
    };
  }, [reports]);

  const handleFilterChange = useCallback((e) => {
    setFilterType(e.target.value);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleDateRangeChange = useCallback((e) => {
    setDateRange(e.target.value);
  }, []);

  return (
    <motion.div
      key="reports"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Reports Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">Access and generate comprehensive business reports</p>
        </div>
        <button
          onClick={onGenerateReport}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
        >
          <FaPlus className="text-sm" />
          Generate New Report
        </button>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Total Reports</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{reportStats.totalReports}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaFileAlt className="text-blue-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Completed</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{reportStats.completedReports}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaCheckCircle className="text-green-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Processing</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{reportStats.processingReports}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FaClock className="text-orange-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Total Downloads</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{reportStats.totalDownloads}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FaDownload className="text-purple-600 text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="performance">Performance</option>
            <option value="financial">Financial</option>
            <option value="analytics">Analytics</option>
            <option value="marketing">Marketing</option>
            <option value="operations">Operations</option>
            <option value="content">Content</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <select
            value={dateRange}
            onChange={handleDateRangeChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last3months">Last 3 months</option>
            <option value="last6months">Last 6 months</option>
            <option value="lastyear">Last year</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Available Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FaFileAlt className="text-blue-500 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      report.status === 'completed' ? 'bg-green-100 text-green-700' :
                      report.status === 'processing' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{report.description}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {report.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFileAlt />
                      {report.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaDownload />
                      {report.downloads} downloads
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-6">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Preview">
                    <FaEye />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors" title="Download PDF">
                    <FaFilePdf />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors" title="Download Excel">
                    <FaFileExcel />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors" title="Print">
                    <FaPrint />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors" title="Share">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Quick Report Generation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaChartBar className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Performance Report</h3>
            <p className="text-sm text-indigo-100">Generate monthly performance analysis</p>
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaFileAlt className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Financial Summary</h3>
            <p className="text-sm text-indigo-100">Create quarterly financial overview</p>
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaShareAlt className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Custom Report</h3>
            <p className="text-sm text-indigo-100">Build report with custom parameters</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
});

ReportsTab.displayName = 'ReportsTab';

export default ReportsTab;
