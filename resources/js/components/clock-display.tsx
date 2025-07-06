import { useEffect, useState } from 'react';

const ClockDisplay = () => {
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
            <p className="mb-1.5 text-center text-white">{time.day}</p>
            <div className="mx-auto w-[320px] rounded bg-black px-4 py-2 text-center text-7xl text-white shadow">
                {time.hours}:{time.minutes}:{time.seconds}
            </div>
        </div>
    );
};

export default ClockDisplay;
