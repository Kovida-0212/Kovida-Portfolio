import { Award, GraduationCap, BriefcaseBusiness, Cpu } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const skills = [
  ["Programming", "Python, C, SQL, HTML, CSS"],
  ["Machine Learning", "ML, feature engineering, model evaluation, scikit-learn"],
  ["Deep Learning", "CNN, BiLSTM, YOLO, PyTorch"],
  ["NLP", "TF-IDF, Transformers, mBERT, XLM-RoBERTa, HateBERT"],
  ["Explainable AI", "LIME, SHAP, Integrated Gradients, Grad-CAM"],
  ["Data & Tools", "MySQL, Excel, Power BI, Jupyter, Google Colab"]
];

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">About me</span>
          <h1>Curious about intelligent systems—and serious about learning how to build them well.</h1>
          <p>
            I’m Kovida Munnangi, a B.Sc. (Hons.) Computer Science with Research graduate from
            SRM University-AP, with a focus on Artificial Intelligence and Machine Learning.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Journey" title="Education, experience and foundations." />
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"><GraduationCap size={20}/></div>
              <div>
                <span className="timeline-date">2022 — 2026</span>
                <h3>B.Sc. (Hons.) Computer Science with Research</h3>
                <p>SRM University-AP · CGPA 8.70</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><BriefcaseBusiness size={20}/></div>
              <div>
                <span className="timeline-date">May — Jul 2024</span>
                <h3>AI–ML Intern · IBM SkillsBuild Virtual Internship</h3>
                <p>Worked on employee burnout prediction using Linear Regression, preprocessing and model evaluation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><Award size={20}/></div>
              <div>
                <span className="timeline-date">Aug 2025</span>
                <h3>Oracle Cloud Infrastructure AI Foundations Associate</h3>
                <p>Credential covering foundational AI and cloud concepts with Oracle Cloud Infrastructure.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon"><Award size={20}/></div>
              <div>
                <span className="timeline-date">Jun 2025</span>
                <h3>30-Days Power BI Micro Course</h3>
                <p>Focused on practical Power BI and data-analytics skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="Capabilities" title="A practical technical toolkit." />
          <div className="skill-grid">
            {skills.map(([title, text]) => (
              <div className="skill-card" key={title}>
                <Cpu size={19}/>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionTitle eyebrow="Currently learning" title="Moving from ML projects toward production AI." />
          <p className="body-large">
            I’m currently strengthening my Generative AI fundamentals, including LLM applications,
            retrieval-augmented generation, agents and deployment. I’m approaching these areas as
            an active learning path built on my existing ML/DL foundation.
          </p>
        </div>
      </section>
    </div>
  );
}