import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, Compass, Calendar, RefreshCw, Layers, ShieldAlert, BadgeCheck, FileText, Send, HelpCircle, AlertOctagon 
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  category: 'safety' | 'charging' | 'custom' | 'specs';
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'safety',
    q: '为什么说固态电池笔记本在航空安全上比传统充电本更有保障？',
    a: '传统充电本极度依赖液态锂聚合物，受严寒和高热气压剧烈波动时电解液易漏液并触发热失控引发明火，因此民航各部门管制严厉。北京鼎固恒芯笔记本采用固体聚合物电卡介质，无挥发、不爆、无液外溢，军工穿刺试验中零起火、不冒烟，通过UN38.3全面震荡与特种空运白名单安全许可。'
  },
  {
    category: 'charging',
    q: '22.5W双向快充是如何运作的？可以为哪些设备提供充电支持？',
    a: '本产品支持最高 22.5W 双向快充技术，附赠的高弹编织 Type-C 内嵌式充电线及主流苹果 Lightning 转换头，可广泛兼容给 iPhone、安卓旗舰手机、iPad 甚至是低能耗 MacBook Air 自愈应急供电。双向快充让本本自身可在2小时内快速满血复活，无需冗长等待。'
  },
  {
    category: 'custom',
    q: '企业高定礼盒定制流程有哪些？最低起订量是多少？',
    a: '我们的高定服务最低起订量为 50 套。我们提供封皮图案/LOGO精密铜模重压钢印、24K雾金/金属亮银特种热烫印、定制化特种纸内容印刷。此外可定制特种黑卡品牌硬盒与专属铝合金阳极氧化气动原子礼品盒包装。从交付方案稿到发出全国，商务伴手礼高定快速成型。'
  },
  {
    category: 'specs',
    q: '内置电芯的真实寿命和容量是多少？日常防水防尘性能如何？',
    a: '笔记本内嵌高能全固态聚合物电芯安全容量为 5000mAh。由于固态电极无金属锂结晶刺穿化学问题，其循环寿命高达 500+ 次以上，几乎是普通易耗锂电池的数倍。笔记本外观采用耐磨抗刮、质地厚润的进口防溅超纤PU皮革，日常咖啡或茶水溅洒及时纸擦拭即可安然无损。'
  }
];

export default function SpecFaq() {
  const [activeTab, setActiveTab] = useState<FaqItem['category']>('safety');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaq = FAQ_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="spec-faq" className="py-24 bg-zinc-950 text-white border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-3">Specifications & FAQ</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-100">
            精细参数 · 深度常见问题
          </h2>
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            为您答疑关于鼎固恒芯高能量全固态硬核技术细节。精工不凡，源自于对每一项测试的自信和工业美学品格。
          </p>
        </div>

        {/* Detailed Spec Sheet Blocks (Apple style layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-sans font-bold text-zinc-100">全固态高能电芯系统</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                全固态聚合物软包安全介质电芯。循环寿命达到业内优秀的500+次以上，衰减极低，拥有传统液态电芯无法匹敌的安全壁垒。
              </p>
            </div>
            
            <table className="w-full text-left border-collapse text-xs font-mono mt-4">
              <tbody>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">电芯容量</td><td className="py-2 text-zinc-200 text-right">5000mAh Extreme</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">快充档位</td><td className="py-2 text-zinc-100 text-right">最高 22.5W 双向快充</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">机身接口</td><td className="py-2 text-zinc-100 text-right">Type-C 编织高弹直出</td></tr>
                <tr><td className="py-2 text-zinc-500">满电耗时</td><td className="py-2 text-zinc-100 text-right">约 1.5 - 2 小时</td></tr>
              </tbody>
            </table>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                <FileText className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-sans font-bold text-zinc-100">外皮包覆与本册装设</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                采用厚实丰润的高端进口耐划防水防静电超纤PU皮革，采用德制六孔高级双重标准线缝，兼具活页无限续用性。
              </p>
            </div>
            
            <table className="w-full text-left border-collapse text-xs font-mono mt-4">
              <tbody>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">尺寸规制</td><td className="py-2 text-zinc-200 text-right">A5 双活页国际便携规范</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">纸张克重</td><td className="py-2 text-zinc-100 text-right">100g 高克重无酸厚重艺术纸</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">活页规格</td><td className="py-2 text-zinc-100 text-right">经典德制六孔金属易拆夹芯</td></tr>
                <tr><td className="py-2 text-zinc-500">日常防水</td><td className="py-2 text-zinc-100 text-right">防日常茶水咖溅、自愈式抗折</td></tr>
              </tbody>
            </table>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                <BadgeCheck className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-sans font-bold text-zinc-100">国家与行业安全认证</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                全面符合多重苛刻检测规范，安全标志醒目。自带智能MCU极控保护芯片，提供防过充、防过流阻抗闭环保护。
              </p>
            </div>
            
            <table className="w-full text-left border-collapse text-xs font-mono mt-4">
              <tbody>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">安全认证</td><td className="py-2 text-emerald-400 text-right font-bold">工信部权威检验 / 3C强制认证</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">携带许可</td><td className="py-2 text-zinc-100 text-right">100% 航空安全登机白名单</td></tr>
                <tr className="border-b border-zinc-900"><td className="py-2 text-zinc-500">测试检验</td><td className="py-2 text-zinc-100 text-right">3mm钢针极限穿刺无起火</td></tr>
                <tr><td className="py-2 text-zinc-500">核心保护</td><td className="py-2 text-zinc-100 text-right"> MCU智能自愈过流过热保护</td></tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Categories Tabs & Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Tab lists */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {([
              { id: 'safety', label: '电芯安全 Solid Safety' },
              { id: 'charging', label: '充电能效 Charge Capacity' },
              { id: 'custom', label: '高定工艺 Exclusive Craft' },
              { id: 'specs', label: '基础性能 Daily Specs' }
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(0);
                }}
                className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-widest text-left transition-all whitespace-nowrap lg:whitespace-normal ${
                  activeTab === tab.id
                    ? 'bg-zinc-900 text-amber-500 border-l-2 border-amber-500'
                    : 'bg-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-9 space-y-3">
            {filteredFaq.map((item, index) => (
              <div 
                key={index}
                className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-zinc-900/40 transition-all"
                >
                  <span className="text-xs md:text-sm font-sans font-bold text-zinc-100 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                    {item.q}
                  </span>
                  <span className="text-zinc-500 text-xs font-mono ml-auto mr-1 select-none">
                    {openIndex === index ? '收起 [-]' : '展开 [+]'}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/80">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
