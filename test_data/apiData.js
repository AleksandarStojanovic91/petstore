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
        "name": "TestCategoryName"
    },
    "name": "TestPetName",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1,
            "name": "TestPetTag"
        }
    ],
    "status": "available"
    }
let postPetBody = {
    "id": 0,
    "category": {
        "id": 0,
        "name": "TestCategoryName"
    },
    "name": "TestPetName",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 1,
            "name": "TestPetTag"
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