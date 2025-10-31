import React, { useState, useEffect, useMemo, useCallback, memo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { generateServiceReport, generateComprehensiveReport } from '../utils/reportGenerator';
import { FaRocket, FaBell, FaCheck, FaExclamationTriangle, FaInfo, FaUser, FaCog, FaDownload, FaSignOutAlt, FaChartLine, FaProjectDiagram, FaChartBar, FaTasks, FaFilePdf, FaCode, FaVideo, FaMobileAlt, FaCamera, FaSearchengin, FaChartArea, FaCheckCircle, FaClock, FaMoneyBillWave, FaTrophy, FaBullseye, FaPercentage, FaStar, FaPaperPlane, FaSpinner, FaFileExcel, FaUsers, FaArrowRight, FaFileAlt, FaFacebook, FaEye, FaShareAlt, FaImage, FaEdit, FaPlus, FaFilter, FaSearch, FaDollarSign, FaLightbulb, FaHandshake, FaComments, FaCalendarAlt } from 'react-icons/fa';
import { STATS_DATA, PROJECTS_DATA, NOTIFICATIONS_DATA, RECENT_ACTIVITIES_DATA, REPORTS_DATA } from '../constants/dashboardData';
import { useDebounce } from '../hooks/useDebounce';
import SettingsTab from '../components/dashboard/SettingsTab';

const ClientDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    service: 'web-development',
    budget: '',
    deadline: '',
    team: []
  });
  const [reports, setReports] = useState([
    {
      id: 1,
      name: 'Web Development Report - Q1 2024',
      type: 'Web Development',
      generatedDate: '2024-01-15',
      size: '2.4 MB',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Digital Marketing Performance Report',
      type: 'Digital Marketing',
      generatedDate: '2024-01-10',
      size: '1.8 MB',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Video Editing Monthly Report',
      type: 'Video Editing',
      generatedDate: '2024-01-08',
      size: '3.2 MB',
      status: 'completed'
    },
    {
      id: 4,
      name: 'SEO Optimization Report',
      type: 'SEO',
      generatedDate: '2024-01-05',
      size: '1.5 MB',
      status: 'completed'
    }
  ]);
  const [selectedReportType, setSelectedReportType] = useState('all');

  // Mock data - in real app, fetch from API
  const [stats] = useState({
    totalContent: 245,
    totalSpending: 12450.75,
    activeProjects: 8,
    completedTasks: 32,
    facebookSpending: 8420.50,
    contentDelivered: 180,
    contentPending: 65,
    conversionRate: 12.5,
    reach: 250000,
    engagement: 18500,
    roi: 285.5,
    budgetRemaining: 2349.25,
    monthlyGrowth: 15.7,
    customerSatisfaction: 4.8,
    // Service-specific stats
    webDevelopment: {
      activeProjects: 3,
      completedProjects: 12,
      totalRevenue: 45600,
      avgProjectValue: 3800,
      clientSatisfaction: 4.9,
      onTimeDelivery: 95
    },
    digitalMarketing: {
      activeCampaigns: 5,
      totalReach: 1250000,
      conversionRate: 8.5,
      roi: 320,
      monthlyGrowth: 22.3,
      budgetUtilized: 85
    },
    videoEditing: {
      videosDelivered: 45,
      avgProcessingTime: 3.2,
      clientRating: 4.7,
      totalViews: 2500000,
      engagementRate: 12.8,
      repeatClients: 68
    },
    appDevelopment: {
      activeProjects: 2,
      completedApps: 8,
      avgDevelopmentTime: 45,
      clientSatisfaction: 4.8,
      downloadsGenerated: 15000,
      revenueGenerated: 25000
    },
    photoEditing: {
      imagesProcessed: 1200,
      avgTurnaroundTime: 1.5,
      qualityRating: 4.9,
      clientRetention: 92,
      monthlyVolume: 180,
      specialRequests: 35
    },
    seo: {
      activeClients: 15,
      avgKeywordRank: 12.3,
      organicTrafficGrowth: 145,
      conversionIncrease: 28.5,
      clientSatisfaction: 4.6,
      monthlyReports: 45
    }
  });

  const [projects] = useState([
    {
      id: 1,
      name: 'Q1 Marketing Campaign',
      description: 'Comprehensive digital marketing campaign for Q1 2024',
      status: 'active',
      progress: 75,
      deadline: '2024-03-15',
      team: ['John', 'Sarah', 'Mike'],
      budget: 5000,
      spent: 3750
    },
    {
      id: 2,
      name: 'Website Redesign',
      description: 'Complete redesign and development of company website',
      status: 'completed',
      progress: 100,
      deadline: '2024-02-28',
      team: ['Emma', 'David'],
      budget: 8000,
      spent: 7800
    },
    {
      id: 3,
      name: 'Social Media Strategy',
      description: 'Development and implementation of social media marketing strategy',
      status: 'pending',
      progress: 0,
      deadline: '2024-04-10',
      team: ['Lisa', 'Tom'],
      budget: 3000,
      spent: 0
    }
  ]);

  const [notifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Project Completed',
      message: 'Q1 Marketing Campaign has been completed successfully.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Budget Alert',
      message: 'You have exceeded 80% of your monthly budget.',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New Content Available',
      message: '5 new blog posts have been published.',
      time: '3 days ago',
      read: true
    }
  ]);

  const recentActivities = [
    {
      id: 1,
      type: 'content',
      title: 'Blog Post: Digital Marketing Trends',
      date: '2024-01-15',
      status: 'completed',
      priority: 'high'
    },
    {
      id: 2,
      type: 'ad',
      title: 'Facebook Ad Campaign',
      date: '2024-01-14',
      status: 'active',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'video',
      title: 'Product Video Editing',
      date: '2024-01-13',
      status: 'completed',
      priority: 'high'
    },
    {
      id: 4,
      type: 'design',
      title: 'Social Media Graphics',
      date: '2024-01-12',
      status: 'pending',
      priority: 'low'
    },
    {
      id: 5,
      type: 'seo',
      title: 'SEO Optimization Report',
      date: '2024-01-11',
      status: 'completed',
      priority: 'medium'
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    navigate('/client-login');
  };

  const handleGenerateServiceReport = async (serviceType) => {
    setIsGeneratingReport(true);
    try {
      let serviceData = {};

      switch (serviceType) {
        case 'Web Development':
          serviceData = {
            metrics: [
              { name: 'Active Projects', current: stats.webDevelopment.activeProjects, target: 5, status: 'On Track' },
              { name: 'Completed Projects', current: stats.webDevelopment.completedProjects, target: 15, status: 'On Track' },
              { name: 'Revenue', current: stats.webDevelopment.totalRevenue, target: 50000, status: 'On Track' },
              { name: 'Client Satisfaction', current: stats.webDevelopment.clientSatisfaction, target: 4.8, status: 'On Track' },
              { name: 'On-Time Delivery', current: stats.webDevelopment.onTimeDelivery, target: 95, status: 'On Track' }
            ],
            analysis: `Web Development services are performing excellently with ${stats.webDevelopment.activeProjects} active projects and ${stats.webDevelopment.completedProjects} completed projects. The team has achieved a ${stats.webDevelopment.onTimeDelivery}% on-time delivery rate and maintains a high client satisfaction score of ${stats.webDevelopment.clientSatisfaction}/5. Revenue generation is strong at $${stats.webDevelopment.totalRevenue.toLocaleString()}.`,
            recommendations: [
              'Continue focusing on high-quality deliverables to maintain client satisfaction',
              'Consider expanding the team to handle more concurrent projects',
              'Implement advanced project management tools for better tracking',
              'Develop standardized templates for common project types'
            ],
            timeline: [
              { milestone: 'Q1 Website Redesign', dueDate: '2024-03-15', status: 'In Progress' },
              { milestone: 'E-commerce Platform Launch', dueDate: '2024-04-01', status: 'Pending' },
              { milestone: 'Mobile App Integration', dueDate: '2024-04-15', status: 'Pending' },
              { milestone: 'Performance Optimization', dueDate: '2024-05-01', status: 'Pending' }
            ]
          };
          break;

        case 'Digital Marketing':
          serviceData = {
            metrics: [
              { name: 'Active Campaigns', current: stats.digitalMarketing.activeCampaigns, target: 6, status: 'On Track' },
              { name: 'Total Reach', current: stats.digitalMarketing.totalReach, target: 1500000, status: 'On Track' },
              { name: 'Conversion Rate', current: stats.digitalMarketing.conversionRate, target: 10, status: 'At Risk' },
              { name: 'ROI', current: stats.digitalMarketing.roi, target: 350, status: 'On Track' },
              { name: 'Budget Utilized', current: stats.digitalMarketing.budgetUtilized, target: 90, status: 'On Track' }
            ],
            analysis: `Digital Marketing campaigns are showing strong performance with ${stats.digitalMarketing.activeCampaigns} active campaigns reaching ${(stats.digitalMarketing.totalReach / 1000000).toFixed(1)}M people. The ROI of ${stats.digitalMarketing.roi}% demonstrates excellent return on investment. However, the conversion rate of ${stats.digitalMarketing.conversionRate}% needs improvement to meet targets.`,
            recommendations: [
              'Optimize landing pages to improve conversion rates',
              'Implement A/B testing for ad creatives',
              'Expand targeting to high-performing demographics',
              'Increase budget allocation for top-performing campaigns'
            ],
            timeline: [
              { milestone: 'Q1 Campaign Launch', dueDate: '2024-01-31', status: 'Completed' },
              { milestone: 'Performance Review', dueDate: '2024-02-15', status: 'In Progress' },
              { milestone: 'Q2 Campaign Planning', dueDate: '2024-03-01', status: 'Pending' },
              { milestone: 'Retargeting Campaign', dueDate: '2024-03-15', status: 'Pending' }
            ]
          };
          break;

        case 'Video Editing':
          serviceData = {
            metrics: [
              { name: 'Videos Delivered', current: stats.videoEditing.videosDelivered, target: 50, status: 'On Track' },
              { name: 'Avg Processing Time', current: stats.videoEditing.avgProcessingTime, target: 3, status: 'On Track' },
              { name: 'Client Rating', current: stats.videoEditing.clientRating, target: 4.8, status: 'On Track' },
              { name: 'Total Views', current: stats.videoEditing.totalViews, target: 3000000, status: 'On Track' },
              { name: 'Repeat Clients', current: stats.videoEditing.repeatClients, target: 70, status: 'On Track' }
            ],
            analysis: `Video Editing services have delivered ${stats.videoEditing.videosDelivered} videos with an average processing time of ${stats.videoEditing.avgProcessingTime} days. Client satisfaction remains high at ${stats.videoEditing.clientRating}/5, and content has generated ${(stats.videoEditing.totalViews / 1000000).toFixed(1)}M total views with ${stats.videoEditing.repeatClients}% repeat client rate.`,
            recommendations: [
              'Invest in advanced editing software for faster processing',
              'Develop video templates for common formats',
              'Implement client feedback system for continuous improvement',
              'Create video marketing packages for better value proposition'
            ],
            timeline: [
              { milestone: 'Product Demo Video', dueDate: '2024-02-10', status: 'Completed' },
              { milestone: 'Social Media Series', dueDate: '2024-02-20', status: 'In Progress' },
              { milestone: 'Corporate Training Video', dueDate: '2024-03-05', status: 'Pending' },
              { milestone: 'Marketing Campaign Videos', dueDate: '2024-03-20', status: 'Pending' }
            ]
          };
          break;

        case 'App Development':
          serviceData = {
            metrics: [
              { name: 'Active Projects', current: stats.appDevelopment.activeProjects, target: 3, status: 'On Track' },
              { name: 'Completed Apps', current: stats.appDevelopment.completedApps, target: 10, status: 'On Track' },
              { name: 'Avg Dev Time', current: stats.appDevelopment.avgDevelopmentTime, target: 40, status: 'At Risk' },
              { name: 'Downloads Generated', current: stats.appDevelopment.downloadsGenerated, target: 20000, status: 'On Track' },
              { name: 'Revenue Generated', current: stats.appDevelopment.revenueGenerated, target: 30000, status: 'On Track' }
            ],
            analysis: `App Development has ${stats.appDevelopment.activeProjects} active projects with ${stats.appDevelopment.completedApps} apps successfully delivered. The average development time of ${stats.appDevelopment.avgDevelopmentTime} days is slightly above target, but apps have generated ${(stats.appDevelopment.downloadsGenerated / 1000).toFixed(0)}K downloads and $${stats.appDevelopment.revenueGenerated.toLocaleString()} in revenue.`,
            recommendations: [
              'Streamline development processes to reduce delivery time',
              'Implement agile methodologies for better project management',
              'Focus on user experience design for higher engagement',
              'Develop cross-platform solutions for broader reach'
            ],
            timeline: [
              { milestone: 'E-commerce App Beta', dueDate: '2024-02-28', status: 'In Progress' },
              { milestone: 'Fitness App Launch', dueDate: '2024-03-15', status: 'Pending' },
              { milestone: 'Update Existing Apps', dueDate: '2024-04-01', status: 'Pending' },
              { milestone: 'New Feature Development', dueDate: '2024-04-15', status: 'Pending' }
            ]
          };
          break;

        case 'Photo Editing':
          serviceData = {
            metrics: [
              { name: 'Images Processed', current: stats.photoEditing.imagesProcessed, target: 1500, status: 'On Track' },
              { name: 'Avg Turnaround', current: stats.photoEditing.avgTurnaroundTime, target: 1.2, status: 'On Track' },
              { name: 'Quality Rating', current: stats.photoEditing.qualityRating, target: 4.9, status: 'On Track' },
              { name: 'Client Retention', current: stats.photoEditing.clientRetention, target: 95, status: 'On Track' },
              { name: 'Monthly Volume', current: stats.photoEditing.monthlyVolume, target: 200, status: 'On Track' }
            ],
            analysis: `Photo Editing services have processed ${stats.photoEditing.imagesProcessed.toLocaleString()} images with an average turnaround time of ${stats.photoEditing.avgTurnaroundTime} days. Quality remains excellent at ${stats.photoEditing.qualityRating}/5 rating, and client retention is strong at ${stats.photoEditing.clientRetention}%. Monthly volume of ${stats.photoEditing.monthlyVolume} images shows consistent demand.`,
            recommendations: [
              'Automate repetitive editing tasks with AI tools',
              'Expand service offerings to include advanced retouching',
              'Implement bulk processing for large orders',
              'Create style guides for consistent quality'
            ],
            timeline: [
              { milestone: 'Product Catalog Editing', dueDate: '2024-02-15', status: 'Completed' },
              { milestone: 'Event Photography Post-Production', dueDate: '2024-02-25', status: 'In Progress' },
              { milestone: 'Brand Image Guidelines', dueDate: '2024-03-10', status: 'Pending' },
              { milestone: 'Bulk Order Processing', dueDate: '2024-03-25', status: 'Pending' }
            ]
          };
          break;

        case 'SEO':
          serviceData = {
            metrics: [
              { name: 'Active Clients', current: stats.seo.activeClients, target: 20, status: 'On Track' },
              { name: 'Avg Keyword Rank', current: stats.seo.avgKeywordRank, target: 10, status: 'At Risk' },
              { name: 'Traffic Growth', current: stats.seo.organicTrafficGrowth, target: 150, status: 'On Track' },
              { name: 'Conversion Increase', current: stats.seo.conversionIncrease, target: 30, status: 'On Track' },
              { name: 'Client Satisfaction', current: stats.seo.clientSatisfaction, target: 4.7, status: 'On Track' }
            ],
            analysis: `SEO services are managing ${stats.seo.activeClients} active clients with ${stats.seo.organicTrafficGrowth}% organic traffic growth and ${stats.seo.conversionIncrease}% conversion increase. Client satisfaction is good at ${stats.seo.clientSatisfaction}/5, though average keyword ranking of ${stats.seo.avgKeywordRank} needs improvement to meet competitive targets.`,
            recommendations: [
              'Focus on long-tail keyword optimization',
              'Improve technical SEO implementation',
              'Enhance content strategy for better rankings',
              'Regular algorithm update monitoring and adaptation'
            ],
            timeline: [
              { milestone: 'Keyword Research Completion', dueDate: '2024-02-20', status: 'Completed' },
              { milestone: 'Technical SEO Audit', dueDate: '2024-03-01', status: 'In Progress' },
              { milestone: 'Content Optimization', dueDate: '2024-03-15', status: 'Pending' },
              { milestone: 'Monthly Performance Report', dueDate: '2024-04-01', status: 'Pending' }
            ]
          };
          break;

        default:
          throw new Error('Unknown service type');
      }

      await generateServiceReport(serviceData, serviceType);
    } catch (error) {
      console.error('Error generating service report:', error);
      alert('Failed to generate report. Please try again.');
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const handleGenerateComprehensiveReport = async () => {
    setIsGeneratingReport(true);
    try {
      const allServicesData = [
        {
          name: 'Web Development',
          status: 'Active',
          roi: 285,
          budgetUsed: stats.webDevelopment.totalRevenue,
          nextMilestone: 'Q1 Website Redesign Completion'
        },
        {
          name: 'Digital Marketing',
          status: 'Active',
          roi: stats.digitalMarketing.roi,
          budgetUsed: stats.digitalMarketing.budgetUtilized * 1000, // Approximate
          nextMilestone: 'Q2 Campaign Launch'
        },
        {
          name: 'Video Editing',
          status: 'Active',
          roi: 220,
          budgetUsed: 15000,
          nextMilestone: 'Social Media Series Completion'
        },
        {
          name: 'App Development',
          status: 'Active',
          roi: 180,
          budgetUsed: stats.appDevelopment.revenueGenerated,
          nextMilestone: 'E-commerce App Launch'
        },
        {
          name: 'Photo Editing',
          status: 'Active',
          roi: 150,
          budgetUsed: 8000,
          nextMilestone: 'Event Photography Post-Production'
        },
        {
          name: 'SEO Services',
          status: 'Active',
          roi: 320,
          budgetUsed: 12000,
          nextMilestone: 'Technical SEO Audit Completion'
        }
      ];

      await generateComprehensiveReport(allServicesData);
    } catch (error) {
      console.error('Error generating comprehensive report:', error);
      alert('Failed to generate comprehensive report. Please try again.');
    } finally {
      setIsGeneratingReport(false);
    }
  };

  const filteredActivities = recentActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || activity.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const unreadNotifications = notifications.filter(n => !n.read).length;

  // Simple chart component
  const SimpleChart = ({ data, color }) => (
    <svg width="100%" height="60" viewBox="0 0 100 60" className="w-full h-16">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={data.map((point, index) => `${index * (100 / (data.length - 1))},${60 - point}`).join(' ')}
      />
    </svg>
  );

  // Loading component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Enhanced Header with Navigation */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-xl mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaRocket className="text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {t('clientPortal.dashboard.title')}
                </h1>
                <p className="text-blue-100 text-sm">
                  {t('clientPortal.dashboard.welcome')}, John Doe
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
                >
                  <FaBell className="text-xl" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50"
                    >
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                              !notification.read ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                                'bg-blue-100 text-blue-600'
                              }`}>
                                {notification.type === 'success' ? <FaCheck /> :
                                 notification.type === 'warning' ? <FaExclamationTriangle /> :
                                 <FaInfo />}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                                <p className="text-gray-600 text-sm">{notification.message}</p>
                                <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
                >
                  <FaUser className="text-xl" />
                  <FaCog className="text-sm" />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 z-50"
                    >
                      <div className="p-4 border-b border-gray-100">
                        <p className="font-semibold text-gray-900">John Doe</p>
                        <p className="text-gray-600 text-sm">john.doe@company.com</p>
                      </div>
                      <div className="py-2">
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                          <FaUser className="inline mr-2" /> Profile Settings
                        </button>
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                          <FaCog className="inline mr-2" /> Account Settings
                        </button>
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                          <FaDownload className="inline mr-2" /> Export Data
                        </button>
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <FaSignOutAlt className="inline mr-2" /> Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pb-6">
            {[
              { id: 'overview', label: 'Overview', icon: FaChartLine },
              { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
              { id: 'analytics', label: 'Analytics', icon: FaChartBar },
              { id: 'services', label: 'Services', icon: FaTasks },
              { id: 'reports', label: 'Reports', icon: FaFilePdf },
              { id: 'settings', label: 'Settings', icon: FaCog }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon className="text-sm" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service-Specific Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Web Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaCode className="text-blue-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Projects</span>
                      <span className="font-semibold">{stats.webDevelopment.activeProjects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed</span>
                      <span className="font-semibold">{stats.webDevelopment.completedProjects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-semibold text-green-600">${stats.webDevelopment.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Satisfaction</span>
                      <span className="font-semibold">{stats.webDevelopment.clientSatisfaction}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">On-Time Delivery</span>
                      <span className="font-semibold text-green-600">{stats.webDevelopment.onTimeDelivery}%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Digital Marketing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaChartLine className="text-green-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Campaigns</span>
                      <span className="font-semibold">{stats.digitalMarketing.activeCampaigns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Reach</span>
                      <span className="font-semibold">{(stats.digitalMarketing.totalReach / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold text-green-600">{stats.digitalMarketing.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI</span>
                      <span className="font-semibold text-green-600">{stats.digitalMarketing.roi}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget Utilized</span>
                      <span className="font-semibold">{stats.digitalMarketing.budgetUtilized}%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Video Editing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaVideo className="text-purple-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Videos Delivered</span>
                      <span className="font-semibold">{stats.videoEditing.videosDelivered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Processing Time</span>
                      <span className="font-semibold">{stats.videoEditing.avgProcessingTime} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Rating</span>
                      <span className="font-semibold">{stats.videoEditing.clientRating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views</span>
                      <span className="font-semibold">{(stats.videoEditing.totalViews / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repeat Clients</span>
                      <span className="font-semibold text-green-600">{stats.videoEditing.repeatClients}%</span>
                    </div>
                  </div>
                </motion.div>

                {/* App Development */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaMobileAlt className="text-orange-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">App Development</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Projects</span>
                      <span className="font-semibold">{stats.appDevelopment.activeProjects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed Apps</span>
                      <span className="font-semibold">{stats.appDevelopment.completedApps}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Dev Time</span>
                      <span className="font-semibold">{stats.appDevelopment.avgDevelopmentTime} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads Generated</span>
                      <span className="font-semibold text-green-600">{(stats.appDevelopment.downloadsGenerated / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Generated</span>
                      <span className="font-semibold text-green-600">${stats.appDevelopment.revenueGenerated.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Photo Editing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaCamera className="text-pink-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">Photo Editing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Images Processed</span>
                      <span className="font-semibold">{stats.photoEditing.imagesProcessed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Turnaround</span>
                      <span className="font-semibold">{stats.photoEditing.avgTurnaroundTime} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality Rating</span>
                      <span className="font-semibold">{stats.photoEditing.qualityRating}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Retention</span>
                      <span className="font-semibold text-green-600">{stats.photoEditing.clientRetention}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Volume</span>
                      <span className="font-semibold">{stats.photoEditing.monthlyVolume}</span>
                    </div>
                  </div>
                </motion.div>

                {/* SEO */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaSearchengin className="text-indigo-500 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900">SEO Services</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Clients</span>
                      <span className="font-semibold">{stats.seo.activeClients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Keyword Rank</span>
                      <span className="font-semibold">{stats.seo.avgKeywordRank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Traffic Growth</span>
                      <span className="font-semibold text-green-600">+{stats.seo.organicTrafficGrowth}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Increase</span>
                      <span className="font-semibold text-green-600">+{stats.seo.conversionIncrease}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="font-semibold">{stats.seo.clientSatisfaction}/5</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Service Performance Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaChartBar className="text-blue-500" />
                  Service Performance Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Most Profitable Service</h4>
                    <p className="text-2xl font-bold text-blue-600">Web Development</p>
                    <p className="text-sm text-gray-600">$45,600 total revenue</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Highest Client Satisfaction</h4>
                    <p className="text-2xl font-bold text-green-600">4.9/5</p>
                    <p className="text-sm text-gray-600">Web Development & Photo Editing</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Fastest Growing</h4>
                    <p className="text-2xl font-bold text-purple-600">Digital Marketing</p>
                    <p className="text-sm text-gray-600">+22.3% monthly growth</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
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
                  onClick={() => setShowProjectModal(true)}
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
                    onChange={(e) => setFilterStatus(e.target.value)}
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {projects
                  .filter(project => {
                    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
                    return matchesSearch && matchesFilter;
                  })
                  .map((project) => (
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
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
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
                    <p className="text-2xl font-bold text-blue-600">{projects.length}</p>
                    <p className="text-sm text-gray-600">Total Projects</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                    <FaCheckCircle className="text-green-600 text-3xl mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{projects.filter(p => p.status === 'completed').length}</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                    <FaClock className="text-purple-600 text-3xl mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">{projects.filter(p => p.status === 'active').length}</p>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                    <FaMoneyBillWave className="text-orange-600 text-3xl mx-auto mb-2" />
                    <p className="text-2xl font-bold text-orange-600">${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Budget</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Analytics Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics Dashboard</h1>
                <p className="text-gray-600">Comprehensive insights into your business performance and growth metrics</p>
              </div>

              {/* Key Performance Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-semibold">Total Revenue</p>
                      <p className="text-3xl font-bold mt-2">${stats.totalSpending.toLocaleString()}</p>
                      <div className="flex items-center mt-2">
                        <FaArrowRight className="text-green-300 text-sm mr-1" />
                        <span className="text-green-300 text-sm font-medium">+18.5% vs last month</span>
                      </div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <FaDollarSign className="text-2xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-semibold">Overall ROI</p>
                      <p className="text-3xl font-bold mt-2">{stats.roi.toFixed(1)}%</p>
                      <div className="flex items-center mt-2">
                        <FaTrophy className="text-yellow-300 text-sm mr-1" />
                        <span className="text-yellow-300 text-sm font-medium">Top performer</span>
                      </div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <FaBullseye className="text-2xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-semibold">Conversion Rate</p>
                      <p className="text-3xl font-bold mt-2">{stats.conversionRate}%</p>
                      <div className="flex items-center mt-2">
                        <FaRocket className="text-pink-300 text-sm mr-1" />
                        <span className="text-pink-300 text-sm font-medium">+5.2% improvement</span>
                      </div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <FaPercentage className="text-2xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-semibold">Monthly Growth</p>
                      <p className="text-3xl font-bold mt-2">{stats.monthlyGrowth}%</p>
                      <div className="flex items-center mt-2">
                        <FaChartLine className="text-green-300 text-sm mr-1" />
                        <span className="text-green-300 text-sm font-medium">Trending upward</span>
                      </div>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <FaChartArea className="text-2xl" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Revenue Trends Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaChartLine className="text-blue-500" />
                    Revenue Trends
                  </h2>
                  <div className="space-y-4">
                    <div className="h-48 flex items-end justify-between">
                      <SimpleChart data={[20, 35, 25, 45, 30, 55, 40, 65, 50, 75, 60, 85]} color="#3B82F6" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">12-month revenue growth: <span className="font-semibold text-green-600">+85%</span></p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaUsers className="text-green-500" />
                    Customer Acquisition
                  </h2>
                  <div className="space-y-4">
                    <div className="h-48 flex items-end justify-between">
                      <SimpleChart data={[15, 25, 20, 35, 28, 45, 38, 55, 48, 65, 58, 75]} color="#10B981" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">New customers this month: <span className="font-semibold text-green-600">127</span></p>
                  </div>
                </motion.div>
              </div>

              {/* Service Performance Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaChartBar className="text-purple-500" />
                  Service Performance Analytics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Web Development Analytics */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <FaCode className="text-blue-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue</span>
                        <span className="font-bold text-green-600">${stats.webDevelopment.totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projects</span>
                        <span className="font-bold">{stats.webDevelopment.completedProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg Value</span>
                        <span className="font-bold">${stats.webDevelopment.avgProjectValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Satisfaction</span>
                        <span className="font-bold">{stats.webDevelopment.clientSatisfaction}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">95% On-time delivery rate</p>
                    </div>
                  </div>

                  {/* Digital Marketing Analytics */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <FaChartLine className="text-green-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reach</span>
                        <span className="font-bold text-blue-600">{(stats.digitalMarketing.totalReach / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI</span>
                        <span className="font-bold text-green-600">{stats.digitalMarketing.roi}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Growth</span>
                        <span className="font-bold text-purple-600">+{stats.digitalMarketing.monthlyGrowth}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversion</span>
                        <span className="font-bold">{stats.digitalMarketing.conversionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">85% Budget utilization</p>
                    </div>
                  </div>

                  {/* Video Editing Analytics */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <FaVideo className="text-purple-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Videos</span>
                        <span className="font-bold">{stats.videoEditing.videosDelivered}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Views</span>
                        <span className="font-bold text-blue-600">{(stats.videoEditing.totalViews / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engagement</span>
                        <span className="font-bold text-green-600">{stats.videoEditing.engagementRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating</span>
                        <span className="font-bold">{stats.videoEditing.clientRating}/5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">68% Repeat clients</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Growth Metrics & Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500" />
                    Growth Insights
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-400">
                      <div className="flex items-center gap-3">
                        <FaRocket className="text-yellow-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Revenue Growth</p>
                          <p className="text-sm text-gray-600">18.5% increase compared to last month</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-center gap-3">
                        <FaUsers className="text-green-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Customer Retention</p>
                          <p className="text-sm text-gray-600">92% of clients return for additional services</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-3">
                        <FaHandshake className="text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Partnership Opportunities</p>
                          <p className="text-sm text-gray-600">3 new enterprise partnerships in progress</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-400">
                      <div className="flex items-center gap-3">
                        <FaTrophy className="text-purple-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Market Leadership</p>
                          <p className="text-sm text-gray-600">Top 5% performer in digital services industry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaComments className="text-indigo-500" />
                    Performance Metrics
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FaClock className="text-blue-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Average Response Time</p>
                          <p className="text-sm text-gray-600">Client inquiries</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">2.3h</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Project Completion Rate</p>
                          <p className="text-sm text-gray-600">On-time delivery</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FaStar className="text-yellow-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Client Satisfaction</p>
                          <p className="text-sm text-gray-600">Average rating</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-yellow-600">{stats.customerSatisfaction}/5</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FaPaperPlane className="text-purple-500" />
                        <div>
                          <p className="font-semibold text-gray-900">Content Delivery</p>
                          <p className="text-sm text-gray-600">Monthly output</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">{stats.totalContent}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Advanced Analytics Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Advanced Analytics Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
                    <FaFilePdf className="text-3xl mb-3" />
                    <h3 className="font-semibold mb-2">Generate Report</h3>
                    <p className="text-sm text-indigo-100">Download comprehensive analytics report</p>
                  </button>
                  <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
                    <FaChartArea className="text-3xl mb-3" />
                    <h3 className="font-semibold mb-2">Custom Dashboard</h3>
                    <p className="text-sm text-indigo-100">Create personalized analytics views</p>
                  </button>
                  <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
                    <FaBell className="text-3xl mb-3" />
                    <h3 className="font-semibold mb-2">Set Alerts</h3>
                    <p className="text-sm text-indigo-100">Get notified on key metrics changes</p>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'reports' && (
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
                  <p className="text-gray-600">Generate and download comprehensive performance reports</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleGenerateComprehensiveReport()}
                    disabled={isGeneratingReport}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaFilePdf className="text-sm" />}
                    Comprehensive Report
                  </button>
                </div>
              </div>

              {/* Report Generation Actions */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaFileExcel className="text-green-500" />
                  Generate New Reports
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaCode className="text-blue-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Generate detailed report for web development projects and performance metrics.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('Web Development')}
                      disabled={isGeneratingReport}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaChartLine className="text-green-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Comprehensive analysis of marketing campaigns, ROI, and audience engagement.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('Digital Marketing')}
                      disabled={isGeneratingReport}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaVideo className="text-purple-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Performance metrics for video production, views, and client satisfaction.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('Video Editing')}
                      disabled={isGeneratingReport}
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaMobileAlt className="text-orange-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">App Development</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Mobile app development progress, downloads, and revenue analytics.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('App Development')}
                      disabled={isGeneratingReport}
                      className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaCamera className="text-pink-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">Photo Editing</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Photo editing service metrics, turnaround times, and quality ratings.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('Photo Editing')}
                      disabled={isGeneratingReport}
                      className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaSearchengin className="text-indigo-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-900">SEO Services</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Search engine optimization performance, rankings, and traffic growth.</p>
                    <button
                      onClick={() => handleGenerateServiceReport('SEO')}
                      disabled={isGeneratingReport}
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isGeneratingReport ? <FaSpinner className="animate-spin" /> : <FaDownload />}
                      Generate Report
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Report Filters */}
              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaFilter className="text-gray-500" />
                  <select
                    value={selectedReportType}
                    onChange={(e) => setSelectedReportType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Reports</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="SEO">SEO</option>
                    <option value="App Development">App Development</option>
                    <option value="Photo Editing">Photo Editing</option>
                  </select>
                </div>
              </div>

              {/* Generated Reports */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FaFilePdf className="text-red-500" />
                  Generated Reports
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reports
                    .filter(report => selectedReportType === 'all' || report.type === selectedReportType)
                    .map((report) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              report.status === 'completed' ? 'bg-green-100 text-green-600' :
                              'bg-yellow-100 text-yellow-600'
                            }`}>
                              <FaFilePdf />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm">{report.name}</h3>
                              <p className="text-gray-600 text-xs">{report.type}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            report.status === 'completed' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {report.status}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Generated</span>
                            <span className="font-semibold">{report.generatedDate}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Size</span>
                            <span className="font-semibold">{report.size}</span>
                          </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                          <FaDownload className="text-sm" />
                          Download
                        </button>
                      </motion.div>
                    ))}
                </div>

                {reports.filter(report => selectedReportType === 'all' || report.type === selectedReportType).length === 0 && (
                  <div className="text-center py-12">
                    <FaFilePdf className="text-gray-400 text-4xl mx-auto mb-4" />
                    <p className="text-gray-600">No reports found for the selected filter.</p>
                    <p className="text-gray-500 text-sm">Generate a new report to get started.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">{t('clientPortal.dashboard.totalContent')}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalContent}</p>
                      <div className="flex items-center mt-2">
                        <FaArrowRight className="text-green-500 text-sm mr-1" />
                        <span className="text-green-500 text-sm font-medium">+12% this month</span>
                      </div>
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
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">Total ROI</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">${stats.roi.toFixed(1)}%</p>
                      <div className="flex items-center mt-2">
                        <FaTrophy className="text-green-500 text-sm mr-1" />
                        <span className="text-green-500 text-sm font-medium">Excellent performance</span>
                      </div>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaBullseye className="text-green-600 text-2xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">{t('clientPortal.dashboard.activeProjects')}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeProjects}</p>
                      <div className="flex items-center mt-2">
                        <FaRocket className="text-purple-500 text-sm mr-1" />
                        <span className="text-purple-500 text-sm font-medium">On track</span>
                      </div>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <FaChartLine className="text-purple-600 text-2xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">Customer Satisfaction</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.customerSatisfaction}/5</p>
                      <div className="flex items-center mt-2">
                        <FaStar className="text-yellow-500 text-sm mr-1" />
                        <span className="text-yellow-500 text-sm font-medium">Highly satisfied</span>
                      </div>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <FaStar className="text-orange-600 text-2xl" />
                    </div>
                  </div>
                </motion.div>
              </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Content Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaFileAlt className="text-blue-500" />
              Content Overview
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaImage className="text-blue-500 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-900">Images Delivered</p>
                    <p className="text-sm text-gray-600">Social media graphics, posts</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-600">120</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaEdit className="text-green-500 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-900">Blog Posts</p>
                    <p className="text-sm text-gray-600">Articles and content</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600">85</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FaVideo className="text-purple-500 text-2xl" />
                  <div>
                    <p className="font-semibold text-gray-900">Videos Created</p>
                    <p className="text-sm text-gray-600">Marketing and promotional</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-purple-600">40</span>
              </div>
            </div>
          </motion.div>

          {/* Facebook Ad Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FaFacebook className="text-blue-600" />
              Facebook Marketing Stats
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                <p className="text-sm mb-2">Total Ad Spending</p>
                <p className="text-3xl font-bold">${stats.facebookSpending.toFixed(2)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <FaEye className="text-blue-500 text-2xl mb-2" />
                  <p className="text-sm text-gray-600">Reach</p>
                  <p className="text-xl font-bold text-gray-900">{(stats.reach / 1000).toFixed(0)}K</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <FaShareAlt className="text-green-500 text-2xl mb-2" />
                  <p className="text-sm text-gray-600">Engagement</p>
                  <p className="text-xl font-bold text-gray-900">{(stats.engagement / 1000).toFixed(0)}K</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <FaPercentage className="text-purple-500 text-2xl mb-2" />
                  <p className="text-sm text-gray-600">Conversion</p>
                  <p className="text-xl font-bold text-gray-900">{stats.conversionRate}%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <FaClock className="text-orange-500 text-2xl mb-2" />
                  <p className="text-sm text-gray-600">Clicks</p>
                  <p className="text-xl font-bold text-gray-900">4.2K</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                    activity.status === 'active' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {activity.type === 'content' ? <FaFileAlt /> :
                     activity.type === 'ad' ? <FaFacebook /> :
                     activity.type === 'video' ? <FaVideo /> :
                     <FaImage />}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    activity.status === 'completed' ? 'bg-green-100 text-green-700' :
                    activity.status === 'active' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {activity.status}
                  </span>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold mb-6">{t('clientPortal.dashboard.quickLinks')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="#" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
                    <FaFileAlt className="text-3xl mb-2" />
                    <p className="font-semibold">View All Content</p>
                  </Link>
                  <Link to="#" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
                    <FaChartLine className="text-3xl mb-2" />
                    <p className="font-semibold">Campaign Reports</p>
                  </Link>
                  <Link to="/contact" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
                    <FaEdit className="text-3xl mb-2" />
                    <p className="font-semibold">Request New Content</p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'settings' && <SettingsTab />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClientDashboard;

