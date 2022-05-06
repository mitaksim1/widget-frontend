import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

// Pour que ce composant puisse recevoir les props, on doit préciser quel type est attendu
interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeProps) {
    return (
    <>
        <header>
            <span className="text-xl leading-6">Laisse ton feedback ici</span>
            <CloseButton />
        </header>
 
        {/* w-full: la div va occuper toute la largeur */}
        < div className="flex py-8 gap-2 w-full">
            {/* Object.entries(feedbackTypes) => [['BUG', {...}], [], []] on accès à la clé et à son contenu */}
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    // flex-1 : comme l'élément parent possède la propriété flex et ici on précise une largeur de w-24(96px) si le parent augmente de taille flex-1 va permettre d'adapter la taille en dépassant les 96px si besoin 
                    <button
                        key={key}
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    </>
    );   
}