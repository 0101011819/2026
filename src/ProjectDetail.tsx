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
      company: language === 'en' ? 'Anhui Dingxiao Education Technology Co., Ltd.' : '安徽鼎校教育科技有限公司',
      icon: '🚀',
      color: 'bg-brand-yellow',
      description: language === 'en'
        ? 'Led C-end APP user growth module optimization. Benchmarked Pinduoduo and Luckin Coffee viral strategies, built low-cost viral growth system. Achieved 45% sharing rate increase, 38% monthly new user growth, 32% points redemption rate, forming "acquisition-activation-referral" closed loop.'
        : '负责C端APP用户增长模块优化，搭建低成本、高效率的用户裂变增长体系。对标拼多多、瑞幸等头部平台裂变玩法，设计阶梯式奖励+即时反馈激励机制，实现用户主动分享率提升45%，单月新增用户规模提升38%，积分兑换率达32%，形成"拉新-活跃-再裂变"的用户增长闭环。',
      background: language === 'en'
        ? 'The education app faced three core pain points: high user acquisition costs with traditional advertising, weak organic growth, and low willingness of existing users to refer. The company needed a systematic viral growth solution to build a "acquisition - activation - referral" closed loop and reduce CAC.'
        : '公司教育APP面临用户拉新成本高、自然增长乏力、老用户裂变意愿低三大核心痛点。需要搭建低成本、高效率的用户裂变增长体系，构建"拉新-活跃-再裂变"的用户增长闭环，有效降低平台用户拉新成本。',
      challenges: language === 'en' ? [
        'High CAC with traditional advertising channels, unsustainable growth model',
        'Weak organic growth and low viral coefficient (K-factor)',
        'Low existing user referral willingness and participation rate',
        'Previous reward system lacked instant feedback and visual motivation',
        'Need to balance aggressive growth with education product user experience'
      ] : [
        '传统广告投放渠道获客成本高昂，增长模式不可持续',
        '自然增长乏力，病毒传播系数（K因子）低',
        '老用户推荐意愿和参与度低',
        '原有奖励体系缺乏即时反馈和视觉激励',
        '需要在激进增长与教育产品用户体验间取得平衡'
      ],
      solutions: language === 'en' ? [
        'Benchmarked Pinduoduo and Luckin Coffee: Completed in-depth competitive analysis report,拆解 industry mature growth models',
        'Determined core gameplay: Designed "Invite new users for points" tiered裂变 mechanism suitable for education product characteristics',
        'Reconstructed reward system: Built tiered rewards + instant feedback incentive mechanism with visual progress tracking',
        'Full链路 design: Independently output complete PRD documentation, used Axure for high-fidelity prototype covering invitation, reward distribution, points redemption',
        'Data tracking scheme: Planned comprehensive data埋点 for core metrics (referrals, sharing rate, redemption rate) to support effect validation and iteration'
      ] : [
        '对标拼多多、瑞幸等头部平台：完成深度竞品分析报告，拆解行业成熟增长模型',
        '确定核心玩法：结合教育产品用户特性，设计「邀请新用户得积分」的阶梯式裂变机制',
        '重构奖励体系：搭建阶梯式奖励+即时反馈激励机制，配合可视化进度追踪',
        '全链路设计：独立输出完整PRD需求文档，使用Axure完成高保真原型，覆盖用户邀请、奖励发放、积分兑换全流程',
        '数据埋点方案：规划全流程数据埋点，明确拉新数、分享率、兑换率等核心指标，为效果验证和持续迭代提供支撑'
      ],
      features: language === 'en' ? [
        'Tiered points reward system: escalating incentives drive sustained participation',
        'Instant feedback mechanism: real-time points display with visual progress bars',
        'Personalized invite codes: one-click social sharing to WeChat/QQ',
        'Gamified progress tracking: achievement badges and milestone rewards',
        'Points redemption center: multiple reward options (courses, coupons, physical gifts)',
        'Growth data dashboard: real-time monitoring of K-factor, sharing rate, redemption rate'
      ] : [
        '阶梯式积分奖励系统：激励逐级递增，驱动持续参与',
        '即时反馈机制：实时积分展示配合可视化进度条',
        '个性化邀请码：一键分享至微信/QQ等社交平台',
        '游戏化进度追踪：成就徽章和里程碑奖励',
        '积分兑换中心：多种奖励选项（课程、优惠券、实物礼品）',
        '增长数据仪表板：实时监控K因子、分享率、兑换率'
      ],
      results: language === 'en' ? [
        'Viral growth feature successfully launched and running stably in production',
        '45% increase in user主动 sharing rate (measured by invite button clicks)',
        '38% growth in monthly new user acquisition (compared to pre-launch baseline)',
        '32% points redemption rate (indicating high user engagement with reward system)',
        'Effectively reduced platform user acquisition costs by shifting from paid ads to organic viral growth',
        'Successfully built "acquisition - activation - referral" growth closed loop, driving sustainable user growth'
      ] : [
        '裂变增长功能成功上线并稳定运行',
        '用户主动分享率提升45%（以邀请按钮点击率为衡量指标）',
        '单月新增用户规模提升38%（与功能上线前对比）',
        '积分兑换率达32%（表明用户对奖励体系的高度参与）',
        '有效降低平台用户拉新成本，从付费投放转向有机裂变增长',
        '成功形成"拉新-活跃-再裂变"的用户增长闭环，驱动可持续用户增长'
      ],
      process: language === 'en' ? [
        'Competitive analysis: Benchmarked Pinduoduo, Luckin Coffee, analyzed viral mechanisms and reward structures',
        'User research: Conducted interviews with 15+ active users to understand sharing motivations and pain points',
        'Strategy design: Determined tiered裂变 gameplay suitable for education product user characteristics',
        'Product design: Designed complete user flow from invitation to redemption, with instant feedback at each step',
        'PRD documentation: Output detailed requirements document with user stories, acceptance criteria, data requirements',
        'Prototype design: Created Axure high-fidelity prototype with interactive user flows for stakeholder review',
        'Data planning: Designed tracking scheme for referrals, sharing rate, redemption rate, CAC metrics',
        'Development follow-up: Collaborated with dev team, conducted 3 rounds of user acceptance testing',
        'Launch & iteration: Soft launch to 20% users, analyzed data, optimized reward tiers based on redemption patterns'
      ] : [
        '竞品分析：对标拼多多、瑞幸等平台，分析其裂变机制和奖励结构',
        '用户调研：访谈15+活跃用户，了解分享动机和痛点',
        '策略设计：确定适合教育产品用户特性的阶梯式裂变玩法',
        '产品设计：设计从邀请到兑换的完整用户流程，每个环节都有即时反馈',
        'PRD文档：输出详细需求文档，包含用户故事、验收标准、数据需求',
        '原型设计：使用Axure制作高保真原型，包含可交互的用户流程供评审',
        '数据规划：设计拉新数、分享率、兑换率、获客成本等指标的埋点方案',
        '开发跟进：与开发团队协作，进行3轮用户验收测试',
        '上线迭代：先对20%用户灰度发布，分析数据，根据兑换情况优化奖励阶梯'
      ],
      learnings: language === 'en' ? [
        'Viral growth fundamentals: Deep understanding of K-factor, viral coefficient, and how to measure viral loop effectiveness',
        'Psychology of rewards: Instant gratification and visual feedback are crucial for motivation; delayed rewards lose 60% user interest',
        'Tiered vs flat rewards: Tiered incentives create goal-gradient effect, 3x more effective than flat rewards for sustained engagement',
        'Data-driven mindset: Must define core metrics (sharing rate, redemption rate, CAC) before feature launch, not after',
        'Cross-functional collaboration: Close cooperation with marketing (growth targets) and dev (feasibility) is essential for success',
        'User-centric approach: Understanding true motivations behind sharing behavior (social currency, altruism, rewards) is key',
        'Balance is critical: Aggressive growth tactics can harm user experience; need to find sweet spot for education products'
      ] : [
        '裂变增长 fundamentals：深入理解K因子、病毒系数，以及如何衡量裂变闭环效果',
        '奖励心理学：即时满足和视觉反馈对激励至关重要；延迟奖励会流失60%用户兴趣',
        '阶梯式vs固定奖励：阶梯激励产生目标梯度效应，在维持长期参与方面比固定奖励有效3倍',
        '数据驱动思维：必须在功能上线前定义好核心指标（分享率、兑换率、获客成本），而不是上线后',
        '跨部门协作：与市场（增长目标）和开发（可行性）团队的紧密配合对成功至关重要',
        '用户中心方法：理解分享行为背后的真实动机（社交货币、利他主义、奖励）是关键',
        '平衡至关重要：激进的增长策略可能损害用户体验；需要为教育产品找到最佳平衡点'
      ],
      tools: ['Axure', 'Xmind', 'Visio', 'Excel'],
      duration: language === 'en' ? 'Jun - Sep 2025 (3 months)' : '2025年6月-9月（3个月）',
      role: language === 'en' ? 'Product Manager Intern (User Growth Direction)' : '产品经理实习生（用户增长方向）'
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
