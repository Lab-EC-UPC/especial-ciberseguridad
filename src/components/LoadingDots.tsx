interface Props {
    alignment: string;
}

export default function LoadingDots({alignment}: Props) {
    return (
        <div
            className={`w-full flex ${alignment === "left" ? "justify-start" : "justify-end"}`}>
            <div
                className={`flex items-end space-x-1 px-4 py-3 rounded-xl w-fit ${alignment === "left" ? "bg-gray-100" : "bg-green-chat-box"}`}>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
            </div>
        </div>
    );
}