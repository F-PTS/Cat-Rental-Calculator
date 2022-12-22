const fetchCar = (carId: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/cars/${carId}`).then((res) =>
        res.json()
    );
};

export default fetchCar;
