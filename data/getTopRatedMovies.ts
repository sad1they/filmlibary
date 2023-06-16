type FetchOptions = {
    method: string;
    headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
    }
}


const getTopRatedMovies = async () => {
    const url: string = process.env.TOP250!;
    const options: FetchOptions  = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.XRAPIDAPIKEY!,
            'X-RapidAPI-Host': process.env.XRAPIDAPIHOST!
        }
    };
    
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error('Failed to get data top movies')
    }

    return response.json()
    
}

export default getTopRatedMovies;