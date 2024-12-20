import getCurrentTime from "../components/CurrentTime.ts";

export interface LinkVerifierChat {
    message: any;
    time: string;
    alignment: 'left' | 'right';
    color: 'neutral' | 'safe' | 'warning' | 'insecure';
    image?: string;
}

export const getChatColor = (color: string) => {
    switch (color) {
        case 'safe':
            return 'lime-100';
        case 'warning':
            return 'yellow-100';
        case 'insecure':
            return 'red-200';
        default:
            return 'white';
    }
}

export const fetchUrlRiskScore = async (url: string, t: (key: string) => string): Promise<LinkVerifierChat | undefined> => {
    const getUrlMessage = (brief: string) => {
        switch (brief) {
            case 'safe':
                return t("safe");
            case 'warning':
                return t("warning");
            case 'insecure':
                return t("insecure");
            default:
                return t("default");
        }
    };

    if (!url.trim()) {
        return {
            message: t("message-10"),
            time: getCurrentTime(),
            alignment: 'left',
            color: 'neutral'
        };
    }

    if (!isValidUrl(url)) {
        return {
            message: t("message-11"),
            alignment: 'left',
            time: getCurrentTime(),
            color: 'neutral'
        };
    }

    try {
        const response = await fetch('https://link-validator-api.up.railway.app/api/v1/webrisk/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            return {
                message: t("message-12"),
                time: getCurrentTime(),
                alignment: 'left',
                color: 'neutral'
            };
        }

        const result = await response.json();
        if (result) {
            const description = getUrlMessage(result.brief);
            return {
                message: `${t("message-14")} ${url} ${description}`,
                time: getCurrentTime(),
                alignment: 'left',
                color: result.brief || 'neutral'
            };
        }
    } catch (error) {
        return {
            message: t("message-13"),
            time: getCurrentTime(),
            alignment: 'left',
            color: 'neutral'
        };
    }
};

export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};
