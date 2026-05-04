import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, TrendingUp, Award, Target, Code2, Database, BrainCircuit, ChevronRight, FileText, Users, CheckCircle, Calendar, MapPin, Camera, Menu, X, Trophy, Star, Zap, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [imageUrl, setImageUrl] = useState(() => {
    const savedImage = localStorage.getItem('profileImage');
    return savedImage || 'https://i.ibb.co/DHbVHgDC/profile-pic.jpg';
  });
  const [imageError, setImageError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
          localStorage.setItem('profileImage', reader.result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => setImageError(false);
      img.onerror = () => setImageError(true);
      img.src = imageUrl;
    }
  }, [imageUrl]);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 20);
      setShowScrollTop(scrollTop > 400);
      setScrollProgress(scrollPercent);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "YBI Foundation",
      role: "Data Science & Machine Learning Intern",
      period: "November 2025 - January 2026",
      location: "Remote, India",
      type: "Internship",
      achievements: [
        "Built end-to-end ML pipelines on real-world datasets achieving 85%+ model accuracy",
        "Implemented regression and classification algorithms using Scikit-learn with comprehensive evaluation metrics",
        "Created insightful data visualizations using Matplotlib and Seaborn reducing analysis time by 40%",
        "Performed advanced data preprocessing, feature engineering, and exploratory data analysis on 10+ datasets"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      company: "Cognifyz Technologies",
      role: "Data Science Intern",
      period: "November 2025 - December 2025",
      location: "Remote, India",
      type: "Internship",
      achievements: [
        "Applied advanced ML techniques to business datasets resulting in actionable insights for stakeholders",
        "Developed predictive models with 80%+ accuracy through rigorous feature engineering and hyperparameter tuning",
        "Collaborated with cross-functional teams to deliver data-driven solutions meeting project deadlines",
        "Conducted statistical analysis and hypothesis testing to validate business assumptions"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Statistical Modeling"]
    },
    {
      company: "Future Interns",
      role: "Data Science & Analytics Intern",
      period: "November 2025 - December 2025",
      location: "Remote, India",
      type: "Internship",
      achievements: [
        "Analyzed complex datasets to extract meaningful patterns and business intelligence",
        "Developed analytical frameworks for data-driven decision making processes",
        "Recognized for exceptional professionalism and consistent high-quality deliverables",
        "Created comprehensive reports and presentations for stakeholder communication"
      ],
      technologies: ["Data Analytics", "Python", "Business Intelligence", "Reporting"]
    }
  ];

  const projects = [
    {
      title: "House Price Prediction System",
      description: "Enterprise-grade regression system that predicts real estate prices with strong model performance through feature engineering, ensemble learning, and systematic evaluation.",
      impact: "Delivered 92% prediction accuracy with a 15% RMSE reduction over baseline models.",
      category: "Predictive Modeling",
      metrics: ["92% Accuracy", "15% RMSE Reduction"],
      features: [
        "Compared multiple regression models to select the best-performing approach.",
        "Applied feature engineering and preprocessing to improve prediction quality.",
        "Used ensemble methods and evaluation metrics to validate business-ready results."
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      github: "https://github.com/Harish-Uta17/House-price-prediction"
    },
    {
      title: "Smart Sales Analytics Platform",
      description: "Full-stack analytics application that turns sales data into real-time KPI dashboards and actionable customer insights using SQL and Streamlit.",
      impact: "Enabled faster business decisions with automated KPI tracking and customer segmentation.",
      category: "Data Analytics",
      metrics: ["Real-time Dashboards", "5+ KPIs"],
      features: [
        "Built interactive dashboards for sales monitoring and business reporting.",
        "Applied K-Means clustering to surface customer segments and buying patterns.",
        "Connected PostgreSQL-backed data with a responsive Streamlit front end."
      ],
      
      technologies: ["Python", "PostgreSQL", "Streamlit", "SQL"],
      github: "https://github.com/Harish-Uta17/Smart-Sales-Analytics"
    },
    {
      title: "AI Social Media Automation Agent",
      description: "Intelligent automation system that uses Gemini AI and n8n to generate and publish professional LinkedIn content with minimal manual effort.",
      impact: "Reduced manual posting time by 80% through an AI-assisted workflow.",
      category: "AI Automation",
      metrics: ["80% Time Saved", "Automated Workflow"],
      features: [
        "Generated social content with AI prompts and contextual input.",
        "Orchestrated end-to-end publishing through an automated workflow.",
        "Improved consistency and speed for professional content delivery."
      ],
      technologies: ["AI Agents", "Google Gemini AI", "n8n"],
      github: "https://github.com/Harish-Uta17/AI-Social-Automation-Agent"
    },
    {
      title: "AI News Summarization Agent",
      description: "Automated news aggregation and summarization system that compiles relevant updates and delivers concise AI-generated newsletters.",
      impact: "Automated daily content delivery for faster and more efficient information consumption.",
      category: "AI & NLP",
      metrics: ["Daily Automation", "AI Summarization"],
      features: [
        "Collected news from RSS feeds and condensed it using generative AI.",
        "Delivered polished summaries through Gmail for daily consumption.",
        "Reduced reading time while preserving the key takeaways."
      ],
      technologies: ["NLP", "Google Gemini AI", "RSS Feeds"],
      github: "https://github.com/Harish-Uta17/AI-News-Summarization-Agent"
    },
    {
      title: "ElectroHub Sales Analytics",
      description: "Power BI dashboard that transforms retail sales data into stakeholder-ready insights across product, promotion, and city-level performance.",
      impact: "Modeled 3,510 transactions into an interactive BI solution for faster sales and promotion analysis.",
      category: "Power BI",
      metrics: ["3,510 Transactions", "8 Product Lines"],
      features: [
        "Built a clean star schema with one fact table and three dimension tables.",
        "Created DAX-driven KPIs, top/bottom product analysis, and period comparison views.",
        "Designed drill-through dashboards with slicers, maps, and conditional formatting."
      ],
      technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
      github: "https://github.com/Harish-Uta17/ElectroHub-PowerBI"
    },
    {
      title: "Student Score Predictor",
      description: "Machine learning regression app that predicts a student's mathematics score from profile and preparation data through a polished Streamlit experience.",
      impact: "Packaged a recruiter-friendly ML workflow with reusable preprocessing, model comparison, and saved inference artifacts.",
      category: "Machine Learning",
      metrics: ["Streamlit UI", "Regression Pipeline"],
      features: [
        "Automated preprocessing for numeric and categorical student inputs.",
        "Compared multiple regressors with cross-validation and hyperparameter tuning.",
        "Exposed the trained model through a modern Streamlit dashboard and Flask app."
      ],
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
      github: "https://github.com/Harish-Uta17/Student-Exam-Performance-Predictor"
    }
  ];

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 75 }
    ],
    "Data Science & ML": [
      { name: "Machine Learning", level: 85 },
      { name: "Scikit-learn", level: 88 },
      { name: "Deep Learning", level: 70 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Data Analysis", level: 90 }
    ],
    "Tools & Frameworks": [
      { name: "Pandas & NumPy", level: 90 },
      { name: "Streamlit", level: 85 },
      { name: "TensorFlow/Keras", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "Flask", level: 78 }
    ],
    "Analytics & BI": [
      { name: "Power BI", level: 88 },
      { name: "Data Visualization", level: 92 },
      { name: "Dashboard Design", level: 86 },
      { name: "Power Query", level: 84 }
    ],
    "Specializations": [
      { name: "AI Agents & Automation", level: 85 },
      { name: "Prompt Engineering", level: 88 },
      { name: "Business Intelligence", level: 87 },
      { name: "Feature Engineering", level: 82 }
    ]
  };

  const achievements = [
    {
      icon: Trophy,
      title: "5 Technical Internships",
      description: "Data Science & ML expertise across industry leaders",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "15+ Projects",
      description: "End-to-end ML and analytics solutions delivered",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "92% Accuracy",
      description: "Cutting-edge predictive model performance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "4 Certifications",
      description: "Professional credentials in data science stack",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-blue-500/20' : 'bg-slate-900/80 backdrop-blur-sm'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                UHK.
              </div>
              
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-medium transition-colors relative pb-1 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
                    {item}
                    {activeSection === item.toLowerCase() && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>}
                  </button>
                ))}
              </div>

              <button onClick={() => scrollToSection('contact')} className="hidden md:block px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                Get In Touch
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-blue-500/20">
              <div className="px-6 py-4 space-y-3">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        <section id="home" className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div className="bg-linear-to-br from-slate-800/90 via-blue-900/50 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
                  <div className="group relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-blue-400/50 shadow-xl">
                    {imageUrl && !imageError ? (
                      <img src={imageUrl} alt="Profile" className="w-full h-full object-cover" onError={() => setImageError(true)} />
                    ) : (
                      <div className="text-6xl font-bold text-white">UH</div>
                    )}
                    <div onClick={triggerFileInput} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <Camera className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />

                  <div className="flex flex-col items-center mb-6">
                    <button onClick={triggerFileInput} className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                      <Camera size={14} className="mr-1.5" />
                      Change Photo
                    </button>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-white text-center mb-2">Uta Harish Kumar</h1>
                  <p className="text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text font-medium text-center mb-6">Data Scientist | AI/ML Engineer</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin size={16} className="mr-2 text-blue-400" />
                      Vadodara, Gujarat, India
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Mail size={16} className="mr-2 text-blue-400" />
                      utaharish96@gmail.com
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar size={16} className="mr-2 text-blue-400" />
                      Available (May 2027)
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://www.linkedin.com/in/uta-harish-kumar-83b685300" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/80 rounded-lg hover:bg-blue-600 transition-all duration-300 border border-blue-500/30 shadow-lg">
                      <Linkedin size={20} className="text-blue-400" />
                    </a>
                    <a href="https://github.com/Harish-Uta17" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/80 rounded-lg hover:bg-purple-600 transition-all duration-300 border border-purple-500/30 shadow-lg">
                      <Github size={20} className="text-purple-400" />
                    </a>
                    {/* <a href="mailto:utaharish96@gmail.com" className="p-2.5 bg-slate-800/80 rounded-lg hover:bg-indigo-600 transition-all duration-300 border border-indigo-500/30 shadow-lg">
                      <Mail size={20} className="text-gray-200" />
                    </a> */}
                    <a
                         href="https://mail.google.com/mail/?view=cm&fs=1&to=utaharish96@gmail.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2.5 bg-slate-800/80 rounded-lg hover:bg-indigo-600 transition-all duration-300 border border-indigo-500/30 shadow-lg"
                    >
                          <Mail size={20} className="text-gray-200" />
                    </a>


                  </div>

                  <button className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg">
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </button>
                </div>

                <div className="mt-6 bg-linear-to-br from-slate-800/90 via-purple-900/30 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 shadow-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Projects', value: '15+' },
                      { label: 'Internships', value: '5' },
                      { label: 'Technologies', value: '20+' },
                      { label: 'Certifications', value: '4' }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">{stat.label}</span>
                        <span className="text-lg font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="about" className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Science Professional | AI & Automation Engineer</h2>
                  <p className="text-xl text-gray-300 mb-6">B.Tech in Artificial Intelligence | Data Analytics • Data Science • Generative AI • Agents & Automation</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8"></div>
                </div>

                <div className="bg-linear-to-br from-slate-800/90 via-indigo-900/40 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 shadow-2xl mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Target className="mr-3 text-blue-400" size={24} />
                    Professional Summary
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Experienced data professional specializing in data analytics, data science, generative AI, and intelligent automation systems. Actively learning and applying advanced techniques in machine learning, deep learning, prompt engineering, and AI agent development. Currently pursuing B.Tech in Artificial Intelligence at Parul Institute of Engineering and Technology with strong proficiency in Python, SQL, and cutting-edge ML frameworks.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    Demonstrated excellence across 5 technical internships delivering quantifiable business impact through predictive modeling, data-driven insights, AI-powered automation, and actionable analytics solutions.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/90 via-purple-900/40 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 shadow-2xl mb-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Award className="mr-3 text-purple-400" size={24} />
                    Core Competencies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Code2, text: "Machine Learning & Deep Learning", color: "text-blue-400" },
                      { icon: Database, text: "Data Analysis & Visualization", color: "text-cyan-400" },
                      { icon: BrainCircuit, text: "AI Agents & Automation", color: "text-purple-400" },
                      { icon: TrendingUp, text: "Predictive Analytics", color: "text-green-400" },
                      { icon: FileText, text: "Statistical Analysis", color: "text-indigo-400" },
                      { icon: Users, text: "Cross-Functional Collaboration", color: "text-pink-400" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-slate-900/60 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                        <item.icon className={`${item.color} mr-3 flex-shrink-0`} size={20} />
                        <span className="text-sm font-medium text-gray-200">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-linear-to-br from-slate-800/90 via-blue-900/40 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <Award className="mr-3 text-blue-400" size={24} />
                    Education
                  </h3>
                  <div className="border-l-4 border-blue-500 pl-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Bachelor of Technology</h4>
                      <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold mt-1">Artificial Intelligence</p>
                    </div>
                    <div>
                      <p className="text-blue-300 font-medium">Parul Institute of Engineering and Technology</p>
                      <p className="text-gray-400 text-sm mt-1">July 2023 - May 2027 (Expected)</p>
                    </div>
                    <div>
                      <p className="text-gray-300 leading-relaxed text-sm">Specialization in Machine Learning, Deep Learning, DSA, and AI Systems Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Professional Experience</h2>
              <p className="text-xl text-gray-300">Hands-on experience delivering data-driven solutions</p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-linear-to-br from-slate-800/90 via-blue-900/30 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-xl bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center"><Calendar size={16} className="mr-1 text-blue-400" />{exp.period}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-1 text-purple-400" />{exp.location}</span>
                        <span className="px-3 py-1 bg-linear-to-r from-blue-600/30 to-purple-600/30 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-200">
                          <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-900/60 backdrop-blur-sm text-gray-200 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-blue-500/50 transition-colors">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300">Real-world applications across machine learning, business intelligence, and automation</p>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden bg-linear-to-br from-slate-800/90 via-purple-900/30 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="px-3 py-1 bg-linear-to-r from-purple-600/30 to-pink-600/30 text-purple-300 rounded-full text-xs font-semibold uppercase tracking-wide border border-purple-500/30">{project.category}</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors text-sm font-medium">
                      <ExternalLink size={18} />
                      GitHub Repo
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-200 mb-5 leading-relaxed">{project.description}</p>

                  <div className="mb-5 p-4 bg-linear-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/30 rounded-lg">
                    <p className="text-sm font-semibold text-green-300 mb-1">Business Impact</p>
                    <p className="text-sm text-green-200">{project.impact}</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Key Highlights</p>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-200">
                          <CheckCircle size={16} className="text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <span key={i} className="px-3 py-1 bg-linear-to-r from-indigo-600/30 to-blue-600/30 text-indigo-300 rounded-lg text-xs font-medium border border-indigo-500/30">{metric}</span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-slate-900/60 text-gray-300 rounded font-medium border border-slate-700/50">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="https://github.com/Harish-Uta17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                View All Projects on GitHub
                <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">Technical Skills</h2>
              <p className="text-xl text-gray-300">Python, machine learning, Power BI, and dashboarding for end-to-end data work</p>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="bg-linear-to-br from-slate-800/90 via-blue-900/30 to-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className="text-sm font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">Key Achievements</h2>
              <p className="text-xl text-gray-300">Milestones that define my journey</p>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-linear-to-br from-slate-800/90 via-slate-900/50 to-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900/30 to-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">Let's Connect</h2>
              <p className="text-xl text-gray-200">Open to full-time opportunities starting May 2027</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=utaharish96@gmail.com" target="_blank" rel="noopener noreferrer" className="p-6 bg-linear-to-br from-slate-800/90 via-blue-900/40 to-slate-800/90 backdrop-blur-sm rounded-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl text-center group">
                <Mail size={32} className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-sm text-gray-300 break-all">utaharish96@gmail.com</p>
              </a>

              <a href="https://www.linkedin.com/in/uta-harish-kumar-83b685300/" target="_blank" rel="noopener noreferrer" className="p-6 bg-linear-to-br from-slate-800/90 via-purple-900/40 to-slate-800/90 backdrop-blur-sm rounded-xl border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl text-center group">
                <Linkedin size={32} className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-300">Connect with me</p>
              </a>

              <a href="https://github.com/Harish-Uta17" target="_blank" rel="noopener noreferrer" className="p-6 bg-linear-to-br from-slate-800/90 via-pink-900/40 to-slate-800/90 backdrop-blur-sm rounded-xl border-2 border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl text-center group">
                <Github size={32} className="mx-auto mb-3 text-pink-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">GitHub</h3>
                <p className="text-sm text-gray-300">View my code</p>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900/95 backdrop-blur-md text-white py-12 px-6 border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">© 2026 Uta Harish Kumar. Data-driven solutions. AI-powered innovation. Built with precision.</p>
          </div>
        </footer>
      </div>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-40">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
                