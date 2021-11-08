let GetPetsTests = {
    "zero_id":{
        petID:0,
        testID:"@TC005",
        expectedResponseCode:404,
        expectedCode:1,
        expectedType:"error",
        expectedMessage:"Pet not found"
    },
    "empty_string_id":{
        petID:"",
        testID:"@TC006",
        expectedResponseCode:405,
        expectedCode:405,
        expectedType:"unknown",
        expectedMessage:"NONE"
    },
    "string_id":{
        petID:"qwert",
        testID:"@TC007",
        expectedResponseCode:404,
        expectedCode:404,
        expectedType:"unknown",
        expectedMessage:"java.lang.NumberFormatException: For input string: \"qwert\""
    }
}
let DeletePetsTests = {
    "zero_id":{
        petID:0,
        testID:"@TC008",
        expectedResponseCode:404,
        expectedType:"NONE",
        expectedMessage:"NONE"
    },
    "empty_string_id":{
        petID:"",
        testID:"@TC009",
        expectedResponseCode:405,
        expectedType:"NONE",
        expectedMessage:"NONE"
    },
    "string_id":{
        petID:"qwert",
        testID:"@TC010",
        expectedResponseCode:404,
        expectedType:"unknown",
        expectedMessage:"java.lang.NumberFormatException: For input string: \"qwert\""
    }
}
let PostPetsTests = {
    "zero_id":{
        petID:0,
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC011",
        expectedResponseCode:404,
        expectedCode:1,
        expectedType:"error",
        expectedMessage:"Pet not found"
    },
    "empty_string_id":{
        petID:"",
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC012",
        expectedResponseCode:405,
        expectedCode:1,
        expectedType:"error",
        expectedMessage:"Pet not found"
    },
    "string_id":{
        petID:"qwert",
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC013",
        expectedResponseCode:500,
        expectedCode:500,
        expectedType:"unknown",
        expectedMessage:"something bad happened"
    }
}
let PutPetsTests = {
    "zero_id":{
        petID:0,
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC011",
        expectedResponseCode:404,
        expectedCode:1,
        expectedType:"error",
        expectedMessage:"Pet not found"
    },
    "empty_string_id":{
        petID:"",
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC012",
        expectedResponseCode:405,
        expectedCode:1,
        expectedType:"error",
        expectedMessage:"Pet not found"
    },
    "string_id":{
        petID:"qwert",
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"active",
        testID:"@TC013",
        expectedResponseCode:500,
        expectedCode:500,
        expectedType:"unknown",
        expectedMessage:"something bad happened"
    },
    "invalid_status":{
        petID:123456,
        categoryID:1,
        categoryName:"CategoryName",
        name:"TestName",
        photoUrl:"TestURL",
        tagsID:1,
        tagsName:"TagName",
        status:"not good status",
        testID:"@TC013",
        expectedResponseCode:500,
        expectedCode:500,
        expectedType:"unknown",
        expectedMessage:"something bad happened"
    }
}
module.exports = {
    GetPetsTests,DeletePetsTests,PostPetsTests,PutPetsTests
}