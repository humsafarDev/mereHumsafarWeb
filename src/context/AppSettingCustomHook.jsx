import { useEffect, useState } from "react";



const useAppSettings = () => {
    // Custom hook logic here

    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('/api/master/app-setting');
                const data = await response.json();
                setSettings(data);

                // Apply theme colors to CSS variables
                const root = document.documentElement;
                const colors = data?.themeColor;

                if (colors?.id) {
                    Object.entries(colors).forEach(([key, value]) => {
                        if (key !== "id" && key !== "title" && value) {
                            root.style.setProperty(`--${key}`, value);
                        }
                    });
                }
            } catch (error) {
                console.error('Error fetching app settings:', error);
            }
        };

        fetchSettings();

    }, []);







    return settings;
    }


export default useAppSettings;