export type academiaProp = {
    id: number;
    title: string;
    content?: string;
    opened?: boolean;
    mask?: 'required' | 'recommended';
    towel?: 'required' | 'recommended';
    fountain?: 'partial' | 'not_allowed';
    locker_room?: 'allowed' | 'partial' | 'closed';
    schedules?: {
        weekdays: string;
        hour: string;
    }[];
    street?: string;
    region?: string;
    city_name?: string;
    state_name?: string;
    uf?: string;
}
