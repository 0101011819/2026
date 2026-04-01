/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  ArrowUpRight,
  Github,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  BookOpen,
  User,
  Briefcase,
  Home as HomeIcon,
  Smile,
  Zap
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { translations } from './i18n';
import ProjectDetail from './ProjectDetail';

// --- Components ---

const DoodleStar = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className={className}
  >
    <Star className="w-8 h-8 fill-brand-pink text-black stroke-2" />
  </motion.div>
);

const SectionTitle = ({ children, doodle }: { children: React.ReactNode, doodle?: React.ReactNode }) => (
  <div className="relative mb-12">
    <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
      {children}
    </h2>
    {doodle && <div className="absolute -top-8 -right-8">{doodle}</div>}
  </div>
);

// --- Pages ---

const Home = ({ language }: { language: 'en' | 'zh' }) => (
  <div className="space-y-24">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center gap-12 py-12">
      <div className="flex-1 space-y-8">
        <div className="inline-block bg-brand-pink neo-border px-4 py-1 font-hand text-xl -rotate-2">
          {translations[language].hello}
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-none uppercase">
          {translations[language].heroTitle}
        </h1>
        <p className="text-xl font-medium max-w-lg">
          {translations[language].heroSubtitle}
        </p>
        <div className="flex gap-4">
          <Link to="/projects">
            <button className="neo-button bg-brand-blue text-lg px-8 py-4">
              {translations[language].seePortfolio}
            </button>
          </Link>
          <a href="mailto:ok.shine113@gmail.com">
            <button className="neo-button bg-white text-lg px-8 py-4">
              {translations[language].hireMe}
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="neo-card bg-gray-200 aspect-square flex items-center justify-center relative overflow-hidden">
          <img src="/images/avatar.jpg" alt="Zainab" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-black" />
            <div className="w-3 h-3 rounded-full bg-black" />
          </div>
          <DoodleStar className="absolute -bottom-4 -right-4" />
        </div>
        <div className="absolute -top-6 -left-6 font-hand text-2xl rotate-[-15deg] bg-white neo-border px-3 py-1">
          SHENGNAN
        </div>
      </div>
    </section>

    {/* What I Do - Sticky Notes Style */}
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4">
        <div className="relative">
          <div className="absolute -top-4 -left-4 font-hand text-lg bg-brand-pink neo-border px-2 rotate-[-5deg] z-10">{translations[language].whatIDo}</div>
          <motion.div whileHover={{ rotate: 0 }} className="neo-card bg-brand-yellow w-full md:w-64 h-80 rotate-[-2deg] flex flex-col overflow-hidden">
            <div className="flex-1 relative overflow-hidden">
              <img
                src="/images/projects/wuye-flow-1.png"
                alt="User Growth Flow"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-4 bg-brand-yellow">
              <div className="text-2xl mb-2">✏️</div>
              <h3 className="text-xl font-black leading-tight">{translations[language].userResearch}</h3>
            </div>
          </motion.div>
        </div>
        <motion.div whileHover={{ rotate: 0 }} className="neo-card bg-brand-blue w-full md:w-64 h-80 rotate-[3deg] flex flex-col overflow-hidden">
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/images/projects/wuye-flow-2.png"
              alt="Product Design Flow"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="p-4 bg-brand-blue">
            <div className="text-2xl mb-2">👁️</div>
            <h3 className="text-xl font-black leading-tight">{translations[language].uiDesign}</h3>
          </div>
        </motion.div>
        <motion.div whileHover={{ rotate: 0 }} className="neo-card bg-brand-pink w-full md:w-64 h-80 rotate-[-1deg] flex flex-col overflow-hidden">
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/images/projects/wuye-mindmap.png"
              alt="System Mind Map"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="p-4 bg-brand-pink">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="text-xl font-black leading-tight">{translations[language].noCode}</h3>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Let's start designing section */}
    <StartDesigningSection language={language} />
    <HomeContinued language={language} />
  </div>
);

// Start Designing Section Component
const StartDesigningSection = ({ language }: { language: 'en' | 'zh' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12">
      <div className="neo-card bg-white neo-shadow-lg p-12 text-center relative max-w-4xl mx-auto">
        <DoodleStar className="absolute -top-8 -right-8" />
        <h2 className="text-4xl md:text-5xl font-black mb-6">{translations[language].startDesigning}</h2>
        <p className="text-xl font-medium text-gray-600 mb-8 max-w-2xl mx-auto">
          {translations[language].startDesigningSubtitle}
        </p>
        <motion.button
          onClick={scrollToContact}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="neo-button bg-brand-blue text-xl px-12 py-4 rounded-full relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            {translations[language].sendMessage}
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.span>
          </span>
        </motion.button>
      </div>
    </section>
  );
};

// Home component continuation
const HomeContinued = ({ language }: { language: 'en' | 'zh' }) => (
  <>
    {/* Testimonials */}
    <section className="py-12 space-y-12">
      <h2 className="text-4xl font-black uppercase">{translations[language].testimonialsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            quote: language === 'en'
              ? 'Liang has strong execution skills and data-driven mindset. The user growth system she designed significantly improved our app\'s viral coefficient.'
              : '梁胜男执行力强，具备数据驱动思维。她设计的用户增长体系显著提升了我们应用的病毒传播系数。',
            name: language === 'en' ? 'Product Lead' : '产品负责人',
            role: language === 'en' ? 'Dingxiao Education' : '鼎校教育'
          },
          {
            quote: language === 'en'
              ? 'Her ability to balance user needs with business goals is impressive. She delivered high-quality PRD documents and prototypes on time.'
              : '她在平衡用户需求与商业目标方面的能力令人印象深刻。按时交付了高质量的需求文档和原型。',
            name: language === 'en' ? 'Engineering Manager' : '技术经理',
            role: language === 'en' ? 'Smart Community Project' : '智慧社区项目'
          }
        ].map((item, i) => (
          <div key={i} className={`neo-card ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
            <p className="text-xl font-bold mb-6">{item.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue neo-border overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-black">{item.name}</div>
                <div className="text-sm font-bold text-gray-500">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <ContactSection language={language} />
  </>
);

// Contact Form Component with full functionality
const ContactSection = ({ language }: { language: 'en' | 'zh' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : '请输入姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : '请输入邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email format' : '邮箱格式不正确';
    }

    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : '请输入留言内容';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // Simulate API call - in production, replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Try to open email client
      const subject = encodeURIComponent(language === 'en' ? `Message from ${formData.name}` : `来自${formData.name}的留言`);
      const body = encodeURIComponent(
        `${language === 'en' ? 'Name' : '姓名'}: ${formData.name}\n` +
        `${language === 'en' ? 'Email' : '邮箱'}: ${formData.email}\n\n` +
        `${language === 'en' ? 'Message' : '留言'}:\n${formData.message}`
      );

      const mailtoLink = `mailto:ok.shine113@gmail.com?subject=${subject}&body=${body}`;

      // Create a temporary link element to handle the mailto
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact-section" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="inline-block bg-brand-pink neo-border px-4 py-1 font-hand text-xl -rotate-2">{translations[language].contact}</div>
          <h2 className="text-5xl font-black uppercase">{translations[language].contactTitle}</h2>
          <div className="w-24 h-24">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowUpRight className="w-full h-full rotate-90" />
            </motion.div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="bg-brand-pink neo-border px-2 font-bold">{translations[language].name}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={language === 'en' ? 'Your name' : '您的姓名'}
              className={`w-full border-b-2 py-2 focus:outline-none font-hand text-xl ${errors.name ? 'border-red-500' : 'border-black'}`}
            />
            {errors.name && <p className="text-red-500 text-sm font-medium">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="bg-brand-yellow neo-border px-2 font-bold">{translations[language].email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={language === 'en' ? 'your@email.com' : '您的邮箱'}
              className={`w-full border-b-2 py-2 focus:outline-none font-hand text-xl ${errors.email ? 'border-red-500' : 'border-black'}`}
            />
            {errors.email && <p className="text-red-500 text-sm font-medium">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <label className="bg-brand-blue neo-border px-2 font-bold">{translations[language].project}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={language === 'en' ? "I want to discuss with you about......." : "我想和你讨论......."}
              className={`w-full border-b-2 py-2 focus:outline-none font-hand text-xl h-32 ${errors.message ? 'border-red-500' : 'border-black'}`}
            />
            {errors.message && <p className="text-red-500 text-sm font-medium">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`neo-button w-full py-4 text-xl transition-all duration-300 ${status === 'success' ? 'bg-green-500 text-white' :
              status === 'error' ? 'bg-red-500 text-white' :
                'bg-black text-white'
              }`}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                {language === 'en' ? 'Sending...' : '发送中...'}
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center justify-center gap-2">
                <Smile className="w-5 h-5" />
                {language === 'en' ? 'Sent Successfully!' : '发送成功！'}
              </span>
            ) : status === 'error' ? (
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                {language === 'en' ? 'Failed to Send' : '发送失败'}
              </span>
            ) : (
              translations[language].sendHere
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

const About = ({ language }: { language: 'en' | 'zh' }) => {
  const workTimeline = [
    {
      date: language === 'en' ? 'Jun - Sep 2025' : '2025年6月-9月',
      title: language === 'en' ? 'PM Intern @ Dingxiao Education' : '鼎校教育 产品经理实习',
      desc: language === 'en' ? 'Led user growth optimization, achieved 45% sharing rate increase and 38% new user growth' : '负责用户增长优化，实现分享率提升45%，新增用户增长38%',
      icon: '🚀',
      color: 'bg-brand-yellow'
    },
    {
      date: language === 'en' ? 'Sep - Dec 2024' : '2024年9月-12月',
      title: language === 'en' ? 'PM @ Smart Community Project' : '智慧社区项目 产品经理',
      desc: language === 'en' ? 'Designed payment system, reduced manual collection costs by 60%+' : '设计缴费系统，降低人工催缴成本60%+',
      icon: '🏘️',
      color: 'bg-brand-blue'
    },
    {
      date: language === 'en' ? 'Mar - Jun 2024' : '2024年3月-6月',
      title: language === 'en' ? 'Product Assistant @ University System' : '高校系统 产品助理',
      desc: language === 'en' ? 'Optimized workflows, improved entry efficiency by 50%' : '优化工作流程，录入效率提升50%',
      icon: '🎓',
      color: 'bg-brand-pink'
    },
    {
      date: language === 'en' ? 'Sep 2023 - Now' : '2023年9月-至今',
      title: language === 'en' ? 'Digital Media Technology @ Shanxi Datong University' : '山西大同大学 数字媒体技术',
      desc: language === 'en' ? 'Bachelor degree, focusing on product design and development' : '本科在读，专注产品设计与开发',
      icon: '📚',
      color: 'bg-brand-yellow'
    },
  ];

  return (
    <div className="py-12 space-y-16">
      <SectionTitle doodle={<DoodleStar />}>{translations[language].aboutMe}</SectionTitle>

      {/* Introduction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-2xl font-bold leading-relaxed">
            {translations[language].aboutDescription1}
          </p>
          <p className="text-lg font-medium text-gray-700">
            {translations[language].aboutDescription2}
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="neo-button bg-white p-3"><Twitter /></a>
            <a href="#" className="neo-button bg-white p-3"><Instagram /></a>
            <a href="#" className="neo-button bg-white p-3"><Github /></a>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-black uppercase underline decoration-brand-yellow decoration-4">{translations[language].workExperience}</h3>
          <div className="space-y-4">
            {[
              {
                id: 1,
                color: 'bg-brand-yellow',
                title: language === 'en' ? 'PM Intern - Dingxiao Education' : '产品经理实习生 - 鼎校教育',
                desc: language === 'en'
                  ? 'Led C-end user growth optimization, designed viral growth system with tiered points mechanism. Achieved 45% sharing rate increase, 38% new user growth, 32% points redemption rate.'
                  : '负责C端APP用户增长模块优化，设计裂变增长体系。实现分享率提升45%，新增用户增长38%，积分兑换率达32%。',
                date: language === 'en' ? 'Jun - Sep 2025' : '2025年6月-9月'
              },
              {
                id: 2,
                color: 'bg-brand-blue',
                title: language === 'en' ? 'Product Manager - Smart Community' : '产品经理 - 智慧社区物业缴费系统',
                desc: language === 'en'
                  ? 'Designed property management backend + resident mini-program. Reduced manual collection costs by 60%+, achieved 100% on-time delivery.'
                  : '设计物业管理后台+业主端小程序。降低人工催缴成本60%+，核心功能100%按时交付。',
                date: language === 'en' ? 'Sep - Dec 2024' : '2024年9月-12月'
              },
              {
                id: 3,
                color: 'bg-brand-pink',
                title: language === 'en' ? 'Product Assistant - University System' : '产品助理 - 高校学工管理系统',
                desc: language === 'en'
                  ? 'Optimized student information system workflows. Improved entry efficiency by 50%, reduced approval time by 60%.'
                  : '优化学生信息系统工作流程。录入效率提升50%，审批流程耗时缩短60%。',
                date: language === 'en' ? 'Mar - Jun 2024' : '2024年3月-6月'
              },
            ].map((item) => (
              <div key={item.id} className="flex gap-6 items-start p-4 neo-border bg-white neo-shadow">
                <div className={`${item.color} neo-border w-12 h-12 flex items-center justify-center text-2xl font-black shrink-0`}>
                  {item.id}
                </div>
                <div>
                  <h4 className="text-xl font-black">{item.title}</h4>
                  <p className="font-medium text-gray-600">{item.desc}</p>
                  <p className="text-sm font-bold mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black uppercase text-center">
          {language === 'en' ? 'My Journey' : '我的经历'}
        </h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black" />

          <div className="space-y-12">
            {workTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block neo-card ${item.color} p-4 max-w-sm`}>
                    <p className="font-hand text-lg mb-1">{item.date}</p>
                    <h4 className="text-xl font-black mb-2">{item.icon} {item.title}</h4>
                    <p className="font-medium text-gray-700">{item.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <motion.div
                  className="w-6 h-6 bg-black rounded-full neo-border z-10 flex-shrink-0"
                  whileHover={{ scale: 1.3 }}
                />

                {/* Empty Space for other side */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black uppercase text-center">
          {language === 'en' ? 'My Skills' : '我的技能'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* B-End Product Design */}
          <div className="neo-card p-6 bg-brand-blue">
            <h4 className="font-black text-xl mb-4">{language === 'en' ? 'B-End Product Design' : 'B端产品设计'}</h4>
            <div className="flex flex-wrap gap-2">
              {['Role-based Permissions', 'Workflow Design', 'Data Modeling', 'System Integration'].map((skill, idx) => (
                <span key={idx} className="neo-border bg-white px-3 py-1 text-sm font-bold">{skill}</span>
              ))}
            </div>
            <p className="mt-4 font-medium text-gray-700">
              {language === 'en'
                ? 'Designed property management system with 4-role permission system, automated billing workflows, and multi-level approval processes. Experienced in complex business process digitization.'
                : '设计物业管理系统，包含4角色权限体系、自动化账单工作流和多级审批流程。具备复杂业务流程数字化经验。'}
            </p>
          </div>

          {/* C-End User Growth */}
          <div className="neo-card p-6 bg-brand-yellow">
            <h4 className="font-black text-xl mb-4">{language === 'en' ? 'C-End User Growth' : 'C端用户增长'}</h4>
            <div className="flex flex-wrap gap-2">
              {['Viral Design', 'Gamification', 'Data Tracking', 'A/B Testing'].map((skill, idx) => (
                <span key={idx} className="neo-border bg-white px-3 py-1 text-sm font-bold">{skill}</span>
              ))}
            </div>
            <p className="mt-4 font-medium text-gray-700">
              {language === 'en'
                ? 'Led user growth optimization achieving 45% sharing rate increase and 38% new user growth. Designed tiered points reward system with instant feedback mechanisms.'
                : '主导用户增长优化，实现分享率提升45%，新增用户增长38%。设计阶梯式积分奖励+即时反馈机制。'}
            </p>
          </div>

          {/* Product Tools */}
          <div className="neo-card p-6 bg-brand-pink">
            <h4 className="font-black text-xl mb-4">{language === 'en' ? 'Product Tools' : '产品工具'}</h4>
            <div className="flex flex-wrap gap-2">
              {['Axure', 'Figma', '墨刀', 'Xmind', 'Visio', 'Excel', 'SQL'].map((skill, idx) => (
                <span key={idx} className="neo-border bg-white px-3 py-1 text-sm font-bold">{skill}</span>
              ))}
            </div>
            <p className="mt-4 font-medium text-gray-700">
              {language === 'en'
                ? 'Proficient in prototyping, flowcharts, architecture diagrams, PRD writing, data analysis, and competitive analysis.'
                : '熟练使用原型设计、流程图、架构图、PRD撰写、数据分析和竞品分析。'}
            </p>
          </div>

          {/* General Skills */}
          <div className="neo-card p-6 bg-white">
            <h4 className="font-black text-xl mb-4">{language === 'en' ? 'General Skills' : '通用能力'}</h4>
            <div className="flex flex-wrap gap-2">
              {['CET-6', 'Computer Level 2', 'English Reading', 'AI Tools'].map((skill, idx) => (
                <span key={idx} className="neo-border bg-brand-yellow px-3 py-1 text-sm font-bold">{skill}</span>
              ))}
            </div>
            <p className="mt-4 font-medium text-gray-700">
              {language === 'en'
                ? 'CET-6 English proficiency, Computer Level 2 certification, solid computer foundation. Proficient in using AI tools to enhance productivity.'
                : '大学英语六级、计算机二级证书、扎实的计算机基础。熟练使用AI工具提升工作效率。'}
            </p>
          </div>
        </div>
      </div>

      {/* B-End Methodology Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black uppercase text-center">
          {language === 'en' ? 'B-End Product Methodology' : 'B端产品方法论'}
        </h3>
        <div className="neo-card bg-brand-blue p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(language === 'en' ? [
              {
                title: 'Role-Based Design',
                desc: 'Designing for 4 user roles (Admin, Finance, Property, Resident) with differentiated permissions and workflows in the property management system.'
              },
              {
                title: 'Process Digitization',
                desc: 'Transforming manual workflows into digital systems: Permission config → Fee setup → Resource association → Bill generation → Payment → Reconciliation.'
              },
              {
                title: 'Data-Driven Decisions',
                desc: 'Using data tracking and analysis to optimize product features, resulting in measurable improvements in efficiency and cost reduction.'
              }
            ] : [
              {
                title: '基于角色的设计',
                desc: '为4类用户角色（管理员、财务、物业、业主）设计差异化权限和工作流，实现精细化权限管理。'
              },
              {
                title: '流程数字化',
                desc: '将手工流程转化为数字化系统：权限配置→费用设置→资源关联→账单生成→支付→对账。'
              },
              {
                title: '数据驱动决策',
                desc: '使用数据追踪和分析优化产品功能，实现可衡量的效率提升和成本降低。'
              }
            ]).map((item, idx) => (
              <div key={idx} className="neo-card bg-white p-4">
                <h4 className="font-black text-lg mb-2">{item.title}</h4>
                <p className="font-medium text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Articles = ({ language }: { language: 'en' | 'zh' }) => {
  const articles = [
    {
      tag: language === 'en' ? 'Product Analysis' : '产品分析',
      date: language === 'en' ? 'Nov 15, 2024' : '2024年11月15日',
      title: language === 'en' ? 'Why WeChat Moments is so addictive: A UX deep dive' : '为什么微信朋友圈让人上瘾：UX深度分析',
      desc: language === 'en' ? 'Analyzing the psychological triggers and design patterns that make Moments the most engaging social feature in China.' : '分析使朋友圈成为中国最吸引人的社交功能的心理触发因素和设计模式。',
      readTime: language === 'en' ? '8 min read' : '8分钟阅读',
      color: 'bg-brand-yellow'
    },
    {
      tag: language === 'en' ? 'UX Research' : '用户研究',
      date: language === 'en' ? 'Dec 20, 2024' : '2024年12月20日',
      title: language === 'en' ? 'How I conducted 20+ user interviews for my campus project' : '如何为校园项目进行20+用户访谈',
      desc: language === 'en' ? 'Sharing my process, questions asked, and key insights from interviewing students about second-hand trading needs.' : '分享我的访谈流程、提问方式和从学生二手交易需求访谈中获得的关键洞察。',
      readTime: language === 'en' ? '6 min read' : '6分钟阅读',
      color: 'bg-brand-blue'
    },
    {
      tag: language === 'en' ? 'Competitive Analysis' : '竞品分析',
      date: language === 'en' ? 'Jan 10, 2025' : '2025年1月10日',
      title: language === 'en' ? 'Notion vs Obsidian vs Logseq: Which note-taking app is right for you?' : 'Notion vs Obsidian vs Logseq：哪款笔记应用适合你？',
      desc: language === 'en' ? 'A detailed comparison of features, use cases, and user experience across three popular note-taking tools.' : '对三款流行笔记工具的功能、使用场景和用户体验进行详细对比。',
      readTime: language === 'en' ? '10 min read' : '10分钟阅读',
      color: 'bg-brand-pink'
    },
    {
      tag: language === 'en' ? 'Learning Notes' : '学习笔记',
      date: language === 'en' ? 'Feb 5, 2025' : '2025年2月5日',
      title: language === 'en' ? 'What I learned from reading "Inspired" by Marty Cagan' : '从《启示录》中学到的产品管理知识',
      desc: language === 'en' ? 'Key takeaways about product discovery, user research, and building products that customers love.' : '关于产品发现、用户研究和打造用户喜爱的产品的关键要点。',
      readTime: language === 'en' ? '5 min read' : '5分钟阅读',
      color: 'bg-brand-yellow'
    },
  ];

  return (
    <div className="py-12 space-y-12">
      <SectionTitle doodle={<DoodleStar className="fill-brand-blue" />}>
        {language === 'en' ? 'My Product Thinking' : '我的产品思考'}
      </SectionTitle>

      {/* Introduction */}
      <div className="neo-card bg-brand-blue p-6 text-center">
        <p className="text-lg font-bold">
          {language === 'en'
            ? 'I write about products I analyze, methods I learn, and insights from my journey into product management.'
            : '我记录分析的产品、学习的方法论，以及进入产品管理领域的思考与感悟。'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            className="neo-card group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`${article.color} neo-border px-3 py-1 text-sm font-black uppercase`}>{article.tag}</span>
              <span className="font-bold text-sm">{article.date}</span>
            </div>
            <h3 className="text-2xl font-black mb-4 group-hover:underline decoration-brand-blue decoration-4">
              {article.title}
            </h3>
            <p className="font-medium text-gray-600 mb-6">
              {article.desc}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-500">{article.readTime}</span>
              <div className="flex items-center gap-2 font-black uppercase text-sm">
                {translations[language].readMore} <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="font-bold text-gray-600 mb-4">
          {language === 'en' ? 'Want to read more of my articles?' : '想阅读更多文章？'}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="neo-button bg-brand-pink px-6 py-3"
        >
          {language === 'en' ? 'View All Articles (Coming Soon)' : '查看全部文章（即将推出）'}
        </motion.button>
      </div>
    </div>
  );
};

const Projects = ({ language }: { language: 'en' | 'zh' }) => {
  const projects = [
    {
      id: 'user-growth',
      title: language === 'en' ? 'Education App User Growth System' : '教育APP用户增长系统',
      type: language === 'en' ? 'Internship' : '实习项目',
      company: language === 'en' ? 'Dingxiao Education' : '鼎校教育',
      tags: language === 'en' ? 'User Growth • Viral Design • Data Analysis' : '用户增长 • 裂变设计 • 数据分析',
      color: 'bg-brand-yellow',
      icon: '🚀',
      desc: language === 'en'
        ? 'Led C-end user growth module optimization, designed viral growth system with tiered points mechanism.'
        : '负责C端APP用户增长模块优化，设计裂变增长体系，实现阶梯式积分奖励机制。',
      achievements: language === 'en'
        ? ['Sharing rate increased by 45%', 'New users grew by 38%', 'Points redemption rate: 32%']
        : ['分享率提升45%', '新增用户增长38%', '积分兑换率达32%'],
      skills: language === 'en' ? ['Axure', 'PRD', 'Data Analysis', 'Growth'] : ['Axure', '需求文档', '数据分析', '增长'],
      date: language === 'en' ? 'Jun - Sep 2025' : '2025年6月-9月'
    },
    {
      id: 'smart-community',
      title: language === 'en' ? 'Smart Community Payment System' : '智慧社区物业缴费系统',
      type: language === 'en' ? 'Product Manager' : '产品经理',
      company: language === 'en' ? 'Smart Community' : '智慧社区',
      tags: language === 'en' ? 'B-End Design • Digital Transformation' : 'B端设计 • 数字化转型',
      color: 'bg-brand-blue',
      icon: '🏘️',
      desc: language === 'en'
        ? 'Designed property management backend + resident mini-program, achieved full digitalization.'
        : '设计物业管理后台+业主端小程序，实现物业缴费全流程数字化。',
      achievements: language === 'en'
        ? ['Reduced costs by 60%+', '100% on-time delivery', 'Full digitization']
        : ['降低成本60%+', '100%按时交付', '完整数字化'],
      skills: language === 'en' ? ['Figma', 'B-End', 'PRD'] : ['Figma', 'B端', '需求文档'],
      date: language === 'en' ? 'Sep - Dec 2024' : '2024年9月-12月'
    },
    {
      id: 'university-system',
      title: language === 'en' ? 'University Management System' : '高校学工管理系统',
      type: language === 'en' ? 'Product Assistant' : '产品助理',
      company: language === 'en' ? 'University' : '高校',
      tags: language === 'en' ? 'System Optimization • Workflow Design' : '系统优化 • 流程设计',
      color: 'bg-brand-pink',
      icon: '🎓',
      desc: language === 'en'
        ? 'Optimized student information system, restructured approval workflows.'
        : '优化学生信息系统，重构审批流程，提升学工管理效率。',
      achievements: language === 'en'
        ? ['Entry efficiency +50%', 'Approval time -60%', 'Significant gains']
        : ['录入效率提升50%', '审批耗时缩短60%', '大幅提升效率'],
      skills: language === 'en' ? ['Axure', 'Research', 'System'] : ['Axure', '用户研究', '系统设计'],
      date: language === 'en' ? 'Mar - Jun 2024' : '2024年3月-6月'
    },
    {
      id: 'portfolio',
      title: language === 'en' ? 'Product Portfolio Website' : '产品作品集网站',
      type: language === 'en' ? 'Personal' : '个人项目',
      company: language === 'en' ? 'Self-developed' : '自主开发',
      tags: language === 'en' ? 'Web Dev • React' : '网页开发 • React',
      color: 'bg-white',
      icon: '💻',
      desc: language === 'en'
        ? 'Built this portfolio from scratch to showcase my product work.'
        : '使用React从零搭建，展示产品工作成果。',
      achievements: language === 'en'
        ? ['Responsive', 'Bilingual', 'Interactive']
        : ['响应式', '中英文', '交互动画'],
      skills: language === 'en' ? ['React', 'TypeScript', 'Tailwind'] : ['React', 'TypeScript', 'Tailwind'],
      date: language === 'en' ? 'Mar 2025' : '2025年3月'
    },
  ];

  return (
    <div className="py-12 space-y-12">
      <SectionTitle doodle={<DoodleStar className="fill-brand-yellow" />}>
        {translations[language].myPortfolio}
      </SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div className="neo-card bg-brand-yellow p-6 text-center" whileHover={{ scale: 1.05 }}>
          <p className="text-4xl font-black text-brand-pink">45%</p>
          <p className="font-bold text-sm mt-2">{language === 'en' ? 'Sharing Rate' : '分享率提升'}</p>
        </motion.div>
        <motion.div className="neo-card bg-brand-blue p-6 text-center" whileHover={{ scale: 1.05 }}>
          <p className="text-4xl font-black text-white">38%</p>
          <p className="font-bold text-sm mt-2">{language === 'en' ? 'New Users' : '新增用户'}</p>
        </motion.div>
        <motion.div className="neo-card bg-brand-pink p-6 text-center" whileHover={{ scale: 1.05 }}>
          <p className="text-4xl font-black">60%</p>
          <p className="font-bold text-sm mt-2">{language === 'en' ? 'Cost Reduction' : '成本降低'}</p>
        </motion.div>
        <motion.div className="neo-card bg-white p-6 text-center" whileHover={{ scale: 1.05 }}>
          <p className="text-4xl font-black text-brand-blue">50%</p>
          <p className="font-bold text-sm mt-2">{language === 'en' ? 'Efficiency' : '效率提升'}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to={`/project/${project.id}`} className="block">
              <div className={`neo-border neo-shadow-lg aspect-[4/3] ${project.color} flex items-center justify-center overflow-hidden relative group cursor-pointer`}>
                <div className="w-4/5 h-4/5 bg-white neo-border neo-shadow flex flex-col items-center justify-center p-6">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <div className="font-black text-xl mb-2 text-center">{project.title}</div>
                  <div className="w-12 h-1 bg-black mx-auto" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/10 flex items-center justify-center"
                >
                  <button className="neo-button bg-white">{translations[language].viewProject}</button>
                </motion.div>
              </div>
            </Link>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-brand-pink neo-border px-2 py-1 text-xs font-bold">{project.type}</span>
                    <span className="bg-brand-blue neo-border px-2 py-1 text-xs font-bold text-white">{project.company}</span>
                  </div>
                  <h3 className="text-2xl font-black">{project.title}</h3>
                </div>
                <Link to={`/project/${project.id}`}>
                  <motion.div className="neo-border bg-black text-white p-2 cursor-pointer" whileHover={{ scale: 1.1, rotate: 45 }}>
                    <ArrowUpRight />
                  </motion.div>
                </Link>
              </div>

              <p className="font-medium text-gray-600">{project.desc}</p>

              <div className="bg-brand-yellow/20 neo-border p-3">
                <p className="font-bold text-sm mb-2">{language === 'en' ? 'Results:' : '成果：'}</p>
                <ul className="space-y-1">
                  {project.achievements.map((a, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <span className="text-brand-pink">★</span>{a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="neo-border bg-white px-2 py-1 text-sm font-bold">{skill}</span>
                ))}
              </div>

              <p className="text-sm font-bold text-gray-500">{project.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="neo-card bg-brand-blue p-8">
        <h3 className="text-2xl font-black mb-6 text-center">{language === 'en' ? 'Core Capabilities' : '核心能力'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(language === 'en' ? [
            { title: 'C-End User Growth', desc: 'Full-process capability including viral design and data analysis' },
            { title: 'B-End Product Design', desc: 'Smart community and education system experience' },
            { title: 'Data-Driven', desc: 'Data analysis and strategy optimization' },
            { title: 'Collaboration', desc: 'Cross-functional coordination and delivery' }
          ] : [
            { title: 'C端用户增长', desc: '裂变设计、数据分析等全流程能力' },
            { title: 'B端产品设计', desc: '智慧社区和教育系统经验' },
            { title: '数据驱动', desc: '数据分析与策略优化' },
            { title: '跨部门协作', desc: '跨团队协调与项目交付' }
          ]).map((cap, idx) => (
            <div key={idx} className="neo-card bg-white p-4">
              <h4 className="font-black text-lg mb-2">{cap.title}</h4>
              <p className="font-medium text-gray-600">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-50 py-6 px-4 md:px-8">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex neo-border bg-white neo-shadow overflow-hidden">
              <Link to="/" className="flex items-center gap-2 px-4 md:px-8 py-3 font-black uppercase transition-colors border-r-2 border-black hover:bg-gray-100">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden md:inline">{translations[language].home}</span>
              </Link>
              <Link to="/about" className="flex items-center gap-2 px-4 md:px-8 py-3 font-black uppercase transition-colors border-r-2 border-black hover:bg-gray-100">
                <User className="w-4 h-4" />
                <span className="hidden md:inline">{translations[language].about}</span>
              </Link>
              <Link to="/articles" className="flex items-center gap-2 px-4 md:px-8 py-3 font-black uppercase transition-colors border-r-2 border-black hover:bg-gray-100">
                <BookOpen className="w-4 h-4" />
                <span className="hidden md:inline">{translations[language].articles}</span>
              </Link>
              <Link to="/projects" className="flex items-center gap-2 px-4 md:px-8 py-3 font-black uppercase transition-colors border-r-2 border-black last:border-r-0 hover:bg-gray-100">
                <Briefcase className="w-4 h-4" />
                <span className="hidden md:inline">{translations[language].works}</span>
              </Link>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`neo-button px-4 py-2 font-black ${language === 'en' ? 'bg-brand-yellow' : 'bg-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`neo-button px-4 py-2 font-black ${language === 'zh' ? 'bg-brand-yellow' : 'bg-white'}`}
              >
                中文
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 pb-24">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/articles" element={<Articles language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/project/:id" element={<ProjectDetail language={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-black py-12 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <Star className="text-white fill-white" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">znis</span>
            </div>

            <div className="text-center font-bold">
              {translations[language].footerText}
            </div>

            <div className="flex gap-4">
              <a href="#" className="neo-button p-2"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="neo-button p-2"><Instagram className="w-5 h-5" /></a>
              <a href="mailto:ok.shine113@gmail.com" className="neo-button p-2"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </footer>

        {/* Floating Contact Button */}
        <a href="mailto:ok.shine113@gmail.com">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 neo-button bg-brand-pink p-4 rounded-full neo-shadow-lg z-50"
          >
            <Mail className="w-8 h-8" />
          </motion.button>
        </a>
      </div>
    </Router>
  );
}
