import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, BookOpen, Lightbulb, Target, CheckCircle, Users, FileText, BarChart3, Download, ExternalLink, Eye, X, FileText as FileIcon, Image as ImageIcon, Layout } from 'lucide-react';
import { translations } from './i18n';

const DoodleStar = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className={className}
  >
    <Star className="w-8 h-8 fill-brand-pink text-black stroke-2" />
  </motion.div>
);

interface ProjectData {
  id: string;
  title: string;
  type: string;
  company: string;
  icon: string;
  color: string;
  description: string;
  background: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  results: string[];
  process: string[];
  learnings: string[];
  tools: string[];
  duration: string;
  role: string;
}

const ProjectDetail = ({ language }: { language: 'en' | 'zh' }) => {
  const { id } = useParams<{ id: string }>();

  const projects: Record<string, ProjectData> = {
    'user-growth': {
      id: 'user-growth',
      title: language === 'en' ? 'Education App User Growth System' : '教育APP用户增长系统',
      type: language === 'en' ? 'Internship Project' : '实习项目',
      company: language === 'en' ? 'Dingxiao Education' : '鼎校教育',
      icon: '🚀',
      color: 'bg-brand-yellow',
      description: language === 'en'
        ? 'Led C-end user growth module optimization, designed viral growth system with tiered points mechanism, achieving 45% sharing rate increase and 38% new user growth.'
        : '负责C端APP用户增长模块优化，设计裂变增长体系，实现阶梯式积分奖励机制，分享率提升45%，新增用户增长38%。',
      background: language === 'en'
        ? 'The education app faced high user acquisition costs and low organic growth. The company needed a cost-effective viral growth system to reduce CAC and increase user base.'
        : '教育APP面临用户拉新成本高、自然增长乏力的问题。公司需要一套低成本、高效率的裂变增长体系来降低获客成本并扩大用户规模。',
      challenges: language === 'en' ? [
        'High user acquisition costs with traditional advertising',
        'Low user sharing willingness and referral rates',
        'Existing reward system not motivating enough',
        'Need to balance growth with user experience'
      ] : [
        '传统广告投放获客成本高昂',
        '用户分享意愿和推荐率低',
        '现有奖励机制激励效果不足',
        '需要在增长和用户体验之间取得平衡'
      ],
      solutions: language === 'en' ? [
        'Analyzed viral growth strategies from Pinduoduo and Luckin Coffee',
        'Designed tiered points reward system with instant feedback',
        'Created "Invite new users for points" gamification mechanism',
        'Implemented comprehensive data tracking for optimization'
      ] : [
        '对标拼多多、瑞幸等平台的裂变玩法',
        '设计阶梯式积分奖励+即时反馈机制',
        '创建"邀请新用户得积分"的游戏化机制',
        '实施全流程数据埋点用于优化'
      ],
      features: language === 'en' ? [
        'Tiered reward system with escalating incentives',
        'Real-time points display and redemption',
        'Social sharing with personalized invite codes',
        'Gamified progress tracking and achievements'
      ] : [
        '阶梯式奖励系统，激励逐级递增',
        '实时积分展示和兑换功能',
        '带个性化邀请码的社交分享',
        '游戏化进度追踪和成就系统'
      ],
      results: language === 'en' ? [
        '45% increase in user sharing rate',
        '38% growth in new user acquisition',
        '32% points redemption rate',
        'Reduced CAC by 25%'
      ] : [
        '用户分享率提升45%',
        '新增用户增长38%',
        '积分兑换率达32%',
        '获客成本降低25%'
      ],
      process: language === 'en' ? [
        'Competitive analysis of viral growth mechanisms',
        'User interviews to understand sharing motivations',
        'Design of reward structure and user flow',
        'PRD documentation and prototype creation',
        'Data tracking planning and implementation',
        'A/B testing and iterative optimization'
      ] : [
        '裂变增长机制的竞品分析',
        '用户访谈了解分享动机',
        '奖励结构和用户流程设计',
        'PRD文档撰写和原型制作',
        '数据埋点规划和实施',
        'A/B测试和迭代优化'
      ],
      learnings: language === 'en' ? [
        'Understanding of viral coefficient and growth metrics',
        'Importance of instant gratification in reward systems',
        'Balancing business goals with user value',
        'Data-driven approach to product optimization',
        'Cross-functional collaboration with marketing and dev teams'
      ] : [
        '理解病毒系数和增长指标',
        '即时满足在奖励系统中的重要性',
        '平衡商业目标和用户价值',
        '数据驱动的产品优化方法',
        '与市场和开发团队的跨部门协作'
      ],
      tools: ['Axure', 'Xmind', 'Excel', 'Google Analytics'],
      duration: language === 'en' ? 'Jun - Sep 2025' : '2025年6月-9月',
      role: language === 'en' ? 'Product Manager Intern' : '产品经理实习生'
    },
    'smart-community': {
      id: 'smart-community',
      title: language === 'en' ? 'Smart Community Payment System' : '智慧社区物业缴费系统',
      type: language === 'en' ? 'B-End Product' : 'B端产品',
      company: language === 'en' ? 'Smart Community Project' : '智慧社区项目',
      icon: '🏘️',
      color: 'bg-brand-blue',
      description: language === 'en'
        ? 'Designed a comprehensive property management system with backend management + resident mini-program, achieving full digitalization of payment processes and reducing manual collection costs by 60%+.'
        : '设计综合物业管理系统，包含管理后台+业主小程序，实现物业缴费全流程数字化，降低人工催缴成本60%+。',
      background: language === 'en'
        ? 'Traditional community property management relied heavily on offline processes with opaque billing, inefficient payment collection, and chaotic financial management. The project aimed to digitize the entire payment workflow.'
        : '传统社区物业管理高度依赖线下模式，存在账目不透明、缴费效率低、财务管理混乱等问题。本项目旨在实现物业缴费全流程数字化升级。',
      challenges: language === 'en' ? [
        'Opaque billing - residents unclear about fee calculations',
        'Manual collection process with high labor costs',
        'No unified permission management system',
        'Chaotic financial data in legacy systems',
        'Complex approval workflows between multiple roles'
      ] : [
        '账目不透明 - 业主对费用计算依据不清晰',
        '人工催缴流程效率低下、成本高',
        '缺乏统一的权限管理体系',
        '老旧财务系统数据混乱',
        '多角色之间复杂的审批流程'
      ],
      solutions: language === 'en' ? [
        'Designed dual-end system: management backend + resident mini-program',
        'Created 4-role permission system: Admin, Finance, Property, Resident',
        'Built automated billing generation and push notification system',
        'Implemented multi-level approval workflows',
        'Developed offline payment reconciliation module'
      ] : [
        '设计双端系统：管理后台+业主小程序',
        '创建4角色权限体系：管理员、财务、物业、业主',
        '构建自动化账单生成和推送系统',
        '实现多级审批工作流程',
        '开发线下缴费平账模块'
      ],
      features: language === 'en' ? [
        'Fee item management with 6 billing modes',
        'Automated bill generation and push notifications',
        'Online payment via WeChat/Alipay integration',
        'Overdue reminder and collection management',
        'Financial statistics and reporting dashboard',
        'Offline payment reconciliation workflow'
      ] : [
        '费用项管理，支持6种计费模式',
        '自动化账单生成和推送通知',
        '微信/支付宝在线支付集成',
        '超期提醒和催缴管理',
        '财务统计和报表仪表板',
        '线下缴费平账工作流程'
      ],
      results: language === 'en' ? [
        'Reduced manual collection costs by 60%+',
        '100% on-time delivery of core features',
        'Full business process digitization',
        'Improved resident satisfaction with transparent billing',
        'Streamlined approval workflows reducing processing time'
      ] : [
        '降低人工催缴成本60%+',
        '核心功能100%按时交付',
        '完整业务流程数字化',
        '透明账单提升业主满意度',
        '简化审批流程缩短处理时间'
      ],
      process: language === 'en' ? [
        'Stakeholder interviews with property managers and residents',
        'Business process mapping and pain point analysis',
        'Role-based permission system design',
        'Information architecture and workflow design',
        'High-fidelity prototyping with Axure',
        'PRD documentation and development coordination'
      ] : [
        '与物业管理人员和业主的利益相关者访谈',
        '业务流程梳理和痛点分析',
        '基于角色的权限系统设计',
        '信息架构和工作流程设计',
        '使用Axure制作高保真原型',
        'PRD文档撰写和开发协调'
      ],
      learnings: language === 'en' ? [
        'Deep understanding of B-end product design principles',
        'Importance of role-based permission management',
        'Complex workflow design for enterprise systems',
        'Balancing standardization with flexibility',
        'Cross-functional communication in traditional industries'
      ] : [
        '深入理解B端产品设计原则',
        '基于角色的权限管理的重要性',
        '企业系统的复杂工作流程设计',
        '标准化与灵活性之间的平衡',
        '传统行业中的跨部门沟通'
      ],
      tools: ['Stich', 'Axure', 'Xmind', 'Visio', 'Excel'],
      duration: language === 'en' ? 'Sep - Dec 2024' : '2024年9月-12月',
      role: language === 'en' ? 'Product Manager' : '产品经理'
    },
    'university-system': {
      id: 'university-system',
      title: language === 'en' ? 'University Management System' : '高校学工管理系统',
      type: language === 'en' ? 'System Optimization' : '系统优化',
      company: language === 'en' ? 'University Project' : '高校项目',
      icon: '🎓',
      color: 'bg-brand-pink',
      description: language === 'en'
        ? 'Optimized student information management system, restructured approval workflows, improving data entry efficiency by 50% and reducing approval time by 60%.'
        : '优化学生信息管理系统，重构审批工作流程，录入效率提升50%，审批流程耗时缩短60%。',
      background: language === 'en'
        ? 'The existing university student management system had scattered data, redundant approval processes, and complex operation paths. Teachers and administrators struggled with low efficiency.'
        : '原有高校学工管理系统存在数据分散、审批流程冗余、操作路径复杂等问题，教师和管理人员使用效率低下。',
      challenges: language === 'en' ? [
        'Student data scattered across multiple systems',
        'Redundant approval workflows with unclear ownership',
        'Complex operation paths requiring many clicks',
        'No standardized data entry procedures',
        'Poor user experience for faculty and staff'
      ] : [
        '学生数据分散在多个系统中',
        '审批流程冗余，责任不清晰',
        '操作路径复杂，需要多次点击',
        '缺乏标准化的数据录入流程',
        '教职员工用户体验差'
      ],
      solutions: language === 'en' ? [
        'Consolidated data sources into unified platform',
        'Redesigned approval workflows with clear ownership',
        'Simplified operation paths and reduced clicks',
        'Created standardized data entry templates',
        'Improved UI/UX based on user feedback'
      ] : [
        '将数据源整合到统一平台',
        '重新设计审批流程，明确责任归属',
        '简化操作路径，减少点击次数',
        '创建标准化数据录入模板',
        '基于用户反馈改进UI/UX'
      ],
      features: language === 'en' ? [
        'Unified student information database',
        'Streamlined approval workflow engine',
        'Bulk data import and export tools',
        'Role-based dashboard and permissions',
        'Audit trail and operation logging'
      ] : [
        '统一的学生信息数据库',
        '简化的审批工作流引擎',
        '批量数据导入导出工具',
        '基于角色的仪表板和权限',
        '审计追踪和操作日志'
      ],
      results: language === 'en' ? [
        '50% improvement in data entry efficiency',
        '60% reduction in approval processing time',
        'Significant improvement in management efficiency',
        'Positive feedback from faculty and staff',
        'Reduced data errors through standardization'
      ] : [
        '录入效率提升50%',
        '审批处理时间缩短60%',
        '管理效率大幅提升',
        '获得教职员工的积极反馈',
        '通过标准化减少数据错误'
      ],
      process: language === 'en' ? [
        'User interviews with faculty and administrators',
        'Analysis of existing workflows and pain points',
        'Process re-engineering and optimization',
        'Wireframing and prototyping',
        'Usability testing and iteration',
        'Implementation and training support'
      ] : [
        '与教师和管理人员的用户访谈',
        '分析现有工作流程和痛点',
        '流程再造和优化',
        '线框图和原型制作',
        '可用性测试和迭代',
        '实施和培训支持'
      ],
      learnings: language === 'en' ? [
        'Process optimization requires deep domain understanding',
        'User adoption is critical for system success',
        'Change management in organizations',
        'Importance of data standardization',
        'Iterative improvement based on feedback'
      ] : [
        '流程优化需要深入理解业务领域',
        '用户采纳对系统成功至关重要',
        '组织中的变更管理',
        '数据标准化的重要性',
        '基于反馈的迭代改进'
      ],
      tools: ['Axure', 'Xmind', 'Excel'],
      duration: language === 'en' ? 'Mar - Jun 2024' : '2024年3月-6月',
      role: language === 'en' ? 'Product Assistant' : '产品助理'
    },
    'portfolio': {
      id: 'portfolio',
      title: language === 'en' ? 'Product Portfolio Website' : '产品作品集网站',
      type: language === 'en' ? 'Personal Project' : '个人项目',
      company: language === 'en' ? 'Self-developed' : '自主开发',
      icon: '💻',
      color: 'bg-white',
      description: language === 'en'
        ? 'Built this portfolio website from scratch using React, TypeScript, and Tailwind CSS to showcase my product management work and technical skills.'
        : '使用React、TypeScript和Tailwind CSS从零开始构建这个作品集网站，展示我的产品管理作品和技术技能。',
      background: language === 'en'
        ? 'I needed a professional online presence to showcase my product management projects and skills. Instead of using a template, I decided to build it myself to demonstrate technical competency.'
        : '我需要一个专业的在线展示平台来展示我的产品管理项目和技能。与其使用模板，我决定自己构建以展示技术能力。',
      challenges: language === 'en' ? [
        'Learning React and TypeScript from scratch',
        'Designing responsive layouts for all devices',
        'Implementing smooth animations and interactions',
        'Creating bilingual support (EN/CN)',
        'Deploying and maintaining the website'
      ] : [
        '从零学习React和TypeScript',
        '为所有设备设计响应式布局',
        '实现流畅的动画和交互',
        '创建双语支持（英文/中文）',
        '部署和维护网站'
      ],
      solutions: language === 'en' ? [
        'Followed online tutorials and documentation',
        'Used Tailwind CSS for responsive design',
        'Implemented Framer Motion for animations',
        'Created translation system with i18n',
        'Deployed on Vercel for easy hosting'
      ] : [
        '跟随在线教程和文档学习',
        '使用Tailwind CSS进行响应式设计',
        '使用Framer Motion实现动画',
        '使用i18n创建翻译系统',
        '部署在Vercel上便于托管'
      ],
      features: language === 'en' ? [
        'Responsive design for all screen sizes',
        'Bilingual support (English/Chinese)',
        'Interactive animations and transitions',
        'Project showcase with detailed case studies',
        'Contact form and social links'
      ] : [
        '适配所有屏幕尺寸的响应式设计',
        '双语支持（英文/中文）',
        '交互动画和过渡效果',
        '项目展示和详细案例研究',
        '联系表单和社交链接'
      ],
      results: language === 'en' ? [
        'Successfully launched personal portfolio',
        'Demonstrated technical competency',
        'Created professional online presence',
        'Received positive feedback from viewers'
      ] : [
        '成功发布个人作品集',
        '展示技术能力',
        '创建专业的在线形象',
        '获得观众的积极反馈'
      ],
      process: language === 'en' ? [
        'Learned React and TypeScript basics',
        'Designed UI/UX in Figma',
        'Set up development environment with Vite',
        'Built components iteratively',
        'Added animations with Framer Motion',
        'Implemented bilingual support',
        'Deployed on Vercel'
      ] : [
        '学习React和TypeScript基础',
        '在Figma中设计UI/UX',
        '使用Vite搭建开发环境',
        '迭代构建组件',
        '使用Framer Motion添加动画',
        '实现双语支持',
        '部署在Vercel上'
      ],
      learnings: language === 'en' ? [
        'Technical skills enhance PM communication with developers',
        'Building from scratch deepens understanding of complexity',
        'Design systems thinking applies to web development',
        'Debugging teaches problem-solving patience',
        'Shipping requires knowing when it\'s "good enough"'
      ] : [
        '技术技能增强PM与开发者的沟通',
        '从零构建加深对复杂性的理解',
        '设计系统思维适用于网页开发',
        '调试教会解决问题的耐心',
        '发布需要知道什么时候"足够好"'
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
      duration: language === 'en' ? 'Mar 2025' : '2025年3月',
      role: language === 'en' ? 'Full-stack Developer' : '全栈开发者'
    },
  };

  const project = projects[id || 'user-growth'];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Smart Community Project Resources
  const isSmartCommunity = id === 'smart-community';
  const projectResources = isSmartCommunity ? {
    document: {
      name: language === 'en' ? 'Property Management System PRD' : '物业缴费系统需求文档',
      path: '/docs/物业缴费系统需求文档.docx',
      icon: <FileIcon className="w-8 h-8" />
    },
    images: [
      { src: '/images/projects/wuye-flow-1.png', alt: language === 'en' ? 'Bill Status Flow' : '账单状态流转图' },
      { src: '/images/projects/wuye-flow-2.png', alt: language === 'en' ? 'Main Process Flow' : '主业务流程图' },
      { src: '/images/projects/wuye-mindmap.png', alt: language === 'en' ? 'System Mind Map' : '系统功能思维导图' }
    ],
    prototype: {
      name: language === 'en' ? 'View Interactive Prototype' : '查看交互原型',
      path: '/docs/wuye-prototype.html'
    }
  } : null;

  if (!project) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-4xl font-black mb-4">
          {language === 'en' ? 'Project not found' : '项目未找到'}
        </h2>
        <Link to="/projects" className="neo-button bg-brand-blue px-6 py-3">
          {language === 'en' ? 'Back to Projects' : '返回项目'}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-12">
      {/* Back Button */}
      <div>
        <Link to="/projects" className="neo-button bg-white px-4 py-2 flex items-center gap-2 w-fit">
          <ArrowLeft className="w-4 h-4" />
          {language === 'en' ? 'Back to Projects' : '返回项目'}
        </Link>
      </div>

      {/* Project Header */}
      <div className="space-y-8">
        <div className={`neo-card ${project.color} p-8 relative`}>
          <DoodleStar className="absolute -top-4 -right-4" />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{project.icon}</span>
            <div>
              <div className="flex gap-2 mb-2">
                <span className="inline-block bg-white neo-border px-3 py-1 text-sm font-bold">
                  {project.type}
                </span>
                <span className="inline-block bg-brand-pink neo-border px-3 py-1 text-sm font-bold">
                  {project.company}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black">{project.title}</h1>
            </div>
          </div>
          <p className="text-xl leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Project Meta */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="neo-card p-4 text-center">
          <p className="font-bold text-gray-500 text-sm mb-1">
            {language === 'en' ? 'Duration' : '持续时间'}
          </p>
          <p className="font-black">{project.duration}</p>
        </div>
        <div className="neo-card p-4 text-center">
          <p className="font-bold text-gray-500 text-sm mb-1">
            {language === 'en' ? 'Role' : '角色'}
          </p>
          <p className="font-black">{project.role}</p>
        </div>
        <div className="neo-card p-4 text-center md:col-span-2">
          <p className="font-bold text-gray-500 text-sm mb-1">
            {language === 'en' ? 'Tools Used' : '使用的工具'}
          </p>
          <p className="font-black">{project.tools.join(' • ')}</p>
        </div>
      </div>

      {/* Project Resources - Only for Smart Community Project */}
      {isSmartCommunity && projectResources && (
        <div className="space-y-8">
          {/* Document Access */}
          <div className="neo-card bg-brand-yellow p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileIcon className="w-6 h-6" />
              <h3 className="text-2xl font-black">
                {language === 'en' ? 'Project Documentation' : '项目文档'}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-white neo-border flex items-center justify-center">
                  {projectResources.document.icon}
                </div>
                <div>
                  <p className="font-black text-lg">{projectResources.document.name}</p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Complete product requirements document' : '完整的产品需求文档'}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={projectResources.document.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button bg-white flex items-center gap-2 px-4 py-2"
                >
                  <Eye className="w-4 h-4" />
                  {language === 'en' ? 'View' : '查看'}
                </a>
                <a
                  href={projectResources.document.path}
                  download
                  className="neo-button bg-brand-blue text-white flex items-center gap-2 px-4 py-2"
                >
                  <Download className="w-4 h-4" />
                  {language === 'en' ? 'Download' : '下载'}
                </a>
              </div>
            </div>
          </div>

          {/* Prototype Link */}
          <div className="neo-card bg-brand-pink p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="w-6 h-6" />
              <h3 className="text-2xl font-black">
                {language === 'en' ? 'Interactive Prototype' : '交互原型'}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-white neo-border flex items-center justify-center">
                  <Layout className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-black text-lg">
                    {language === 'en' ? 'Property Management System Demo' : '物业缴费系统原型演示'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? 'Interactive HTML prototype with full functionality' : '包含完整功能的交互式HTML原型'}
                  </p>
                </div>
              </div>
              <a
                href={projectResources.prototype.path}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button bg-white flex items-center gap-2 px-6 py-3 font-bold"
              >
                <ExternalLink className="w-4 h-4" />
                {projectResources.prototype.name}
              </a>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="neo-card bg-brand-blue p-6">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-6 h-6" />
              <h3 className="text-2xl font-black">
                {language === 'en' ? 'System Diagrams' : '系统流程图'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectResources.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="neo-border bg-white p-2">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <p className="font-bold text-center mt-2 text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand-pink transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="neo-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6" />
          <h2 className="text-2xl font-black">
            {language === 'en' ? 'Project Background' : '项目背景'}
          </h2>
        </div>
        <p className="text-lg leading-relaxed">{project.background}</p>
      </div>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neo-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6" />
            <h2 className="text-2xl font-black">
              {language === 'en' ? 'Key Challenges' : '关键挑战'}
            </h2>
          </div>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 bg-brand-yellow flex items-center justify-center rounded-full flex-shrink-0 text-black font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-lg">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="neo-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6" />
            <h2 className="text-2xl font-black">
              {language === 'en' ? 'Solutions' : '解决方案'}
            </h2>
          </div>
          <ul className="space-y-3">
            {project.solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 w-6 h-6 bg-brand-blue flex items-center justify-center rounded-full flex-shrink-0 text-white font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-lg">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="neo-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6" />
          <h2 className="text-2xl font-black">
            {language === 'en' ? 'Key Features' : '核心功能'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-1" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="neo-card bg-brand-yellow p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6" />
          <h2 className="text-2xl font-black">
            {language === 'en' ? 'Quantifiable Results' : '量化成果'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.results.map((result, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <span className="text-lg font-bold">{result}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="neo-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6" />
          <h2 className="text-2xl font-black">
            {language === 'en' ? 'My Process' : '我的工作流程'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.process.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 w-8 h-8 bg-brand-blue flex items-center justify-center rounded-full flex-shrink-0 text-white font-bold text-sm">
                {index + 1}
              </span>
              <span className="text-lg">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Learnings */}
      <div className="neo-card p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6" />
          <h2 className="text-2xl font-black">
            {language === 'en' ? 'Key Learnings' : '关键收获'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.learnings.map((learning, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-pink flex-shrink-0 mt-1" />
              <span className="text-lg">{learning}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reflection */}
      <div className="neo-card bg-brand-blue p-8 text-center text-white">
        <h3 className="text-2xl font-black mb-4">
          {language === 'en' ? 'My Reflection' : '我的反思'}
        </h3>
        <p className="text-lg font-medium">
          {language === 'en'
            ? 'This project reinforced my belief that great B-end products require deep understanding of business processes and user needs. The satisfaction of seeing manual processes replaced by efficient digital workflows is what drives me as a product manager.'
            : '这个项目强化了我的信念：优秀的B端产品需要对业务流程和用户需求的深入理解。看到手工流程被高效的数字化工作流所取代的满足感，是驱动我作为产品经理的动力。'}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
