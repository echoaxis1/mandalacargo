import { useEffect, useState } from 'react';

const ClockDisplay = ({ className }: { className?: string }) => {
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
        day: 'Memuat...',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const day = now.toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });

            setTime({ hours, minutes, seconds, day });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div
                className={`mx-auto h-full rounded bg-black px-4 py-2 text-center font-bold text-white shadow ${className}`}
            >
                <div className="">
                    <p className="text-xs font-extralight">{time.day}</p>
                    {time.hours}:{time.minutes}:{time.seconds}
                </div>
            </div>
        </div>
    );
};

export default ClockDisplay;
