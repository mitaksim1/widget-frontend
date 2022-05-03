import { CloseButton } from "./CloseButton";

// Import des images
import bugImageUrl from '../assets/Bug.svg';
import ideaImageUrl from '../assets/Idea.svg';
import thoughtImageUrl from '../assets/Thought.svg';

export function WidgetForm() {
    // Pour la scalabilité, on va créer un array avec tous les types de feedback disponibles, ainsi si un jour on veut ajouter ou supprimer ds feedbacks on n'aura qu'à le faire ici
    const feedbackTypes = {
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
    return (
        // w-[calc(100vw-2rem)] md:w-auto : aide à la responsivité de la page, si taille de l'écran à partir de médium laisser la taille auto sinon laisser une marge de 2rem
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Laisse ton feedback ici</span>
                <CloseButton />
            </header>

            {/* w-full: la div va occuper toute la largeur */}
            <div className="flex py-8 gap-2 w-full">
                {/* Object.entries(feedbackTypes) => [['BUG', {...}], [], []] on accès à la clé et à son contenu */}
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        // flex-1 : comme l'élément parent possède la propriété flex et ici on précise une largeur de w-24(96px) si le parent augmente de taille flex-1 va permettre d'adapter la taille en dépassant les 96px si besoin 
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>

            <footer className="text-xs text-neutral-400">
                Fait par <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}