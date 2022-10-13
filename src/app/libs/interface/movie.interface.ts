export interface Genre{
    page:          number;
    results:        Movie[];
    total_pages:   number;
    total_results: number;
}

export interface Movie {
    adult:                 boolean;
    backdrop_path:         string;    
    budget:                number;
    genres:                Gen[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;    
    release_date:          Date;
    revenue:               number;
    runtime:               number;    
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
    belongs_to_collection: BelongsToCollection;
}

export interface Gen {
    id:   number;
    name: string;
}

export interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}
export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Ko = "ko",
    Ru = "ru",
}