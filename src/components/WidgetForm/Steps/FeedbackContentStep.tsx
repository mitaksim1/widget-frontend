import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    // Pas de paramètre et ne retoune rien
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ 
    feedbackType, 
    onFeedbackRestartRequested 
}: FeedbackContentStepProps) {
    // Stoke le screenshot pris par l'utilisateur
    const [screenshot, setScreenshot] = useState<string | null>(null);

    // Récupère le message envoyé par l'utilisateur
    const [comment, setComment] = useState('');

    // Récupère juste le feedback choisi par l'utilisateur
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({
            screenshot, 
            comment
        })
    }
    return (
        <>
            <header>
                {/* Icône/bouton pour revenir en arrière */}
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>
                </button>
                {/* Récupère juste le titre du feedback */}
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
        
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Raconte nous en détail qu'est-ce que se passe..."
                    onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                    />
                    {/* Envoyer feedback */}
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length === 0}
                    >
                        Envoyer feedback
                    </button>
                </footer>
            </form>
        </>
    );
}