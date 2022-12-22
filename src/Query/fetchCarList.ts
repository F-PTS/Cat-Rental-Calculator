import { Car } from "../types/Car";

const fetchCarList = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/cars`).then((res) =>
        res.json()
    );
};

export default fetchCarList;
