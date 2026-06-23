import React from 'react'
import './Projects.css'

// مكون كارت المشروع (ProjectCard)
function ProjectCard({ title, description, tags, liveUrl, githubUrl }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        {/* هنا المعاينة الحية للموقع مباشرة جوه الكارت باستخدام iframe */}
        <iframe 
          src={liveUrl} 
          title={title}
          className="project-preview-iframe"
          loading="lazy"
        />
        <div className="project-overlay">
          <div className="project-links">
            {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" title="Live Preview"><i className="fa-solid fa-eye"></i></a>}
            {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo"><i className="fa-brands fa-github"></i></a>}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className={`tag tag-${tag.toLowerCase().replace(/[\s\.]+/g, '-')}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// المكون الرئيسي لقسم المشاريع
export default function Projects() {
  
  // مصفوفة المشاريع - مفيش غير مشروعك الحقيقي المكسر الدنيا
  const projectsData = [
    {
      title: "Interactive Typing Heart Animation",
      description: "An elegant, high-performance, and fully responsive typing heart animation built from scratch using HTML5 Canvas and Vanilla JavaScript. Viral project with 42K+ views on TikTok! 🚀",
      tags: ["HTML5 Canvas", "Vanilla JS", "CSS3", "Frontend"],
      liveUrl: "https://ahmed-dev-githu.github.io/typing-heart-animation/iloveyou.html",
      githubUrl: "https://github.com/ahmed-dev-githu/typing-heart-animation"
    },
{
  title: "HEMA SOFT",
  description: "منصة ويب متطورة لإدارة وتوزيع سوفتويرات أجهزة الريسيفر وملفات القنوات، مصممة خصيصاً للفنيين وأصحاب المحلات لتسهيل الوصول للملفات المحدثة.",
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  liveUrl: "https://hemasoft.netlify.app/",
  githubUrl: "https://github.com/ahmed-dev-githu/hema-soft.git"
},
{
  title: "LAMMET RAMADAN",
  description: "منصة تواصل اجتماعي إسلامية متكاملة لشهر رمضان المبارك، تتيح نشر المنشورات، التفاعل الفوري، الشات بين الأصدقاء، بالإضافة لأدوات عبادات ذكية مثل عداد الأذكار وتتبع الأداء اليومي.",
  tags: ["HTML5", "Tailwind CSS", "Firebase", "Firestore"],
  liveUrl: "https://msahmed909090-sys.github.io/rama/", // أو لينك الديمو الخاص بالمشروع لو مختلف
  githubUrl: "https://github.com/ahmed-dev-githu/Lammet-Ramadan.git" // عدل اسم الريبو لو مسميه حاجة تانية
},
    // تقدر تضيف مشاريعك الجاية هنا بنفس التنسيق يا غالي
  ];

  return (
    <div id="projects-section">
      <div className="container">
        <span className="section-title">My Projects</span>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="view-more-container">
            <a style={{textDecoration: 'none'}} href="https://github.com/ahmed-dev-githu" target="_blank" rel="noopener noreferrer" className="button view-more-btn">
                View More on GitHub <i className="fa-brands fa-github"></i>
            </a>
            <a href="Ahmed_Taher_ATS_CV_EN.pdf" download="Ahmed_Taher_ATS_CV_EN.pdf" style={{textDecoration : "none",color:"white"}}><button id='btn' className="button">CV</button></a>

        </div>
      </div>
      <div className="lightPar4ent"></div>
      <div className="lightPar5ent"></div>
      <div className="lightPar6ent"></div>
      <div className="lightPar7ent"></div>
    </div>
  )
}
