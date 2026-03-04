import { Briefcase, Users, TrendingUp, Mail, Download } from "lucide-react";

function App() {
  const handleDownloadAll = () => {
    const files = [
      { path: "/invitations/invitation3.pdf", name: "invitation.pdf" },
      { path: "/invitations/invitation (2).pdf", name: "invitation (2).pdf" },
    ];

    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = file.path;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 300);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-0 md:mb-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            ORANGE CONSORTIUM.
          </h1>
          <p className="text-sm md:text-xl tracking-wide text-orange-700 font-semibold">
            Defending Africa's Technology.
          </p>
        </div>
      </header>

      {/* Thin critical announcement bar fixed under header */}
      <div className="fixed left-0 right-0 top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 rounded-b shadow-md flex items-center justify-center">
            <p className="text-xs md:text-sm font-semibold text-center">
              To our donors and investors — Our services are still rapidly
              maturing so For more information please email us on one of our
              representers at{" "}
              <a
                href="mailto:rtxproject@proton.me"
                className="underline hover:text-orange-100 transition-colors"
              >
                rtxproject@proton.me
              </a>{" "}
              or their contact at +263 78 630 9860
            </p>
          </div>
        </div>
      </div>

      {/* push main content down so fixed header + announcement don't overlap */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 pt-40 md:pt-48">
        {/* Invitation Download Section */}
        <section className="mb-12">
          <div className="bg-orange-100 border-2 border-orange-500 p-6 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-orange-900">
              <div className="bg-orange-500 p-3 rounded-full text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Received an invite?</h3>
                <p className="text-sm opacity-90 text-orange-800">
                  Click the button to download your official invitation letter.
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:transform active:scale-95 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Invitation Letters
            </button>
          </div>
        </section>

        <section className="mb-16 pb-16 border-b-2 border-emerald-200">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Get Involved
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-rose-300 p-6 hover:bg-gradient-to-br hover:from-rose-500 hover:to-rose-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-rose-50">
              <TrendingUp className="w-12 h-12 mb-4 text-rose-600" />
              <h3 className="text-xl font-bold mb-4 uppercase text-rose-700">
                For Investors
              </h3>
              <p className="mb-4 text-sm leading-relaxed">
                Are you an investor interested in our work? Are you seeking
                diversification beyond traditional assets, commodities, real
                estate. For <b>$3000/quarter or $11,500/year</b>, you can join
                our insider society network with access to an exclusive investor
                community, real-time industry reports, dashboards and
                newsletters.
              </p>
              <p className="font-bold text-sm">
                Advanced technology companies, High-potential startups,
                early-stage scientific ventures, and frontier research
                initiatives are systematically sourced, technically vetted, and
                presented as structured investment opportunities — allowing you
                to deploy capital into innovation with clarity and confidence.
              </p>
            </div>
            <div className="border-4 border-blue-300 p-6 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-blue-50">
              <Users className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-4 uppercase text-blue-700">
                For Institutions
              </h3>
              <p className="mb-4 text-sm leading-relaxed">
                Are you an institution looking to access some of our market
                research? We collaborate with universities, governments, and
                enterprises to architect research-driven innovation systems —
                translating mathematics, computer science, and engineering
                breakthroughs into scalable digital infrastructure for Africa’s
                long-term sovereignty.
              </p>
              <p className="font-bold text-lg">CONTACT US BELOW</p>
            </div>

            <div className="border-4 border-emerald-300 p-6 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-emerald-50">
              <Briefcase className="w-12 h-12 mb-4 text-emerald-600" />
              <h3 className="text-xl font-bold mb-4 uppercase text-emerald-700">
                For Startups
              </h3>
              <p className="mb-4 text-sm leading-relaxed">
                Are you a startup? Are you looking for a co-founder? Are you
                looking for funding?We support founders developing foundational
                technologies — from distributed systems and AI to biotech and
                advanced computation — providing the intellectual capital,
                strategic networks, and structural backing required to scale
                deep-tech ventures across the continent.
              </p>
              <p className="font-bold text-lg">
                APPLY TO OUR INCUBATOR, financial statements and project details
                should be available for review
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-16 pb-16 border-b-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="prose max-w-none text-lg leading-relaxed">
            <p className="mb-4">
              Inspired and co-founded by Southern Africa's thriving generation
              from countries including Botswana, Zambia and Zimbabwe, the idea
              about the Orange Consortium came about as a brainchild of highly
              technicalnp young minds from backgrounds including computer
              science, engineering, biotech, mathematics and other STEM
              disciplines who aspired to found influential technology companies
              and groundbreaking inventions discovered that there was a
              misunderstanding in Africa's investing ecosystem and also in its
              technology ecosystem, the solution became to create an
              organization to incubate bold Companies, guide visionary
              investors, and build the indigenous tech community of tomorrow.
            </p>
            <p className="text-xl font-semibold mt-8">
              Are you an investor or institution seeking diversification beyond
              traditional assets, commodities, real estate, or an institution
              needing high-quality market research, or a founder with
              breakthrough ideas — Orange Consortium is your launchpad,
              Orange_Consortium aims to guide investors trying to bridge and
              diversify their portfolios or re-stake their capital to scientific
              research, technology, Engineering breakthroughs and groundbreaking
              manufacturing initiatives here in Southern Africa, breaking away
              from the traditional investing norms that prevailed in africa at
              the same time helping communities escape reliance on western led
              technology and science ecosystems. We are recreating Silicon
              Valley here in Africa and incubating the wildest of ideas.
            </p>
          </div>
        </section>

        {/* 
        <section className="mb-16 pb-16 border-b-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Our Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-orange-300 p-8 rounded-lg shadow-lg hover:shadow-xl hover:border-orange-500 transition-all duration-300 bg-gradient-to-br from-white to-orange-50">
              <div className="mb-6 pb-6 border-b-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-2 text-orange-600">
                  UMUNTU LEARN
                </h3>
                <p className="text-sm uppercase tracking-wider font-semibold text-amber-600">
                  Zimbabwe
                </p>
              </div>
              <p className="text-sm mb-4 leading-relaxed">Education Platform</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Valuation
                  </p>
                  <p className="text-2xl font-bold">$620M</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Founded
                  </p>
                  <p className="text-sm">2020</p>
                </div>
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 mt-4 rounded">
                  <p className="text-xs uppercase tracking-wide font-bold mb-2">
                    Key Milestones
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li>• 4.2M Active Users</li>
                    <li>• Series B: $180M (2024)</li>
                    <li>• 28 African Countries</li>
                    <li>• 45% Female Learners</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 
            <div className="border-4 border-cyan-300 p-8 rounded-lg shadow-lg hover:shadow-xl hover:border-cyan-500 transition-all duration-300 bg-gradient-to-br from-white to-cyan-50">
              <div className="mb-6 pb-6 border-b-2 border-cyan-200">
                <h3 className="text-2xl font-bold mb-2 text-cyan-600">
                  MVUKA TRADE
                </h3>
                <p className="text-sm uppercase tracking-wider font-semibold text-teal-600">
                  Botswana
                </p>
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                African Financial Markets Trading Platform
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Valuation
                  </p>
                  <p className="text-2xl font-bold">$890M</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Founded
                  </p>
                  <p className="text-sm">2021</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white p-4 mt-4 rounded">
                  <p className="text-xs uppercase tracking-wide font-bold mb-2">
                    Key Milestones
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li>• $18B+ Trading Volume</li>
                    <li>• Series A+: $320M (2023)</li>
                    <li>• 850K expected Traders</li>
                    <li>• 11 expected Stock Exchanges</li>
                  </ul>
                </div>
              </div>
            </div> 

            <div className="border-4 border-blue-300 p-8 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="mb-6 pb-6 border-b-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-2 text-blue-600">
                  ARMADA TECH
                </h3>
                <p className="text-sm uppercase tracking-wider font-semibold text-blue-600">
                  Zambia
                </p>
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                Advanced Defense Systems & Aerospace
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Valuation
                  </p>
                  <p className="text-2xl font-bold">$1.2B</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold mb-1">
                    Founded
                  </p>
                  <p className="text-sm">2019</p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 mt-4 rounded">
                  <p className="text-xs uppercase tracking-wide font-bold mb-2">
                    Key Milestones
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li>• Series C: $450M (2023)</li>
                    <li>• 280+ Patents Filed</li>
                    <li>• 12 Regional Contracts</li>
                    <li>• 2,400+ Engineers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Food for Thought: The Facts
          </h2>
          <div className="space-y-6">
            <div className="border-l-8 border-indigo-500 pl-6 py-4 bg-gradient-to-r from-indigo-50 to-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2 text-indigo-700">
                The Software Sovereignty Gap
              </h3>
              <p className="leading-relaxed">
                While 90% of mobile operating systems globally are
                American-owned, Africa has the world's fastest-growing developer
                population—growing at 3.8% annually—yet remains a net importer
                of nearly all enterprise and consumer software.
              </p>
            </div>

            <div className="border-l-8 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">The Gaming Goldmine</h3>
              <p className="leading-relaxed">
                The African gaming market hit $1.8 billion in 2024, growing 6x
                faster than the global average. Despite having 349 million
                active gamers, over 95% of the games played are produced in the
                US, Europe, or Asia, leaving local cultural and consumer
                narratives completely unmonetized.
              </p>
            </div>

            <div className="border-l-8 border-green-500 pl-6 py-4 bg-gradient-to-r from-green-50 to-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2 text-green-700">
                The Scientific Research Paradox
              </h3>
              <p className="leading-relaxed">
                Africa represents 14% of the global population and carries the
                world's highest disease burden, yet contributes less than 1% of
                global published research. This creates a massive opportunity
                for local R&D in healthtech, agritech, and climate science
                tailored to tropical and emerging market realities.
              </p>
            </div>

            <div className="border-l-8 border-pink-500 pl-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">
                The "Unicorn" Efficiency
              </h3>
              <p className="leading-relaxed">
                African companies like Flutterwave and TymeBank have achieved
                billion-dollar valuations with significantly less capital than
                their Western counterparts. African developers typically cost
                60–80% less than US talent, providing investors with a much
                higher "innovation-per-dollar" ratio.
              </p>
            </div>

            <div className="border-l-8 border-cyan-500 pl-6 py-4 bg-gradient-to-r from-cyan-50 to-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">
                The Internet Economy Surge
              </h3>
              <p className="leading-relaxed">
                Africa's internet economy is projected to reach $180 billion by
                2025 (over 5% of the continent's GDP). Most of this value is
                still trapped in fragmented, informal retail and supply chains
                waiting for digital consolidation.
              </p>
            </div>

            <div className="border-l-8 border-yellow-500 pl-6 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">
                The Exit Proof-of-Concept
              </h3>
              <p className="leading-relaxed">
                In 2025 alone, African tech M&A surged by 69%, and major
                fintechs like Optasia and Cash Plus successfully IPO'd, proving
                that the continent is no longer just a "venture" play but a
                viable market for significant capital returns.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-orange-500 bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ORANGE CONSORTIUM</h3>
              <p className="mb-4">
                Incubating bold companies, guiding visionary investors, and
                building the indigenous tech community of tomorrow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <p>Get in touch to learn more about our programs</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white text-center">
            <p>&copy; 2025 Orange Consortium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
