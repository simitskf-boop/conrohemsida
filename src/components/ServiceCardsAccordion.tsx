"use client";

import { useState, useEffect, type ReactNode } from "react";

interface ServiceSub {
  heading: string;
  items: string[];
  hoverDetail: string;
}

export interface ServiceCardData {
  title: string;
  description: string;
  detailText: string;
  workflowTitle: string;
  workflowText: string;
  helpTitle: string;
  helpItems: string[];
  subs: ServiceSub[];
  icon: ReactNode;
  color: string;
  bgColor: string;
  textColor: string;
  glowColor: string;
}

export default function ServiceCardsAccordion({
  services,
}: {
  services: ServiceCardData[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredSub, setHoveredSub] = useState<number | null>(null);
  const isAnyActive = activeIndex !== null;

  useEffect(() => {
    setHoveredSub(null);
  }, [activeIndex]);

  return (
    <>
      {/* ── Desktop: horizontal accordion ── */}
      <div
        className="hidden lg:flex gap-2 h-[560px]"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {services.map((s, i) => {
          const active = activeIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`
                relative rounded-2xl border overflow-hidden
                transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${
                  active
                    ? "flex-[5] border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.07] shadow-2xl"
                    : isAnyActive
                      ? "flex-[0.6] border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer"
                      : "flex-1 border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 cursor-pointer"
                }
              `}
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${s.color} transition-opacity duration-500 z-10 ${active ? "opacity-100" : "opacity-0"}`}
              />

              {/* Background glow */}
              <div
                className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${s.color} rounded-full transition-opacity duration-700 blur-3xl ${active ? "opacity-[0.07]" : "opacity-0"}`}
              />

              {/* ── Collapsed view ── */}
              <div
                className={`
                  absolute inset-0 flex flex-col items-center justify-center gap-3 p-3
                  transition-all duration-500
                  ${active ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}
                `}
              >
                <div
                  className={`h-12 w-12 rounded-xl ${s.bgColor} ${s.textColor} flex items-center justify-center shrink-0 transition-transform duration-500`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xs font-bold text-gray-900 dark:text-white text-center leading-tight max-w-[90px]">
                  {s.title}
                </h3>
                {/* Brief description only visible when no card is active */}
                <p
                  className={`text-[11px] text-gray-400 text-center leading-snug max-w-[130px] line-clamp-3 transition-all duration-300 ${isAnyActive ? "opacity-0 h-0 overflow-hidden" : "opacity-70"}`}
                >
                  {s.description}
                </p>
              </div>

              {/* ── Expanded view ── */}
              <div
                className={`
                  absolute inset-0 p-8 overflow-y-auto
                  transition-all duration-500
                  ${active ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}
                `}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 text-white shadow-lg`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Detail text */}
                <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {s.detailText}
                </p>

                {/* Subs with hover details */}
                {s.subs.length > 0 && (
                  <div className="mb-6 space-y-1.5">
                    {s.subs.map((sub, si) => (
                      <div
                        key={si}
                        onMouseEnter={() => setHoveredSub(si)}
                        onMouseLeave={() => setHoveredSub(null)}
                        className={`p-3 rounded-xl cursor-default transition-all duration-300 ${
                          hoveredSub === si
                            ? `${s.bgColor} shadow-sm`
                            : "bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/[0.07]"
                        }`}
                      >
                        <div className="flex items-start gap-2 overflow-hidden">
                          <div className="flex-1 min-w-0">
                            <h5 className={`text-sm font-bold ${s.textColor} truncate`}>
                              {sub.heading}
                            </h5>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {sub.items.map((item) => (
                                <span
                                  key={item}
                                  className="text-[11px] text-gray-500 dark:text-gray-400 bg-white dark:bg-white/10 px-2 py-0.5 rounded-md"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <svg
                            className={`h-4 w-4 text-gray-400 shrink-0 mt-0.5 transition-transform duration-300 ${hoveredSub === si ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            hoveredSub === si
                              ? "max-h-40 opacity-100 mt-2"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                            {sub.hoverDetail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Two-column: workflow + help */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {/* Workflow */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider mb-2 ${s.textColor}`}
                    >
                      {s.workflowTitle}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {s.workflowText}
                    </p>
                  </div>

                  {/* Help items */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider mb-3 ${s.textColor}`}
                    >
                      {s.helpTitle}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {s.helpItems.map((item) => (
                        <span
                          key={item}
                          className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold ${s.bgColor} ${s.textColor}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile / Tablet: vertical accordion ── */}
      <div className="lg:hidden space-y-3">
        {services.map((s, i) => {
          const active = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(active ? null : i)}
              className={`
                rounded-2xl border overflow-hidden cursor-pointer
                transition-all duration-500
                ${
                  active
                    ? "border-gray-200 dark:border-white/20 bg-white dark:bg-white/[0.07] shadow-xl"
                    : "border-gray-100 dark:border-white/10 bg-white dark:bg-white/5"
                }
              `}
            >
              {/* Top accent */}
              <div
                className={`h-1 bg-gradient-to-r ${s.color} transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`}
              />

              {/* Always-visible header */}
              <div className="flex items-center gap-4 p-5">
                <div
                  className={`h-12 w-12 rounded-xl ${active ? `bg-gradient-to-br ${s.color} text-white` : `${s.bgColor} ${s.textColor}`} flex items-center justify-center shrink-0 transition-all duration-300`}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {s.description}
                  </p>
                </div>
                <svg
                  className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              {/* Expandable content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${active ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-5 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {s.detailText}
                  </p>

                  {/* Subs with tap-to-expand details */}
                  {s.subs.length > 0 && (
                    <div className="mb-5 space-y-1.5">
                      {s.subs.map((sub, si) => (
                        <div
                          key={si}
                          onClick={(e) => {
                            e.stopPropagation();
                            setHoveredSub(hoveredSub === si ? null : si);
                          }}
                          className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                            hoveredSub === si
                              ? `${s.bgColor} shadow-sm`
                              : "bg-gray-50 dark:bg-white/5"
                          }`}
                        >
                          <div className="relative pr-6">
                            <h5 className={`text-sm font-bold ${s.textColor}`}>
                              {sub.heading}
                            </h5>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {sub.items.map((item) => (
                                <span
                                  key={item}
                                  className="text-[11px] text-gray-500 dark:text-gray-400 bg-white dark:bg-white/10 px-2 py-0.5 rounded-md"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                            <svg
                              className={`absolute top-0.5 right-0 h-4 w-4 text-gray-400 transition-transform duration-300 ${hoveredSub === si ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              hoveredSub === si
                                ? "max-h-40 opacity-100 mt-2"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                              {sub.hoverDetail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider mb-2 ${s.textColor}`}
                      >
                        {s.workflowTitle}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {s.workflowText}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5">
                      <h4
                        className={`text-xs font-bold uppercase tracking-wider mb-3 ${s.textColor}`}
                      >
                        {s.helpTitle}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {s.helpItems.map((item) => (
                          <span
                            key={item}
                            className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold ${s.bgColor} ${s.textColor}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
