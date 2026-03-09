import React, { useState, useEffect } from 'react';
import {
  Activity, ArrowRight, ArrowLeft, Droplets, CheckCircle,
  Clock, Info, Shield, Calendar, TestTube,
  Sparkles, ShieldCheck, Microscope, Flame, Moon, Sun
} from 'lucide-react';
import './index.css';
import { t } from './translations';
import type { Language } from './translations';

type Step = 'welcome' | 'assessment' | 'analysis' | 'recipe' | 'execution' | 'aftercare';
type AssessmentStep = 'damage' | 'type' | 'procedure' | 'concern';

interface Profile {
  damage: string;
  type: string;
  procedure: string;
  concern: string;
}

function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [assessmentStep, setAssessmentStep] = useState<AssessmentStep>('damage');
  const [profile, setProfile] = useState<Profile>({ damage: '', type: '', procedure: '', concern: '' });
  const [hairAge, setHairAge] = useState(25);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const l = t[lang];

  const handleAssessmentSelect = (id: string) => {
    setProfile(prev => ({ ...prev, [assessmentStep]: id }));

    setTimeout(() => {
      if (assessmentStep === 'damage') setAssessmentStep('type');
      else if (assessmentStep === 'type') setAssessmentStep('procedure');
      else if (assessmentStep === 'procedure') setAssessmentStep('concern');
      else if (assessmentStep === 'concern') {
        calculateAnalysis();
        setCurrentStep('analysis');
      }
    }, 300);
  };

  const calculateAnalysis = () => {
    let age = 20;

    if (profile.damage === 'damaged') age += 15;
    if (profile.damage === 'extreme') age += 35;

    if (profile.procedure === 'dye') age += 10;
    if (profile.procedure === 'brazilian') age += 15;

    if (profile.concern === 'elasticity') age += 12;
    if (profile.concern === 'breakage') age += 18;

    setHairAge(Math.min(age, 90));
    setProgress(0);
  };

  const getRecipe = () => {
    let ratio = '1:3';
    let waterType = l.recipe.waterTypes.water;
    let temp = '160℃';
    let time = l.recipe.time15;

    if (profile.damage === 'extreme') {
      ratio = profile.type === 'thin' ? '1:5' : '1:3';
      waterType = l.recipe.waterTypes.lpp;
      temp = '140℃';
    } else if (profile.damage === 'healthy' || profile.type === 'curly') {
      ratio = '1:1';
      temp = '180℃';
    }

    return { ratio, waterType, temp, time };
  };

  useEffect(() => {
    if (currentStep === 'analysis') {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        if (currentProgress >= 100) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const recipe = getRecipe();
  const currentAssessment = l.assessment[assessmentStep];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="header-logo">
            <Activity size={24} color="var(--color-accent)" />
            {l.header.title} <span>{l.header.subtitle}</span>
          </div>
          <button
            className="btn-icon"
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            style={{ padding: '0.4rem', borderRadius: '50%', background: 'var(--color-silver)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {currentStep === 'welcome' && (
          <div style={{ display: 'flex', gap: '0.4rem', border: '1px solid var(--color-silver)', background: 'var(--color-bg-muted)', padding: '0.2rem', borderRadius: 'var(--radius-full)' }}>
            <button
              className={`btn`}
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: '0.75rem',
                background: lang === 'ko' ? 'var(--color-deep-blue)' : 'transparent',
                color: lang === 'ko' ? '#fff' : 'var(--color-text-muted)',
                borderRadius: 'var(--radius-full)'
              }}
              onClick={() => setLang('ko')}
            >
              KO
            </button>
            <button
              className={`btn`}
              style={{
                padding: '0.3rem 0.6rem',
                fontSize: '0.75rem',
                background: lang === 'en' ? 'var(--color-deep-blue)' : 'transparent',
                color: lang === 'en' ? '#fff' : 'var(--color-text-muted)',
                borderRadius: 'var(--radius-full)'
              }}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        )}

        {currentStep !== 'welcome' && (
          <button className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => setCurrentStep('welcome')}>
            {l.header.restart}
          </button>
        )}
      </header>

      {/* --- WELCOME STEP --- */}
      {currentStep === 'welcome' && (
        <div className="step-container animate-fade-in" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Microscope size={64} color="var(--color-accent)" style={{ margin: '0 auto', marginBottom: '1.5rem' }} />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.1' }}>
              {l.welcome.title1}<br /><span style={{ color: 'var(--color-accent)' }}>{l.welcome.titleHighlight}</span> {l.welcome.title2}
            </h1>
            <p className="step-subtitle" style={{ fontSize: '1rem' }}>
              {l.welcome.desc}
            </p>
          </div>

          <div className="card" style={{ textAlign: 'left', marginBottom: '3rem', background: 'var(--color-bg-muted)' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--color-success)" /> {l.welcome.factTitle}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              {l.welcome.factDesc}
            </p>
          </div>

          <button
            className="btn btn-primary"
            style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
            onClick={() => { setCurrentStep('assessment'); setAssessmentStep('damage'); setProfile({ damage: '', type: '', procedure: '', concern: '' }); }}
          >
            {l.welcome.startBtn} <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* --- ASSESSMENT STEP --- */}
      {currentStep === 'assessment' && (
        <div className="step-container">
          <div style={{ display: 'flex', gap: '4px', marginBottom: '2rem' }}>
            {['damage', 'type', 'procedure', 'concern'].map((step, idx) => (
              <div
                key={step}
                style={{
                  flex: 1,
                  height: '4px',
                  backgroundColor: ['damage', 'type', 'procedure', 'concern'].indexOf(assessmentStep) >= idx ? 'var(--color-accent)' : 'var(--color-silver)',
                  borderRadius: '2px'
                }}
              />
            ))}
          </div>

          <h2 className="step-title" style={{ fontSize: lang === 'en' ? '1.5rem' : '1.75rem' }}>{currentAssessment.title}</h2>
          <p className="step-subtitle">{currentAssessment.subtitle}</p>

          <div className="options-grid">
            {currentAssessment.options.map((option: any) => (
              <div
                key={option.id}
                className={`option-card ${profile[assessmentStep] === option.id ? 'selected' : ''}`}
                onClick={() => handleAssessmentSelect(option.id)}
              >
                <span className="option-title">{option.title}</span>
                <span className="option-desc">{option.desc}</span>
              </div>
            ))}
          </div>

          <div className="nav-buttons" style={{ marginTop: 'auto' }}>
            {assessmentStep !== 'damage' && (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const steps: AssessmentStep[] = ['damage', 'type', 'procedure', 'concern'];
                  setAssessmentStep(steps[steps.indexOf(assessmentStep) - 1]);
                }}
              >
                <ArrowLeft size={18} /> {l.assessment.navPrev}
              </button>
            )}
          </div>
        </div>
      )}

      {/* --- ANALYSIS STEP --- */}
      {currentStep === 'analysis' && (
        <div className="step-container animate-fade-in" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TestTube size={48} color="var(--color-accent)" className="animate-pulse-slow" style={{ marginBottom: '1rem' }} />
          <h2 className="step-title text-center" style={{ fontSize: lang === 'en' ? '1.5rem' : '1.75rem' }}>{l.analysis.analyzing}</h2>
          <p className="step-subtitle text-center">{l.analysis.finding}</p>

          <div className="gauge-container">
            <svg className="gauge-svg" viewBox="0 0 100 100">
              <circle className="gauge-bg" cx="50" cy="50" r="45" />
              <circle
                className="gauge-progress"
                cx="50" cy="50" r="45"
                style={{ '--target-offset': 283 - (283 * progress) / 100 } as React.CSSProperties}
              />
            </svg>
            <div className="gauge-text">
              <span className="gauge-value" style={{ display: 'inline-block' }}>{Math.round(progress)}%</span>
            </div>
          </div>

          {progress === 100 && (
            <div className="animate-fade-in" style={{ width: '100%', textAlign: 'center' }}>
              <div className="card glass-panel" style={{ marginBottom: '2rem', border: '2px solid var(--color-danger)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{l.analysis.resultAgeLabel}</p>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-danger)', lineHeight: '1' }}>
                  {hairAge}<span style={{ fontSize: '1.5rem' }}>{l.analysis.resultAgeUnit}</span>
                </div>
                <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#ef4444' }}>{l.analysis.resultDesc}</p>
              </div>

              <button className="btn btn-accent" style={{ width: '100%' }} onClick={() => { setCurrentStep('recipe'); setProgress(1); }}>
                {l.analysis.btnNext} <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* --- RECIPE STEP --- */}
      {currentStep === 'recipe' && (
        <div className="step-container animate-fade-in">
          <h2 className="step-title" style={{ fontSize: lang === 'en' ? '1.5rem' : '1.75rem' }}>{l.recipe.title}</h2>
          <p className="step-subtitle">{l.recipe.subtitle}</p>

          <div className="recipe-box">
            <div className="recipe-header">
              <Droplets size={24} color="var(--color-accent)" />
              <h3 style={{ color: 'var(--color-deep-blue)', fontSize: lang === 'en' ? '1.1rem' : '1.2rem' }}>{l.recipe.ratioTitle}</h3>
            </div>

            <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-accent)' }}>
                {recipe.ratio}
              </span>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                {l.recipe.solvent}{recipe.waterType}
              </p>
            </div>

            {profile.procedure === 'brazilian' && (
              <div className="info-box info" style={{ marginBottom: '1rem' }}>
                <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{l.recipe.brazilianWarning}</span>
              </div>
            )}
          </div>

          <div className="recipe-box" style={{ background: 'var(--color-bg-muted)' }}>
            <div className="recipe-header">
              <Clock size={20} color="var(--color-text-main)" />
              <h3 style={{ fontSize: '1.1rem' }}>{l.recipe.timeTitle}</h3>
            </div>
            <div className="recipe-value-row">
              <span className="recipe-value-label">{l.recipe.heatLabel}</span>
              <span className="recipe-value highlight">{recipe.time} {l.recipe.heatVal}</span>
            </div>
            <div className="recipe-value-row">
              <span className="recipe-value-label">{l.recipe.naturalLabel}</span>
              <span className="recipe-value">{l.recipe.time10}</span>
            </div>
            <div className="recipe-value-row">
              <span className="recipe-value-label">{l.recipe.pressLabel}</span>
              <span className="recipe-value" style={{ color: 'var(--color-danger)' }}>{recipe.temp}</span>
            </div>
          </div>

          <button className="btn btn-primary mt-4" style={{ width: '100%' }} onClick={() => setCurrentStep('execution')}>
            {l.recipe.btnNext} <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* --- EXECUTION STEP --- */}
      {currentStep === 'execution' && (
        <div className="step-container animate-fade-in">
          <h2 className="step-title" style={{ fontSize: lang === 'en' ? '1.5rem' : '1.75rem' }}>{l.execution.title}</h2>
          <p className="step-subtitle">{l.execution.subtitle}</p>

          <div className="molecule-container">
            <div className="atom active" style={{ zIndex: 2 }}>Gly</div>
            <div className="bond-line"></div>
            <div className="atom active" style={{ zIndex: 2 }}>Ser</div>
            <div style={{ position: 'absolute', bottom: '10px', right: '15px', fontSize: '0.75rem', opacity: 0.8, background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '10px' }}>
              {l.execution.reaction}
            </div>
          </div>

          <div className="checklist">
            <div
              className={`checklist-item ${progress > 1 ? 'completed' : progress === 1 ? 'active' : ''}`}
              onClick={() => progress === 1 && setProgress(2)}
              style={{ cursor: progress === 1 ? 'pointer' : 'default' }}
            >
              <div className="checklist-icon">{progress > 1 ? <CheckCircle size={16} /> : null}</div>
              <div className="checklist-content">
                <h4>{l.execution.step1Title}</h4>
                <p>{l.execution.step1Desc(recipe.time)}</p>
              </div>
            </div>

            <div
              className={`checklist-item ${progress > 2 ? 'completed' : progress === 2 ? 'active' : ''}`}
              onClick={() => progress === 2 && setProgress(3)}
              style={{ cursor: progress === 2 ? 'pointer' : 'default', opacity: progress < 2 ? 0.5 : 1 }}
            >
              <div className="checklist-icon">{progress > 2 ? <CheckCircle size={16} /> : null}</div>
              <div className="checklist-content">
                <h4 style={{ color: 'var(--color-danger)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Flame size={16} /> {l.execution.step2Title}
                </h4>
                <p>{l.execution.step2Desc}</p>
                {progress === 2 && (
                  <div className="info-box warning" style={{ margin: '0.75rem 0', padding: '0.75rem', animation: 'pulse 2s infinite' }}>
                    <Shield size={16} style={{ flexShrink: 0 }} /> {l.execution.step2Warning}
                  </div>
                )}
              </div>
            </div>

            <div
              className={`checklist-item ${progress > 3 ? 'completed' : progress === 3 ? 'active' : ''}`}
              onClick={() => progress === 3 && setProgress(4)}
              style={{ cursor: progress === 3 ? 'pointer' : 'default', opacity: progress < 3 ? 0.5 : 1 }}
            >
              <div className="checklist-icon">{progress > 3 ? <CheckCircle size={16} /> : null}</div>
              <div className="checklist-content">
                <h4>{l.execution.step3Title(recipe.temp)}</h4>
                <p>{l.execution.step3Desc}</p>
              </div>
            </div>
          </div>

          <div className="nav-buttons">
            <button
              className={`btn ${progress > 3 ? 'btn-primary' : 'btn-secondary'}`}
              disabled={progress <= 3}
              onClick={() => setCurrentStep('aftercare')}
              style={{ opacity: progress > 3 ? 1 : 0.5 }}
            >
              {l.execution.btnNext} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* --- AFTERCARE STEP --- */}
      {currentStep === 'aftercare' && (
        <div className="step-container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Sparkles size={48} color="var(--color-success)" style={{ margin: '0 auto', marginBottom: '1rem' }} />
            <h2 className="step-title" style={{ fontSize: lang === 'en' ? '1.5rem' : '1.75rem' }}>{l.aftercare.title}</h2>
            <p className="step-subtitle">
              {l.aftercare.subtitle1}
              <strong style={{ color: 'var(--color-success)', fontSize: '1.2rem' }}>{l.aftercare.targetAge}</strong>
              {l.aftercare.subtitle2}
            </p>
          </div>

          <div className="card glass-panel" style={{ marginBottom: '1.5rem', background: 'var(--gradient-primary)', color: 'var(--color-white)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-white)', fontSize: lang === 'en' ? '1.1rem' : '1.2rem' }}>
              <Shield size={20} /> {l.aftercare.managerTitle}
            </h3>

            <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
              {l.aftercare.rules.map((rule, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  <strong>{rule.title}</strong>{rule.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-box">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-deep-blue)', fontSize: lang === 'en' ? '1rem' : '1.1rem' }}>
              <Calendar size={18} color="var(--color-accent)" /> {l.aftercare.calendarTitle}
            </h4>

            <div className="day-grid">
              {l.aftercare.days.map(d => (
                <div key={d} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-main)' }}>{d}</div>
              ))}
              {[...Array(28)].map((_, i) => (
                <div key={i} className={`day-cell ${i === 27 ? 'treatment' : i % 5 === 0 && i !== 0 ? 'active' : ''}`}>
                  {i + 1}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
              {l.aftercare.calendarDesc}
            </p>
          </div>

          <button className="btn btn-secondary mt-4" style={{ width: '100%' }} onClick={() => setCurrentStep('welcome')}>
            {l.aftercare.btnHome}
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
