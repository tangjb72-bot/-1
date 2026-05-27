import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardcoreTest } from '../types';
import { Shield, ShieldAlert, Sparkles, AlertTriangle, Zap, Droplet, Flame, Compass, RefreshCw } from 'lucide-react';

const TESTS: HardcoreTest[] = [
  {
    id: 'needle',
    name: '重磅钢针穿刺测试 (Nail Penetration)',
    icon: '📍',
    description: '采用3mm尖锐钨钢针，以0.5mm/s的速度强制穿透满电电芯中心区域，模拟笔记本外壳挤压受损与尖锐金属异物强力穿透。',
    solidStateResult: '无火花、非起火、零冒烟！电芯电压稍跌后保持平稳，温度维持在36°C，可继续安全工作。',
    liquidResult: '剧烈喷发猛烈黄色火焰，热失控温度瞬间飙升至680°C以上，电芯因电解液过热膨胀熔毁并引燃外皮。',
    isPassed: true
  },
  {
    id: 'puncture',
    name: '重物强力挤压与撞击 (Heavy Impact)',
    icon: '🔨',
    description: '使用10kg重锤自1米高空自由落体高速锤击电芯表面，模拟出行箱重度挤压或商务途中意外高空坠落摔击。',
    solidStateResult: '电芯物理轻微形变、无短路热失控！电极与固体介质绝缘层紧密吸附，保障持续安全运行。',
    liquidResult: '内部脆弱隔膜严重破裂，导致正负极直接接触引发自燃或剧烈爆炸、喷溅高温起电解液。',
    isPassed: true
  },
  {
    id: 'extreme_temperature',
    name: '极限极寒与极热环境 (Thermal Shock)',
    icon: '🔥',
    description: '将充饱电芯分别置于 -40°C 高加盐严寒与 +130°C 的超限酷热防爆恒温箱中连续运行24小时。',
    solidStateResult: '-40°C 依然稳定保持 82% 能量释放；高热状态下电中介质完好无损，绝无起火与破裂隐患。',
    liquidResult: '-15°C 以下液态流动性几乎冰冻而导致彻底无法充放电；于 75°C 环温极易热失控，过压排气阀顶出冒烟。',
    isPassed: true
  },
  {
    id: 'short_circuit',
    name: '极端直流高阻抗短路 (External Short)',
    icon: '⚡',
    description: '由高电流合金低电阻导线直接将电芯正负极连通，使回路短路阻抗降至极低的 5mΩ 范围内。',
    solidStateResult: '固态电芯内部触发自律高分子晶格钝化，瞬间温升得到可靠控制并物理断路保护。',
    liquidResult: '瞬时产生数百安培超强高温弧光火花，导致电池急剧膨胀，气体瞬间排出并熔烂整个笔记本外壳。',
    isPassed: true
  }
];

export default function TechComparison() {
  const [activeTest, setActiveTest] = useState<HardcoreTest['id']>('needle');
  const currentTest = TESTS.find(t => t.id === activeTest) || TESTS[0];

  return (
    <section id="tech-comparison" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
      
      {/* Background decoration with matrix grid look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">Hardcore Technology</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-100">
            超限级军规安全 · 全固态电芯测试
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            北京鼎固恒芯致力于突破便携电源寿命上限，摒弃了易燃易爆的液态锂电池方案，开发出具有极低内阻、高热安全性的全固态软包动力级电芯。
          </p>
        </div>

        {/* Interactive Comparison Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Diagnostic Sidebar Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest block mb-1">CHOOSE DIAGNOSTIC TEST</span>
              {TESTS.map((test) => (
                <motion.button
                  key={test.id}
                  onClick={() => setActiveTest(test.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 relative overflow-hidden group cursor-pointer ${
                    activeTest === test.id
                      ? 'bg-zinc-900 border-amber-500/50 shadow-lg shadow-amber-950/20 text-zinc-100'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 text-zinc-400'
                  }`}
                >
                  <span className="text-xl shrink-0 scale-100 group-hover:scale-110 transition-transform">{test.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold block truncate">{test.name.split(' (')[0]}</span>
                    <span className="text-[10px] text-zinc-500 font-mono block uppercase mt-0.5">{test.name.split(' (')[1]?.replace(')', '') || 'MIL-SPEC'}</span>
                  </div>
                  {activeTest === test.id && (
                    <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Standard Safety certification pill */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 p-4 rounded-2xl flex items-start gap-3 mt-6">
              <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[11px] font-mono text-zinc-300 uppercase tracking-widest font-bold">三方权威军规检测</h4>
                <p className="text-[11px] text-zinc-400 leading-snug mt-1">
                  产品通过工信部严格安全标准审查，荣获中国3C高标强制认证。100%符合国际航空管理携带规定，商务差旅畅行无忧。
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Lab Comparison Arena */}
          <div className="lg:col-span-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>

            {/* Test detail block */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-500/10 text-amber-500 font-mono text-[9px] uppercase px-2 py-0.5 rounded border border-amber-500/20 font-bold">Active Experiment</span>
                <span className="text-zinc-600 font-mono text-sm">/ 0{TESTS.indexOf(currentTest) + 1}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-zinc-100 mb-2">
                {currentTest.name}
              </h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {currentTest.description}
              </p>
            </div>

            {/* High-Contrast Interactive Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              
              {/* Solid-State Advantage */}
              <motion.div 
                key={`solid-${activeTest}`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 rounded-2xl border border-emerald-500/30 relative overflow-hidden shadow-lg shadow-emerald-950/5"
              >
                <div className="absolute top-4 right-4 text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 rounded-full p-1.5 scale-90 md:scale-100">
                  <Droplet className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[10px] text-emerald-400 tracking-wider font-bold uppercase">鼎固恒芯 · 全固态安全体系</span>
                </div>
                <h4 className="text-base font-sans font-bold text-zinc-100 mb-3">
                  固态软包裹安全电芯
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2 min-h-[60px]">
                  {currentTest.solidStateResult}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold uppercase">
                    安然无恙 Pass Normal
                  </span>
                  <span className="font-mono text-xs text-emerald-400">稳定运行</span>
                </div>
              </motion.div>

              {/* Traditional Liquid Liability */}
              <motion.div 
                key={`liquid-${activeTest}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 rounded-2xl border border-rose-500/20 relative overflow-hidden shadow-lg shadow-rose-950/5"
              >
                <div className="absolute top-4 right-4 text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-full p-1.5 scale-90 md:scale-100">
                  <Flame className="w-4 h-4 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                  <span className="font-mono text-[10px] text-rose-400 tracking-wider font-bold uppercase">传统液态聚合物电芯</span>
                </div>
                <h4 className="text-base font-sans font-bold text-zinc-200 mb-3">
                  化学液态锂电芯
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-sans mt-2 min-h-[60px]">
                  {currentTest.liquidResult}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-rose-500 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full font-bold uppercase">
                    极变危险 Fatal Risk
                  </span>
                  <span className="font-mono text-xs text-rose-400">热失控引燃</span>
                </div>
              </motion.div>

            </div>

            {/* Scientific dynamic visualization graph/infographic */}
            <div className="mt-6 p-4 bg-zinc-950 rounded-2xl border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-zinc-300 font-sans font-bold">航空运输白名单安全电池</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">UN38.3 & IATA 安全认证体系通过</div>
                </div>
              </div>
              <div className="font-mono text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                极度安全 · 零热失控隐患 · 出行无忧
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
