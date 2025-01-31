import {
    FC,
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";

const PING_RESOURCE = "/ping.txt";
const TIMEOUT_TIME_MS = 3000;
const onlinePollingInterval = 10000;

const timeout = (time: number, promise: Promise<Response>): Promise<Response> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out."));
        }, time);
        promise.then(resolve, reject);
    });
};

const checkOnlineStatus = async () => {
    const controller = new AbortController();
    const { signal } = controller;

    if (!navigator.onLine) return navigator.onLine;

    try {
        await timeout(
            TIMEOUT_TIME_MS,
            fetch(PING_RESOURCE, {
                method: "GET",
                signal,
            })
        );
        return true;
    } catch (error) {
        console.error(error);
        controller.abort();
    }
    return false;
};

const OnlineStatusContext = createContext(true);

export const OnlineStatusProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

    const checkStatus = async () => {
        const online = await checkOnlineStatus();
        setOnlineStatus(online);
    };

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        const id = setInterval(() => {
            checkStatus();
        }, onlinePollingInterval);

        return () => {
            window.removeEventListener("offline", () => {
                setOnlineStatus(false);
            });

            clearInterval(id);
        };
    }, []);

    return (
        <OnlineStatusContext.Provider value={onlineStatus} >
            {children}
        </OnlineStatusContext.Provider>
    );
};

export const useOnlineStatus = () => {
    const store = useContext(OnlineStatusContext);
    return store;
};

export default useOnlineStatus;