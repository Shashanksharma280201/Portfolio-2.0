"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";

export function About() {
    return (
        <div className="h-screen max-w-4xl flex items-center justify-center overflow-hidden">
            <MaskContainer
                revealText={
                    <p className="max-w-4xl mx-auto text-slate-600 text-center  text-4xl font-bold">
                        They are available right here right now without any costs.
                        Just enjoy their wisdom and unleash their power whenever you need to
                    </p>
                }
                className="h-screen opacity-90 bg-gray-500"
            >
                They are a trigger for investigating the <span className="text-red-500">techniques</span> that push <span className="text-red-500">boundaries</span>,
                unlock hidden <span className="text-red-500">potential</span>  and expand <span className="text-red-500">skill</span> set.
            </MaskContainer>
        </div>
    );
}
