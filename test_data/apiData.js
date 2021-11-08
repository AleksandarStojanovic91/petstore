let apis = {
    getPets: "/pet/$",
    postPets: "/pet",
    putPets: "/pet",
    deletePets: "/pet/$"
}
let putPetBody = {
        "id": 0,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }
let postPetBody = {
    "id": 0,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}
let deletePetHeaders = {
    api_key: "special-key",
    accept: "application/json"
}
let commonHeaders = {
    accept: "application/json"
}

module.exports = {
    apis,putPetBody,postPetBody,deletePetHeaders,commonHeaders
}