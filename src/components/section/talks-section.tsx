/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { PlayIcon } from "lucide-react";

export default function TalksSection() {
  return (
    <section id="talks" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Talks</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">On stage</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              From Android at Google to agents and verifiable credentials today. In
              September 2026 I took CredentAgent on tour: Geneva, Shanghai, Shenzhen, and Amsterdam.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.talks.map((talk) => (
            <TimelineItem key={talk.title + talk.location} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                <img
                  src={talk.image}
                  alt=""
                  className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                />
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                <time className="text-xs text-muted-foreground">{talk.dates}</time>
                <h3 className="font-semibold leading-none">{talk.title}</h3>
                <p className="text-sm text-muted-foreground">{talk.location}</p>
                <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                  {talk.description}
                </p>
                {talk.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {talk.links.map((link) => (
                      <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-semibold">Demo videos</h3>
          <ul className="flex flex-col gap-2">
            {DATA.demos.map((demo) => (
              <li key={demo.href}>
                <Link
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm hover:bg-muted transition-colors"
                >
                  <span className="flex size-7 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <PlayIcon className="size-3 fill-current" aria-hidden />
                  </span>
                  {demo.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-semibold">Writing, papers &amp; podcasts</h3>
          <ul className="flex flex-col gap-2">
            {DATA.writing.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border px-4 py-3 text-sm hover:bg-muted transition-colors"
                >
                  <Badge variant="outline" className="mt-0.5 w-16 flex-none justify-center text-[11px]">
                    {item.kind}
                  </Badge>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.detail}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
