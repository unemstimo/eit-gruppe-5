import Link from "next/link";
import { MessageSquareMore } from "lucide-react";

export default function FeedbackButton() {
    return (
        <Link
            href="/tilbakemelding"
            className="inline-flex items-center gap-3 rounded-2xl border border-teal-400 bg-[#DDEBE9] px-6 py-4 text-xl font-semibold text-zinc-800 shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition hover:shadow-[0_6px_14px_rgba(0,0,0,0.16)]"
        >
            <MessageSquareMore className="text-teal-700" size={28} />
            Gi tilbakemelding
        </Link>
    );
}