"use client";

import { useEffect, useState } from "react";
import LinkCard from "./LinkCard";

type LinkItem = {
  id: string;
  title: string;
  href: string;
};

type LinksSectionProps = {
  links: LinkItem[];
};

export default function LinksSection({ links }: LinksSectionProps) {
  // 데이터가 오기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/links/clicks")
      .then((res) => (res.ok ? (res.json() as Promise<Record<string, number>>) : null))
      .then((data) => {
        if (!cancelled && data) {
          setCounts((prev) => ({ ...prev, ...data }));
        }
      })
      .catch(() => {
        // 조회에 실패하면 0회 표시를 그대로 둔다
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleLinkClick = (id: string) => {
    // 실제 서버 응답을 기다리지 않고 화면 먼저 갱신
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/links/${id}/click`, { method: "POST" }).catch(() => {
      // 집계에 실패해도 링크 이동 자체는 막지 않는다
    });
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            id={link.id}
            title={link.title}
            href={link.href}
            clickCount={counts[link.id] ?? 0}
            onLinkClick={handleLinkClick}
          />
        </li>
      ))}
    </ul>
  );
}
