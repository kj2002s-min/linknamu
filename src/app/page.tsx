import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여 주기용 더미 데이터 — 실제 내용은 나중에 교체
const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpeg",
};

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-12 px-7 pt-20 pb-16 sm:px-8 sm:pt-28">
      <ProfileHeader {...profile} />
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
