import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api";
import { MousePointerClick, BadgeCheck, Medal } from "lucide-react";

interface StatsProps {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId); // os dois pontos depois do count funciona como um alias (as)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {accessCount}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Acessos ao link
        </span>

        <MousePointerClick className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {inviteCount}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Inscrições feitas
        </span>

        <BadgeCheck className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading relative text-2xl leading-none font-semibold text-gray-200">
          {rankingPosition ? `${rankingPosition}ª` : "-"}
        </span>
        <span className="text-center text-sm leading-none text-gray-300">
          Posição no ranking
        </span>

        <Medal className="text-purple absolute top-3 left-3 size-5" />
      </div>
    </div>
  );
}
