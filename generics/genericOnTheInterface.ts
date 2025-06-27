interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const userResponse: ApiResponse<string> = {
    data: "Bagus",
    success: true
}


interface ApiWeatherResponse<M, X> {
    data: M,
    success: X
}

const weatherResponse: ApiWeatherResponse<object, boolean> = {
    data: {
        place: "Jakarta"
    },
    success: false
}
