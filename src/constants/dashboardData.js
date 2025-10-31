// Static data moved outside components to prevent unnecessary re-renders
export const STATS_DATA = {
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
};

export const PROJECTS_DATA = [
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
];

export const NOTIFICATIONS_DATA = [
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
];

export const RECENT_ACTIVITIES_DATA = [
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

export const REPORTS_DATA = [
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
];
