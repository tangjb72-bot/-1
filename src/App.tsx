import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, Compass, Calendar, RefreshCw, Layers, ShieldAlert, BadgeCheck, FileText, Send, HelpCircle, 
  AlertOctagon, Check, ArrowRight, Notebook, Gift, Sparkles, BookOpen, User, Phone, Briefcase, 
  Settings, ChevronRight, PenTool, Battery, Clock, Pocket, Shield, Menu, X
} from 'lucide-react';
import TechComparison from './components/TechComparison';
import Customizer from './components/Customizer';
import SpecFaq from './components/SpecFaq';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'custom' | 'specs'>('overview');

  // Interactive specifications state
  const [specSpecSelection, setSpecSpecSelection] = useState({
    color: '极夜曜黑',
    innerType: '5mm 高精点阵纸',
    giftpack: '奢贵品牌硬质礼盒'
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* 🌟 Pre-header Elegant Micro-alert */}
      <div className="bg-gradient-to-r from-zinc-900 via-amber-950/20 to-zinc-900 border-b border-zinc-800 text-[11px] font-mono py-2 px-6 flex items-center justify-between text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>北京鼎固恒芯科技有限公司 · 全固态电芯安全革命</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>工信部安全评测标杆</span>
          <span>100%航空无障碍安全登机</span>
        </div>
      </div>

      {/* 🚀 High-fidelity Brand Header Navigation (Apple Aesthetic) */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with clean typography */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-extrabold text-sm shadow-md group-hover:rotate-6 transition-transform">
              DG
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-amber-500 tracking-wider text-sm md:text-base">鼎固恒芯</span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest leading-none">DG ENERGY SOLUTIONS</span>
            </div>
          </a>

          {/* Nav Destinations */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-zinc-400 hover:text-amber-500 text-xs uppercase tracking-widest font-semibold transition-colors">核心产品</a>
            <a href="#features" className="text-zinc-400 hover:text-amber-500 text-xs uppercase tracking-widest font-semibold transition-colors">四大特性</a>
            <a href="#tech-comparison" className="text-zinc-400 hover:text-amber-500 text-xs uppercase tracking-widest font-semibold transition-colors">固态技术</a>
            <a href="#customizer" className="text-zinc-400 hover:text-amber-500 text-xs uppercase tracking-widest font-semibold transition-colors">高定配比</a>
            <a href="#spec-faq" className="text-zinc-400 hover:text-amber-500 text-xs uppercase tracking-widest font-semibold transition-colors">精细规格</a>
          </nav>

          {/* CTA Group */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#customizer" 
              className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-black font-sans font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-1 transition-all"
            >
              试样咨询 <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile drawer rendering */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900 px-6 py-6 space-y-4 absolute w-full left-0 z-40 shadow-2xl"
          >
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#hero" 
              className="block text-zinc-300 hover:text-amber-500 text-xs uppercase tracking-wider font-semibold"
            >
              核心产品
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#features" 
              className="block text-zinc-300 hover:text-amber-500 text-xs uppercase tracking-wider font-semibold"
            >
              四大特性
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#tech-comparison" 
              className="block text-zinc-300 hover:text-amber-500 text-xs uppercase tracking-wider font-semibold"
            >
              固态技术
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#customizer" 
              className="block text-zinc-300 hover:text-amber-500 text-xs uppercase tracking-wider font-semibold"
            >
              高定配比
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#spec-faq" 
              className="block text-zinc-300 hover:text-amber-500 text-xs uppercase tracking-wider font-semibold"
            >
              精细规格
            </a>
            <a 
              onClick={() => setMobileMenuOpen(false)} 
              href="#customizer" 
              className="block bg-amber-500 text-black text-center font-bold text-xs py-3 rounded-xl"
            >
              开始深度定制
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💎 1. Premium Apple style Hero Section */}
      <section id="hero" className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center">
        
        {/* Soft elegant glowing background orb behind cover */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-12 w-64 md:w-96 h-64 md:h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 z-10">
          
          <div className="flex justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-500 border border-amber-500/30 px-3.5 py-1 rounded-full bg-amber-500/5 font-semibold">
              北京鼎固恒芯科技荣誉巨献 · 硬核突破
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.1]">
            多功能充电活页笔记本
            <span className="block mt-2 font-sans font-normal text-3xl sm:text-5xl bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              商务办公 · 随行无忧
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-lg leading-relaxed font-sans">
            一份藏着硬核科技的实用好礼。当精细的超纤手缝PU皮革，携手安全防爆的国家级
            <strong className="text-amber-400"> 22.5W 全固态聚合物软包安全充电系统</strong>
            。将高效与尊耀品格融入纯熟的高能办公体验。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#customizer" 
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 active:scale-95 text-black font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-950/20"
            >
              配置企业专属礼盒 <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#tech-comparison" 
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all border border-zinc-800"
            >
              探秘全固态黑科技
            </a>
          </div>

          {/* Interactive Hero visual notebook showcasing elite color presets with live simulated debossed preview */}
          <div className="pt-16 max-w-4xl mx-auto relative group">
            
            {/* Ambient Shadow */}
            <div className="absolute -bottom-10 inset-x-12 h-14 bg-black/80 blur-2xl rounded-full"></div>

            <div className="bg-zinc-900/60 border border-zinc-800/80 p-6 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-12 text-left">
              
              {/* Cover mock representation */}
              <div className="relative shrink-0 w-52 md:w-60 h-72 md:h-[280px] bg-zinc-950 rounded-[1.2rem] shadow-2xl border border-zinc-800/80 overflow-hidden flex flex-col justify-between p-6">
                
                {/* Spine shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/5"></div>

                {/* Cover strap steel */}
                <div className="absolute right-0 top-[45%] translate-y-[-50%] w-10 h-10 bg-zinc-800 border-l border-white/10 rounded-l-md flex items-center justify-center shadow-inner">
                  <div className="w-1 h-4 bg-zinc-400 rounded-full"></div>
                </div>

                <div className="flex justify-between items-start pl-2">
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">Solid-State Notebook</span>
                  <span className="font-mono text-[8px] text-emerald-500 bg-emerald-950 px-1 py-0.5 rounded border border-emerald-900/40">3C认证</span>
                </div>

                {/* Simulated Debossed stamping */}
                <div className="my-auto pl-2">
                  <div className="font-medium text-amber-500/80 tracking-widest text-xs md:text-sm leading-snug font-sans">
                    鼎固恒芯 · 科技赋能定制
                  </div>
                  <div className="text-[8px] text-zinc-650 font-mono mt-0.5">— 实用与科技的商务交织 —</div>
                </div>

                <div className="flex justify-between items-end pl-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                  </div>
                  <span className="font-mono text-[7px] text-zinc-650 uppercase">22.5W Max Type-C</span>
                </div>

              </div>

              {/* Text Highlights */}
              <div className="space-y-6 flex-1">
                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full text-[10px] font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> 尊耀伴手礼 · 快速交付打样
                </div>

                <h3 className="text-xl md:text-3xl font-sans font-bold text-zinc-100">
                  一册兼顾多能。从移动电源到极简活页随存
                </h3>
                
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  北京鼎固恒芯专为高端商务、政企公开会以及出差行旅提供坚实的电力后盾及沉浸的灵感速记。极安固态电池大幅度降低空运自燃风险，22.5W大电流让办公不缺电。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950/50 border border-zinc-850 rounded-2xl">
                    <div className="text-xl md:text-2xl font-sans font-extrabold text-amber-500">22.5W</div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase mt-1">旗舰级大电流双向快充 Output</div>
                  </div>
                  <div className="p-4 bg-zinc-950/50 border border-zinc-850 rounded-2xl">
                    <div className="text-xl md:text-2xl font-sans font-extrabold text-emerald-400">0% 风险</div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase mt-1"> 刺针重击无缝钢针不自燃</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🔮 2. Four Masterful Features Section (Grid Highlight) */}
      <section id="features" className="py-24 bg-zinc-950/40 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Title Grid */}
          <div className="max-w-3xl mb-16 text-left">
            <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">Product Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-100">
              重塑多功能伴手礼品质上限
            </h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              为您剖析鼎固恒芯之所以能成就高能商务的四大硬核亮点。抛弃一切繁琐与不安全，将科技质感和尊崇体验带入日常随记。
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl space-y-4 hover:border-zinc-700 transition-all shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-zinc-100">极安固态电池加持</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  行业领先的全固态聚合物电介质结构！即使遭受尖锐螺栓钢针穿刺也绝无自燃起火、更无冒烟高温危险。荣获中国3C高标航空运输安全双认证。
                </p>
              </div>
              <span className="text-[10px] text-zinc-650 font-mono tracking-widest uppercase mt-4 block">工信部权威检测通过</span>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl space-y-4 hover:border-zinc-700 transition-all shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Battery className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-zinc-100">22.5W旗舰高能快充</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  告别传统充电宝低功率慢充。支持最高 22.5W 双向快充放。自带隐藏式 Type-C 直出大电流编织快充线，并配赠 Lightning 主流适配头，兼容各家设备。
                </p>
              </div>
              <span className="text-[10px] text-zinc-650 font-mono tracking-widest uppercase mt-4 block">1.5小时满电复苏</span>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl space-y-4 hover:border-zinc-700 transition-all shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-zinc-100">多功能高品质活页本</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  选用100克加厚无酸高阶精细艺术纸，顺滑不易洇干。德制6孔不锈钢易拆夹。外观为进口超纤防水防静电PU皮革包覆，抗磨质感，自如翻页。
                </p>
              </div>
              <span className="text-[10px] text-zinc-650 font-mono tracking-widest uppercase mt-4 block">防污溅咖啡自整备</span>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-900/30 border border-zinc-850 p-6 rounded-3xl space-y-4 hover:border-zinc-700 transition-all shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Gift className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-zinc-100">企业级多方案高定</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  专为企业年会采购、公开会伴手礼、校友大聚会及高档公关策划，提供精巧的企业LOGO钢印铜模压纹、特种雾金热烫、特种黑硬盒等包装组合定制。
                </p>
              </div>
              <span className="text-[10px] text-zinc-650 font-mono tracking-widest uppercase mt-4 block">起订量 50 套即送样</span>
            </div>

          </div>

          {/* Double-Split Interactive details */}
          <div className="mt-16 bg-zinc-900/40 border border-zinc-850 rounded-[2rem] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest font-bold">Aesthetic design of elite details</span>
              <h3 className="text-xl sm:text-3xl font-sans font-extrabold text-zinc-100">
                实用与科技的商务结合，让出行与学习更高效
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                每一个细节皆为商务出行或重要会议而生。本册左侧贴心收置了名片层、信用卡袋，并有加宽设计的钢制活动扣，右侧则配有专用的高弹织带笔插槽套，可完美容纳各类高档插水笔，真正一站式高能整装。
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" strokeWidth={3} /> 内嵌式收纳层，可存放名卡、登机牌及发票</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" strokeWidth={3} /> Type-C 隐藏拉环设计，不占本册日常空间</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" strokeWidth={3} /> 手工细腻缝边，确保皮革边缘不易开卷破损</li>
              </ul>
            </div>

            {/* Quick specifications mock selector */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">快速组合规格一览 Demo Specs</h4>
              
              <div className="space-y-4">
                
                {/* Spec element 1 */}
                <div className="flex justify-between items-center bg-zinc-900/50 p-3 rounded-xl border border-zinc-850">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-950 border border-white/20"></div>
                    <span className="text-xs text-zinc-300 font-sans">1. 封皮皮革观感/质地</span>
                  </div>
                  <select 
                    value={specSpecSelection.color}
                    onChange={(e) => setSpecSpecSelection({ ...specSpecSelection, color: e.target.value })}
                    className="bg-zinc-950 text-xs text-zinc-200 border border-zinc-700 rounded-lg px-2 py-1 outline-none font-sans"
                  >
                    <option>极夜曜黑</option>
                    <option>琥珀棕褐</option>
                    <option>钛金苍黛</option>
                  </select>
                </div>

                {/* Spec element 2 */}
                <div className="flex justify-between items-center bg-zinc-900/50 p-3 rounded-xl border border-zinc-850">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs text-zinc-300 font-sans">2. 高纯度加厚纸张内页</span>
                  </div>
                  <select 
                    value={specSpecSelection.innerType}
                    onChange={(e) => setSpecSpecSelection({ ...specSpecSelection, innerType: e.target.value })}
                    className="bg-zinc-950 text-xs text-zinc-200 border border-zinc-700 rounded-lg px-2 py-1 outline-none font-sans"
                  >
                    <option>5mm 高精点阵纸</option>
                    <option>日程本时间轴周记纸</option>
                    <option>纯白绘图艺术纸</option>
                  </select>
                </div>

                {/* Spec element 3 */}
                <div className="flex justify-between items-center bg-zinc-900/50 p-3 rounded-xl border border-zinc-850">
                  <div className="flex items-center gap-2">
                    <Gift className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-xs text-zinc-300 font-sans">3. 至臻配套品牌包装</span>
                  </div>
                  <select 
                    value={specSpecSelection.giftpack}
                    onChange={(e) => setSpecSpecSelection({ ...specSpecSelection, giftpack: e.target.value })}
                    className="bg-zinc-950 text-xs text-zinc-200 border border-zinc-700 rounded-lg px-2 py-1 outline-none font-sans"
                  >
                    <option>奢贵品牌硬质礼盒</option>
                    <option>极简无纺布绒线袋</option>
                  </select>
                </div>

              </div>

              <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                <p className="text-[11px] text-zinc-400 leading-normal">
                  已匹配推荐商务组合皮面：<strong className="text-white">{specSpecSelection.color}</strong>，精雅内页：<strong className="text-white">{specSpecSelection.innerType}</strong>。包装形式：<strong className="text-white">{specSpecSelection.giftpack}</strong>。
                </p>
                <a href="#customizer" className="text-xs text-amber-500 font-bold flex items-center gap-1 mt-2.5">
                  到企业高定系统细化调配 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 🔬 3. Interactive Hardcore Tech Comparison section */}
      <TechComparison />

      {/* 🎨 4. Highly Customizable Spec Configurator section */}
      <Customizer />

      {/* 📊 5. Specifications & Advanced Q&A Accordion section */}
      <SpecFaq />

      {/* 🤝 6. Footer & high-fidelity Corporate block (Apple style clean design) */}
      <footer className="bg-zinc-950 text-zinc-500 text-xs py-16 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-amber-500 text-black font-extrabold flex items-center justify-center rounded-md">DG</div>
                <span className="font-sans font-bold text-zinc-200 tracking-wider">北京鼎固恒芯</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                北京鼎固恒芯新能源科技有限公司，专注于研发高能量密度、超安全、长寿命的软包聚合物固态电池。我们深耕移动储能与高能商务礼品深度交汇，以卓越造就不凡。
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-bold">航空白色名册安全</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                本产品所配装全固态聚合介质软包电芯，由于在物理属性上消除了常温流动性游离电解液，能从本质上阻隔外部高能量冲击热失控。全系列100%符合民航登机规范，在飞机客车上可安全流畅充放。
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-bold">企业批量下单与试样</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                企业礼品、年会定制客户仅需提交基本配色和LOGO钢印文案。从方案匹配、产品打样、特种硬黑卡特种热烫印等均可为您专人高效一站配齐交付。
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-bold">高定联络极速热线</h4>
              <ul className="space-y-1 font-mono text-[11px] text-zinc-400">
                <li className="flex items-center gap-1">📞 顾问电话: 139-1100-XXXX</li>
                <li className="flex items-center gap-1">✉️ 邮箱: contact@dgsol.com</li>
                <li className="flex items-center gap-1">📍 北京海淀区高新区鼎固研发楼</li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] bg-zinc-900/60 w-full"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600">
            <div>
              &copy; 2026 北京鼎固恒芯科技有限公司. 版权所有 所有测试在专业高危高精防爆实验室进行.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-400">登机白名单验证</a>
              <a href="#" className="hover:text-zinc-400">工信部权威检验</a>
              <a href="#" className="hover:text-zinc-400">3C高标认证</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
