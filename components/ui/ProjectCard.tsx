import { ProjectType } from "@shared-types/project";
import Link from "next/link";
import GitHubBtn from "@components/buttons/GitHubBtn";
import WebsiteBtn from "@components/buttons/WebsiteBtn";
import Picture from "@components/common/Picture";

export default function ProjectCard({
  href,
  ariaLabel,
  src,
  alt,
  title,
  desc,
  website,
  github,
}: ProjectType) {
  return (
    <div className="relative w-[400px] rounded-xl flex flex-col bg-surface dark:bg-dm-surface hover:shadow-primary-dark hover:shadow-lg hover:-translate-y-2 [&>a>div>img]:hover:rounded-none active:translate-y-1 active:shadow-none cursor-pointer overflow-hidden">
      <Link aria-label={ariaLabel} href={href}>
        <div className="relative w-full h-[200px] ">
          <Picture src={src} alt={`${alt}`} />
        </div>
        <div className="details px-[30px] py-[30px]">
          <h1 className="truncate text-2xl font-bold px-2">{title}</h1>
          <p className="desc-format">{desc}</p>
        </div>
      </Link>
      <div className="links flex justify-between px-[30px] pb-[30px]">
        <GitHubBtn href={github.toString()} />
        {website ? <WebsiteBtn href={website.toString()} /> : <></>}
      </div>
    </div>
  );
}
