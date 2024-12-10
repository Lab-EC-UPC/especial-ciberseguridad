export default function SplashScreen() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid gap-4 text-center">
                <p className="font-medium">Cargando especial...</p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-dark animate-pulse"
                        style={{ width: '50%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
