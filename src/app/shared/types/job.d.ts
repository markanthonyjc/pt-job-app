export interface Job {
    id: number;
    name: string;
    type: string;
    condition: string;
    company: Company;
    skills: string[];
    publishing: Publishing;
}

export interface Company {
    image: string;
    name: string;
    badges: string[];
}

export interface Publishing {
    time_elapsed: string;
}
