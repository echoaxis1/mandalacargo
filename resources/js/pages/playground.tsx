import { Announcement } from '@/types/announcement';
import { VesselStatus } from '@/types/vessel';

type VesselStatusLiveProps = {
    resource: Paginate<VesselStatus>;
    announcements: Announcement[];
};

const playground = ({ resource, announcements }: VesselStatusLiveProps) => {
    return (
        <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo animi eos officia? Laudantium id repudiandae
            enim cupiditate, provident atque dolores? Accusamus repellat consequuntur laborum error quae quisquam
            exercitationem ullam aut!
        </>
    );
};

export default playground;
