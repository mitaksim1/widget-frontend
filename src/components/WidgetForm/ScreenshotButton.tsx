import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

// Type les props envoyés par FeedbackContentStep
interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot: string | null;
}

// Capture d'écran 
export function ScreenshotButton({
    screenshot, 
    onScreenshotTook
}: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        // Typescript retourne l'élément ou null (s'il l'a pas trouvé)
        // On ajoute le ! parce qu'on est sur de retrouver le html de la page
        const canvas = await html2canvas(document.querySelector('html')!);
        // Converti le screenshot dans une image png avec base 64 (format de texte qui va représenter l'image)
        const base64image = canvas.toDataURL('image/png');
        // console.log(base64image);

        // Sauvegarde de l'image
        onScreenshotTook(base64image);

        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition:colors"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
    return (    
    <>
        < button
            type = "button"
            onClick={handleTakeScreenshot}
            className = "p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" /> }
        </button >
    </>
    )
}