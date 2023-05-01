import { BASE_URL, headers } from "./utils";

export function login(data) {
    return fetchAndParse(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers
    })
}
