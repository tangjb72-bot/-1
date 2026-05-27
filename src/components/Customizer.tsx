import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  NotebookColor, 
  ColorOption, 
  InnerPageType, 
  InnerPageOption, 
  PackagingType, 
  PackagingOption, 
  CustomConfig 
} from '../types';
import { Check, ShieldAlert, Sparkles, BookOpen, Gift, ClipboardCheck, PhoneCall, PenTool, CheckCircle, Flame, Server } from 'lucide-react';

const COLORS: ColorOption[] = [
  { id: 'carbon', name: '极夜曜黑 (Carbon Black)', hex: '#111827', bgClass: 'bg-gray-900', borderClass: 'border-gray-900' },
  { id: 'chestnut', name: '琥珀棕褐 (Amber Cognac)', hex: '#7c2d12', bgClass: 'bg-amber-950', borderClass: 'border-amber-900' },
  { id: 'slate', name: '钛金苍黛 (Slate Gray)', hex: '#374151', bgClass: 'bg-slate-700', borderClass: 'border-slate-600' },
  { id: 'titanium', name: '深云影灰 (Nimbus Slate)', hex: '#4b5563', bgClass: 'bg-gray-600', borderClass: 'border-gray-500' },
];

const PAGES: InnerPageOption[] = [
  { id: 'grid', name: '5mm 高精网格内页', description: '适合工程图纸、模块化流程图以及点阵灵感速记' },
  { id: 'weekly', name: '高效日程周计划内页', description: '自带精细时间轴、每日要事管理与极简月历看板' },
  { id: 'blank', name: '100g 进口极白无底纯白内页', description: '无束缚自由随性手绘、创意发散、思维导图创作' },
  { id: 'lined', name: '8mm 优雅人文横线内页', description: '适合深度访谈记录、大篇幅商业会议纪要撰写' },
];

const PACKS: PackagingOption[] = [
  { id: 'minimal', name: '极简随行无纺布信封袋', price: 0, description: '轻简环保，100%可循环毛毡无纺布结构保护' },
  { id: 'standard', name: '特种黑卡烫黑品牌奢雅礼盒', price: 15, description: '厚重硬卡包边，定制深金品牌压纹，商务伴手礼首选' },
  { id: 'luxury', name: '至臻科技真皮定制重奢礼包 (+极光随身笔)', price: 45, description: '包含高档手提袋、丝绒衬料重奢防尘包、铝合金阳极氧化气动原子笔' },
];

export default function Customizer() {
  const [config, setConfig] = useState<CustomConfig>({
    color: 'carbon',
    brandText: '北京鼎固恒芯科技有限公司',
    stampingType: 'gold',
    innerPage: 'grid',
    packaging: 'standard',
    quantity: 100,
  });

  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', company: '' });

  const activeColor = COLORS.find(c => c.id === config.color) || COLORS[0];

  const handleCustomOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getStampingLabel = (type: CustomConfig['stampingType']) => {
    switch (type) {
      case 'debossed': return '重压无色钢印 (Elegant Debossed)';
      case 'gold': return '德国库尔兹24K雾金烫印 (Lux Matte Gold)';
      case 'silver': return '星轨亮银纳米阳极烫印 (Metallic Silver)';
    }
  };

  const calculateEstimate = () => {
    const basePrice = 188; // 零售预估单价
    const pageMarkup = 0;
    const packPrice = PACKS.find(p => p.id === config.packaging)?.price || 0;
    
    // 阶梯折扣
    let discount = 1.0;
    if (config.quantity >= 1000) discount = 0.70;
    else if (config.quantity >= 500) discount = 0.75;
    else if (config.quantity >= 200) discount = 0.82;
    else if (config.quantity >= 50) discount = 0.90;

    const unitPrice = Math.round((basePrice + packPrice) * discount);
    const total = unitPrice * config.quantity;

    return {
      unitPrice,
      total: total.toLocaleString(),
      discountPercent: Math.round((1 - discount) * 100),
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="customizer" className="py-24 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">Professional Solutions</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-100">
            至臻高定 · 企业尊享定制系统
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            从硬核固态电芯配色，到精巧的手工缝线装订、特种黑卡奢华礼盒及多重内页排版。在此实时预览您专属的企业级定制艺术。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Dynamic Rendering Mockups */}
          <div className="lg:col-span-7 sticky top-28 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">Live Render Engine v2.5</span>
            </div>

            <div className="min-h-[380px] md:min-h-[460px] flex flex-col justify-between items-center relative pt-8">
              
              {/* Notebook visual wrapper with customizable status styling */}
              <div className="relative w-64 md:w-80 h-80 md:h-[380px] flex items-center justify-center">
                
                {/* Simulated shadow */}
                <div className="absolute -bottom-6 w-5/6 h-6 bg-black/60 blur-xl rounded-full"></div>

                {/* Cover representation */}
                <motion.div 
                  key={activeColor.id}
                  initial={{ scale: 0.9, y: 15, rotateY: -10, opacity: 0.8 }}
                  animate={{ scale: 1, y: 0, rotateY: 0, opacity: 1 }}
                  whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.2 } }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.7 }}
                  className="w-52 md:w-64 h-72 md:h-[320px] rounded-[1.5rem] relative shadow-2xl overflow-hidden flex flex-col justify-between p-8 border border-white/10"
                  style={{
                    backgroundColor: activeColor.hex,
                    backgroundImage: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.12) 0%, transparent 60%)',
                    boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.15), 0 25px 50px -12px rgba(0,0,0,0.8)',
                    perspective: 1000
                  }}
                >
                  {/* Embossed spine shadow effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/5"></div>
                  
                  {/* Steel lock clasp */}
                  <div className="absolute right-0 top-[45%] translate-y-[-50%] w-12 h-14 bg-gradient-to-l from-zinc-700 to-zinc-800 rounded-l-lg shadow-md border-l border-t border-b border-white/10 flex items-center pl-2">
                    <div className="w-1.5 h-6 bg-zinc-400 rounded-full shadow-inner"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/20"></div>
                  </div>

                  {/* Top: Tech details debossed faintly */}
                  <div className="flex justify-between items-start pl-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">Solid-State Power Core</span>
                      <span className="font-mono text-[8px] text-amber-500/80 tracking-widest font-bold">22.5W FAST CHARGE TYPE-C</span>
                    </div>
                    <span className="font-mono text-[9px] text-white/30 tracking-widest border border-white/20 rounded-full px-1.5 py-0.5">5000mAh</span>
                  </div>

                  {/* Center: Dynamic Brand Hot Stamping text */}
                  <div className="my-auto pl-3 flex flex-col justify-center min-h-[80px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${config.brandText}-${config.stampingType}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="text-left select-none"
                      >
                        {config.brandText ? (
                          <>
                            <div 
                              className={`font-sans text-sm md:text-base font-bold tracking-widest leading-relaxed transition-all duration-300`}
                              style={{
                                color: config.stampingType === 'gold' ? '#f59e0b font-semibold' : config.stampingType === 'silver' ? '#e2e8f0' : 'rgba(0,0,0,0.45)',
                                textShadow: config.stampingType === 'gold' 
                                  ? '0.5px 0.5px 0px rgba(0,0,0,0.4), 0 0 1px rgba(245,158,11,0.5)' 
                                  : config.stampingType === 'silver'
                                  ? '0.5px 0.5px 0px rgba(0,0,0,0.4), 0 0 1px rgba(255,255,255,0.4)' 
                                  : 'inset 1px 1px 1px rgba(0,0,0,0.5)',
                                filter: config.stampingType === 'debossed' ? 'drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.06))' : 'none'
                              }}
                            >
                              {config.brandText}
                            </div>
                            <div 
                              className="text-[9px] tracking-widest font-mono mt-1 pr-6"
                              style={{
                                color: config.stampingType === 'gold' ? '#d97706' : config.stampingType === 'silver' ? '#94a3b8' : 'rgba(0,0,0,0.35)'
                              }}
                            >
                              — 全固态电池技术的领先者 —
                            </div>
                          </>
                        ) : (
                          <div className="text-white/20 italic font-sans text-xs">高端尊享 · 专属烫印区域</div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bottom details of the leather cover */}
                  <div className="flex justify-between items-end pl-3">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full bg-zinc-900/30 border border-white/10 flex items-center justify-center">
                        <span className="text-[7px] text-white/50 font-mono">CC</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-zinc-900/30 border border-white/10 flex items-center justify-center">
                        <span className="text-[7px] text-white/50 font-mono">3C</span>
                      </div>
                    </div>
                    <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Designed by DG</span>
                  </div>

                </motion.div>

              </div>

              {/* Dynamic bottom detail summary card */}
              <div className="w-full mt-6 bg-zinc-950/50 backdrop-blur border border-zinc-800 rounded-2xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">外观选色</div>
                  <div className="text-[13px] font-sans font-medium text-zinc-200 mt-0.5">{activeColor.name.split(' ')[0]}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">定制工艺</div>
                  <div className="text-[13px] font-sans font-medium text-zinc-200 mt-0.5">
                    {config.stampingType === 'gold' ? '24K雾金烫' : config.stampingType === 'silver' ? '星轨亮银' : '无色凹重阳钢印'}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">专属内页</div>
                  <div className="text-[13px] font-sans font-medium text-zinc-200 mt-0.5">
                    {PAGES.find(p => p.id === config.innerPage)?.name.split(' ')[0]}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">礼盒包装</div>
                  <div className="text-[13px] font-sans font-medium text-amber-500 mt-0.5">
                    {PACKS.find(p => p.id === config.packaging)?.name.split(' ')[0]}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Customizer Selector Config Panel */}
          <div className="lg:col-span-5 space-y-8 bg-zinc-950/70 p-2">
            
            {/* Color Selector */}
            <div className="border-b border-zinc-900 pb-6">
              <label className="text-sm font-sans font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                1. 甄选封面皮革色彩 Choice of Leather
              </label>
              <div className="grid grid-cols-4 gap-3">
                {COLORS.map((color) => (
                  <motion.button
                    key={color.id}
                    onClick={() => setConfig({ ...config, color: color.id })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-900 border text-center transition-all cursor-pointer ${
                      config.color === color.id 
                        ? 'border-amber-500 bg-amber-500/5' 
                        : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full ${color.bgClass} border border-white/20 shadow-md mb-1.5 group-hover:scale-110 transition-transform`}></span>
                    <span className="text-[10px] text-zinc-400 font-medium block truncate w-full">{color.name.split(' ')[0]}</span>
                    {config.color === color.id && (
                      <span className="absolute top-1.5 right-1.5 bg-amber-500 text-black p-0.5 rounded-full">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Logo & Brand Stamping Info */}
            <div className="border-b border-zinc-900 pb-6">
              <label className="text-sm font-sans font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                2. 企业品牌定制内容 Brand Identity
              </label>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-zinc-500 block mb-2 font-mono">
                    烫印文案 (建议18字以内，如 “科技赋能商务新体验”)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={config.brandText}
                      onChange={(e) => setConfig({ ...config, brandText: e.target.value })}
                      placeholder="北京鼎固恒芯科技有限公司"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-zinc-100 rounded-xl px-4 py-3 text-sm transition-all outline-none pr-10"
                    />
                    <PenTool className="absolute right-3.5 top-3.5 w-4 h-4 text-zinc-600" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-500 block mb-2 font-mono">
                    精工烫印工艺选择 Stamping Texture
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['gold', 'silver', 'debossed'] as const).map((type) => (
                      <motion.button
                        key={type}
                        type="button"
                        onClick={() => setConfig({ ...config, stampingType: type })}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                          config.stampingType === type
                            ? 'bg-zinc-800 text-amber-400 border-amber-500/50 shadow-lg shadow-amber-950/10'
                            : 'bg-zinc-900/40 text-zinc-400 border-zinc-805 hover:border-zinc-700'
                        }`}
                      >
                        {type === 'gold' ? '雾金烫印' : type === 'silver' ? '亮银烫印' : '无色钢印'}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Paper Type Selector */}
            <div className="border-b border-zinc-900 pb-6">
              <label className="text-sm font-sans font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                3. 精奢活页内页格局 Notebook Refill
              </label>
              <div className="space-y-2">
                {PAGES.map((page) => (
                  <motion.button
                    key={page.id}
                    onClick={() => setConfig({ ...config, innerPage: page.id })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left bg-zinc-900/60 border transition-all cursor-pointer ${
                      config.innerPage === page.id 
                        ? 'border-amber-500 bg-amber-500/5' 
                        : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className={`mt-0.5 p-1 rounded-lg ${config.innerPage === page.id ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-sans font-semibold text-zinc-200 flex justify-between">
                        <span>{page.name}</span>
                        {config.innerPage === page.id && <span className="text-[10px] text-amber-500 font-mono">已选用</span>}
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-snug truncate">{page.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Packaging Option */}
            <div className="border-b border-zinc-900 pb-6">
              <label className="text-sm font-sans font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5 mb-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                4. 礼盒包装定制 Packaging Upgrade
              </label>
              <div className="space-y-2">
                {PACKS.map((pack) => (
                  <motion.button
                    key={pack.id}
                    onClick={() => setConfig({ ...config, packaging: pack.id })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className={`w-full flex items-start gap-3 p-3.5 rounded-2xl text-left bg-zinc-900/60 border transition-all cursor-pointer ${
                      config.packaging === pack.id 
                        ? 'border-amber-500 bg-amber-500/5' 
                        : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className={`mt-0.5 p-1 rounded-lg ${config.packaging === pack.id ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                      <Gift className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-sans font-semibold text-zinc-200 flex justify-between items-center">
                        <span>{pack.name}</span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded-full">
                          {pack.price === 0 ? '标准配赠 Free' : `+ ¥ ${pack.price}/套`}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-snug">{pack.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Step Discount */}
            <div className="pb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-sans font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  5. 预估定制数量 Volume Estimate
                </label>
                <span className="text-xs text-amber-500 font-mono font-semibold bg-amber-950/40 border border-amber-900/40 px-2 py-0.5 rounded-full">
                  阶梯优惠: 满50件享折扣
                </span>
              </div>
              
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono">批量起订 50 套</span>
                  <div className="flex items-center gap-3">
                    <motion.button 
                      type="button"
                      onClick={() => setConfig({ ...config, quantity: Math.max(50, config.quantity - 50) })}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                      className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-200 cursor-pointer font-bold transition-all"
                    >
                      -
                    </motion.button>
                    <input
                      type="number"
                      min="50"
                      value={config.quantity}
                      onChange={(e) => setConfig({ ...config, quantity: Math.max(50, parseInt(e.target.value) || 50) })}
                      className="w-16 text-center bg-transparent font-mono text-zinc-100 font-bold border-b border-zinc-700 focus:border-amber-500 outline-none text-sm"
                    />
                    <motion.button 
                      type="button"
                      onClick={() => setConfig({ ...config, quantity: config.quantity + 50 })}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                      className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-200 cursor-pointer font-bold transition-all"
                    >
                      +
                    </motion.button>
                  </div>
                </div>

                <div className="h-[1px] bg-zinc-800/80"></div>

                {/* Pricing result area */}
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono block">阶梯精估单价</span>
                    <span className="text-lg md:text-xl font-sans font-bold text-zinc-200">
                      ¥ {estimate.unitPrice} <span className="text-[11px] font-mono text-zinc-500 font-normal">/套</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-500 font-mono block font-bold">
                      已尊享 {estimate.discountPercent}% OFF 专属优惠
                    </span>
                    <span className="text-xl md:text-2xl font-sans font-extrabold text-amber-500">
                      ¥ {estimate.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA High-End Request Form */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-3xl border border-zinc-800 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full"></div>
              
              <h3 className="text-sm font-sans font-bold text-zinc-200 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                获取您的定制方案、高清样册与免费样物理打样
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                提交以下初步配比。北京鼎固恒芯专属企业礼品设计师将于2小时内直接为您寄出实体打样样品、完整的定制方案PPT及大厂设计模版包。
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="config-form"
                    onSubmit={handleCustomOrder} 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="贵司名称"
                        value={contactInfo.company}
                        onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                        className="bg-zinc-950 border border-zinc-800 focus:border-amber-500 text-xs px-3 py-2.5 rounded-xl text-zinc-200 outline-none w-full"
                      />
                      <input
                        type="text"
                        required
                        placeholder="联络人姓名"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="bg-zinc-950 border border-zinc-800 focus:border-amber-500 text-xs px-3 py-2.5 rounded-xl text-zinc-200 outline-none w-full"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="极速报价对接电话 / 微信号 (必填)"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="bg-zinc-950 border border-zinc-800 focus:border-amber-500 text-xs pl-3 pr-20 py-2.5 rounded-xl text-zinc-200 outline-none w-full font-mono"
                      />
                      <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 bg-amber-500 hover:bg-amber-400 active:scale-95 text-black font-sans font-bold text-xs px-3.5 rounded-lg flex items-center gap-1 transition-all"
                      >
                        提交定制 <ClipboardCheck className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-2xl flex items-start gap-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-sans font-bold text-emerald-400">已向鼎固恒芯定制顾问提交配比申请！</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        您的科技活页笔记本高定配比（{activeColor.name.split(' ')[0]}，{getStampingLabel(config.stampingType)}，预定数量：{config.quantity}件）已被确认。鼎固恒芯（北京）的企业顾问将在短时间内拨打您的电话：<strong className="text-white font-mono">{contactInfo.phone}</strong> 寄送高定样册。
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-emerald-950 hover:bg-emerald-900 text-emerald-400 font-mono text-[10px] mt-3 uppercase px-2.5 py-1 rounded-md transition-all inline-block border border-emerald-800"
                      >
                        返回修改配比 Back to Edit
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
