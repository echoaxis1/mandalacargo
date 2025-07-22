import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Announcement } from '@/types/announcement';
import { VesselStatus } from '@/types/vessel';
import Autoplay from 'embla-carousel-autoplay';
import TableLive from './vessel-status/live/table';

type VesselStatusLiveProps = {
    resource: Paginate<VesselStatus>;
    announcements: Announcement[];
};

const playground = ({ resource, announcements }: VesselStatusLiveProps) => {
    return (
        <div className="px-20">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <TableLive data={resource} />
                    </CarouselItem>
                    <CarouselItem>
                        <TableLive data={resource} />
                    </CarouselItem>
                    <CarouselItem>
                        <TableLive data={resource} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default playground;
