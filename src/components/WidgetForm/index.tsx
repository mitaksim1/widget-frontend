import { CloseButton } from "../CloseButton";

// Import des images
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

// Pour la scalabilité, on va créer un array avec tous les types de feedback disponibles, ainsi si un jour on veut ajouter ou supprimer ds feedbacks on n'aura qu'à le faire ici
export const feedbackTypes = {
    BUG: {
        title: 'Problème',
        image: {
            source: bugImageUrl,
            alt: "Image d/'un insecte"
        }
    },
    IDEA: {
        title: 'Idée',
        image: {
            source: ideaImageUrl,
            alt: "Image d/'une lampe"
        }
    },
    OTHER: {
        title: 'Autre',
        image: {
            source: thoughtImageUrl,
            alt: "Image d/'un ballon pour la pensée"
        }
    },
}

// Définit les types attendus (BUG, IDEA, AUTRE) on ne pourra pas en mettre d'autres que ceux précisés
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    // Stocke le type de feedback
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    // Reviens en arrière au clique sur l'icône
    function handleRestartFeedback() {
        setFeedbackType(null);
    }
    
    return (
        // w-[calc(100vw-2rem)] md:w-auto : aide à la responsivité de la page, si taille de l'écran à partir de médium laisser la taille auto sinon laisser une marge de 2rem
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                    <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleRestartFeedback}
                    />   
                )}

            <footer className="text-xs text-neutral-400">
                Fait par <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}